import {
  integer,
  text,
  boolean,
  pgTable,
  timestamp,
  uuid,
  uniqueIndex,
  numeric,
} from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";

export const products = pgTable(
  "products",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    name: text("name").notNull(),
    slug: text("slug").notNull().unique(),
    category: text("category").notNull(),
    description: text("description").notNull(),
    images: text("images").array().notNull(),
    price: numeric("price", {
      mode: "number",
      precision: 12,
      scale: 2,
    }).notNull(),
    brand: text("brand").notNull(),
    stock: integer("stock").notNull(),
    rating: numeric("rating", { mode: "number", precision: 3, scale: 2 }),
    numReviews: integer("num_reviews").default(0),
    isFeatured: boolean("is_featured").default(false),
    banner: text("banner"),
    createdAt: timestamp("created_at").defaultNow(),
  },
  (table) => [uniqueIndex("product_slug_idx").on(table.slug)]
);

export type ProductType = typeof products.$inferSelect;

// export const productInsertSchema = createInsertSchema(products, {
//   name: (schema) => schema.min(3, "Name must be at least 3 characters"),
//   slug: (schema) => schema.min(3, "Slug must be at least 3 characters"),
//   category: (schema) => schema.min(3, "Category must be at least 3 characters"),
//   brand: (schema) => schema.min(3, "Brand must be at least 3 characters"),
//   description: (schema) =>
//     schema.min(3, "Description must be at least 3 characters"),
// });
