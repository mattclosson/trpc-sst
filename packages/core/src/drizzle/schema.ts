import {
  index,
  mysqlTable,
  primaryKey,
  timestamp,
  uniqueIndex,
  varchar,
} from "drizzle-orm/mysql-core";
import { id, timestamps, workspaceID } from "../util/sql";

export const user = mysqlTable(
  "user",
  {
    ...workspaceID,
    ...timestamps,
    email: varchar("email", { length: 255 }).notNull(),
    timeSeen: timestamp("time_seen", {
      mode: "string",
    }),
  },
  (table) => ({
    primary: primaryKey({ columns: [table.workspaceID, table.id] }),
    email: uniqueIndex("email").on(table.workspaceID, table.email),
    emailGlobal: index("email_global").on(table.email),
  })
);

export const account = mysqlTable(
  "account",
  {
    ...id,
    ...timestamps,
    email: varchar("email", { length: 255 }).notNull(),
  },
  (user) => ({
    email: uniqueIndex("email").on(user.email),
  })
);
