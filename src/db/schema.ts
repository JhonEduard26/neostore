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

export const products = pgTable(
  "products",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    name: text("name").notNull(),
    slug: text("slug").notNull().unique(),
    category: text("category").notNull(),
    description: text("description").notNull(),
    images: text("images").array(),
    price: numeric("price", { mode: "number", precision: 12, scale: 2 }),
    brand: text("brand").notNull(),
    stock: integer("stock"),
    rating: numeric("rating", { mode: "number", precision: 3, scale: 2 }),
    numReviews: integer("num_reviews").default(0),
    isFeatured: boolean("is_featured").default(false),
    banner: text("banner"),
    createdAt: timestamp("created_at").defaultNow(),
  },
  (table) => [uniqueIndex("product_slug_idx").on(table.slug)]
);

export type ProductType = typeof products.$inferSelect;
