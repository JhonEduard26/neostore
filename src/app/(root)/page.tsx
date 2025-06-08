import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/products/actions";

export const metadata = {
  title: "Home",
};

const Page = async () => {
  const latestProducts = await getLatestProducts();

  return (
    <div>
      <ProductList data={latestProducts} title="Newest Arrivals" />
    </div>
  );
};

export default Page;
