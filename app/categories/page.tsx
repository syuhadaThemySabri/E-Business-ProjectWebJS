import { categories } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function CategoriesPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/categories/${category.id}`}
            className="group"
          >
            <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100">
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-white">
                    {category.name}
                  </h2>
                  <p className="text-white/90">{category.description}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}