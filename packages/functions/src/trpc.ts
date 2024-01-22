import * as trpc from "@trpc/server";
import { z } from "zod";
import { awsLambdaRequestHandler } from "@trpc/server/adapters/aws-lambda";
import { db } from "@core/drizzle";
import { user } from "@core/drizzle/schema";

const t = trpc.initTRPC.create();

const router = t.router({
  hello: t.procedure.input(z.string()).query(({ input }) => `Hello, ${input}!`),
  bye: t.procedure
    .input(
      z.object({
        message: z.string(),
      })
    )
    .query(({ input }) => `Bye, ${input.message}!`),
  users: t.procedure.query(async () => {
    const response = await db.select().from(user);

    return response;
  }),
});

export type AppRouter = typeof router;

export const handler = awsLambdaRequestHandler({
  router: router,
});
