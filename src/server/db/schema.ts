import { pgTable, uuid, text, timestamp } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { createInsertSchema } from "drizzle-zod";

// Users
export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom().notNull(),
  created_at: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  clerk_id: text("clerk_id").unique().notNull(),
});

export const userRelations = relations(users, ({}) => ({}));

export const createUserSchema = createInsertSchema(users);
