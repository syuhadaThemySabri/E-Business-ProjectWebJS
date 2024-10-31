import { products } from "@/lib/utils";
import ProductGrid from "./product-grid";

export default function ProductsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">All Products</h1>
      <ProductGrid products={products} />
    </div>
  );
}