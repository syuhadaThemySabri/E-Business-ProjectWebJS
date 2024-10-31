import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
}

export const products = [
  {
    id: "1",
    name: "Premium Leather Backpack",
    description: "Handcrafted from genuine leather with multiple compartments",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=800",
    category: "accessories"
  },
  {
    id: "2",
    name: "Wireless Noise-Canceling Headphones",
    description: "Premium sound quality with active noise cancellation",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800",
    category: "electronics"
  },
  {
    id: "3",
    name: "Smart Fitness Watch",
    description: "Track your health and fitness with this advanced smartwatch",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&q=80&w=800",
    category: "electronics"
  },
  {
    id: "4",
    name: "Minimalist Desk Lamp",
    description: "Modern design with adjustable brightness and color temperature",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=800",
    category: "home"
  },
  {
    id: "5",
    name: "Organic Cotton T-Shirt",
    description: "Sustainable and comfortable everyday wear",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800",
    category: "clothing"
  },
  {
    id: "6",
    name: "Ceramic Coffee Set",
    description: "Handmade ceramic coffee cups and saucers",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&q=80&w=800",
    category: "home"
  }
];

export const categories = [
  {
    id: "electronics",
    name: "Electronics",
    description: "Latest gadgets and tech accessories",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "clothing",
    name: "Clothing",
    description: "Fashion for every style",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "accessories",
    name: "Accessories",
    description: "Complete your look",
    image: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "home",
    name: "Home & Living",
    description: "Make your space beautiful",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800"
  }
];