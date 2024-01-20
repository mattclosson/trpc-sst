import { drizzle } from "drizzle-orm/planetscale-serverless";
import { Client, connect } from "@planetscale/database";
import { Config } from "sst/node/config";
import * as schema from "./schema";

// create the connection
const connection = connect({
  host: "aws.connect.psdb.cloud",
  username: Config.PLANETSCALE_USERNAME,
  password: Config.PLANETSCALE_PASSWORD,
});

export const db = drizzle(connection, { schema });
