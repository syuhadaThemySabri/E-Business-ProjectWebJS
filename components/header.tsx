"use client";

import { ShoppingCart, Menu, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useCart } from "./cart-provider";
import Link from "next/link";
import { useState } from "react";
import CartSheet from "./cart-sheet";

export default function Header() {
  const { setTheme, theme } = useTheme();
  const { state } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-4">
                <Link href="/" onClick={() => setIsMenuOpen(false)}>
                  Home
                </Link>
                <Link href="/products" onClick={() => setIsMenuOpen(false)}>
                  Products
                </Link>
                <Link href="/categories" onClick={() => setIsMenuOpen(false)}>
                  Categories
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          
          <Link href="/" className="text-xl font-bold">
            LuxeCart
          </Link>
          
          <nav className="hidden lg:flex items-center gap-6">
            <Link href="/products" className="text-sm font-medium">
              Products
            </Link>
            <Link href="/categories" className="text-sm font-medium">
              Categories
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
          
          <CartSheet>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {state.items.length > 0 && (
                <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-xs text-primary-foreground flex items-center justify-center">
                  {state.items.length}
                </span>
              )}
            </Button>
          </CartSheet>
        </div>
      </div>
    </header>
  );
}