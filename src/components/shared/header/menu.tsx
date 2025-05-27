import { Button } from "@/components/ui/button";
import ModeToggle from "./mode-toggle";
import Link from "next/link";
import { EllipsisVertical, ShoppingCart, User } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const menu = () => {
  return (
    <div className="flex justify-end gap-3">
      <nav className="md:hidden">
        <Sheet>
          <SheetTrigger aria-label="Open menu" title="Open menu">
            <EllipsisVertical />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-2 items-start px-4">
              <ModeToggle />
              <Button asChild variant="ghost">
                <Link href="/cart">
                  <ShoppingCart /> Cart
                </Link>
              </Button>
              <Button asChild>
                <Link href="/sign-in">
                  <User /> Sign in
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </nav>

      <nav className="hidden md:flex w-full max-w-xs gap-1">
        <ModeToggle />
        <Button asChild variant="ghost">
          <Link href="/cart">
            <ShoppingCart /> Cart
          </Link>
        </Button>
        <Button asChild>
          <Link href="/sign-in">
            <User /> Sign in
          </Link>
        </Button>
      </nav>
    </div>
  );
};

export default menu;
