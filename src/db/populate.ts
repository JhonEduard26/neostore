import { db } from "./drizzle";
import sampleData from "./sample-data";
import { products } from "./schema";

async function main() {
  await db.delete(products);
  console.log(`Inserting ${sampleData.products.length} products...`);

  const insertedProducts = await db
    .insert(products)
    .values(sampleData.products)
    .returning();

  const productsLength = insertedProducts.length;
  console.log("✨ Done!");

  process.exit();
}

main();
