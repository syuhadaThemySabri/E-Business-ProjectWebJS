import { products } from "@/lib/utils";
import ProductDetails from "./product-details";
import { notFound } from "next/navigation";

export default function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  return <ProductDetails product={product} />;
}