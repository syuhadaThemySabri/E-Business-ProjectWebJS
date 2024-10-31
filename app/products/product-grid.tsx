"use client";

import { formatPrice } from "@/lib/utils";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useCart } from "@/components/cart-provider";
import { toast } from "sonner";

type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
};

export default function ProductGrid({ products }: { products: Product[] }) {
  const { dispatch } = useCart();

  const addToCart = (product: Product) => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        image: product.image,
      },
    });
    toast.success("Added to cart");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <div key={product.id} className="group">
          <Link href={`/products/${product.id}`}>
            <div className="relative aspect-square mb-3 overflow-hidden rounded-lg bg-gray-100">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
          </Link>
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-medium">{product.name}</h3>
              <p className="text-sm text-muted-foreground">
                {formatPrice(product.price)}
              </p>
            </div>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => addToCart(product)}
            >
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}