import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import ProductPrice from "./product-price";

const ProductCard = ({ product }: { product: any }) => {
  return (
    <Card>
      <CardHeader>
        <Link href={`/product/${product.slug}`}>
          <Image
            src={product.images[0]}
            alt={product.name}
            width={300}
            height={300}
            priority
          />
        </Link>
        <CardTitle>
          <Link href={`/product/${product.slug}`} className="hover:underline">
            {product.name}
          </Link>
        </CardTitle>
        <CardDescription>{product.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-xs">{product.brand}</p>
      </CardContent>
      <CardFooter className="flex-between">
        <p>{product.rating} Stars</p>
        {product.stock > 0 ? (
          <ProductPrice price={product.price} className="font-semibold" />
        ) : (
          <p className="text-destructive">Out of stock</p>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
