import { categories, products } from "@/lib/utils";
import ProductGrid from "@/app/products/product-grid";
import { notFound } from "next/navigation";

export default function CategoryPage({
  params,
}: {
  params: { id: string };
}) {
  const category = categories.find((c) => c.id === params.id);
  
  if (!category) {
    notFound();
  }

  const categoryProducts = products.filter(
    (product) => product.category === params.id
  );

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">{category.name}</h1>
      <p className="text-muted-foreground mb-8">{category.description}</p>
      <ProductGrid products={categoryProducts} />
    </div>
  );
}