import { Config } from "sst/node/config";
import { AuthHandler, CodeAdapter, GoogleAdapter } from "sst/node/future/auth";
import { Account } from "@core/account";

import { sessions } from "./sessions";

export const handler = AuthHandler({
  sessions,
  providers: {
    google: GoogleAdapter({
      mode: "oidc",
      clientID: Config.GOOGLE_CLIENT_ID,
    }),
    email: CodeAdapter({
      async onCodeRequest(code, claims) {
        return {
          statusCode: 302,
          headers: {
            Location:
              process.env.AUTH_FRONTEND_URL +
              "/auth/code?" +
              new URLSearchParams({ email: claims.email }).toString(),
          },
        };
      },
      async onCodeInvalid() {
        return {
          statusCode: 302,
          headers: {
            Location:
              process.env.AUTH_FRONTEND_URL + "/auth/code?error=invalid_code",
          },
        };
      },
    }),
  },
  callbacks: {
    auth: {
      async allowClient() {
        return true;
      },
      async success(input, response) {
        let email: string | undefined;

        if (input.provider === "email") {
          email = input.claims.email;
        }
        if (!email) throw new Error("No email found");

        let accountID = await Account.fromEmail(email).then((x) => x?.id);
        if (!accountID) {
          console.log("creating account for", email);
          accountID = await Account.create({
            email: email!,
          });
        }

        return response.session({
          type: "account",
          properties: {
            accountID: accountID!,
            email: email!,
          },
        });
      },
    },
  },
});
