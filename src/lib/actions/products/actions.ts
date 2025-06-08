"use server";

import { products } from "@/db/schema";
import { db } from "@/db/drizzle";
import { desc } from "drizzle-orm";
import { LATEST_PRODUCTS_LIMIT } from "@/lib/constants";

export async function getLatestProducts() {
  const result = await db
    .select()
    .from(products)
    .limit(LATEST_PRODUCTS_LIMIT)
    .orderBy(desc(products.createdAt));
  return result;
}
