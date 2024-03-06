import { pgTable, serial, text, varchar, integer } from "drizzle-orm/pg-core";

export const deneme = pgTable('deneme', {
  id: serial('id').primaryKey(),
  name: text('name'),
  email: varchar('email', { length: 255 }),
  age: integer('age'),
});
