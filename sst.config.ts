import { SSTConfig } from "sst";
import { Web, API, Secrets } from "./stacks/MyStack";

export default {
  config(_input) {
    return {
      name: "trpc-sst",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(Secrets).stack(API).stack(Web);
  },
} satisfies SSTConfig;
