"use client";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import Link from "next/link";
import { useState } from "react";
import { navItems } from "../data";
import { Star } from "lucide-react";
import { usePathname } from "next/navigation";

const Menubar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeSheet = () => {
    setIsOpen(false);
  };

  const pathName = usePathname();

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger>
        <h6
          onClick={() => setIsOpen(true)}
          className="block lg:hidden text-xs border-violet-500 border-b-2 pb-1 uppercase"
        >
          Menu
        </h6>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="flex flex-col justify-center items-start w-full bg-neutral-900 text-white font-unbounded font-light gap-y-16 border-black border-r-2 uppercase pl-10 text-2xl"
      >
        <SheetTitle className="sr-only">Menu</SheetTitle>{" "}
        {pathName !== "/" && (
          <Link
            href="/"
            onClick={closeSheet}
            className="flex justify-center items-center gap-x-4"
          >
            <Star className="text-violet-500 w-2.5 h-2.5" />
            Home
          </Link>
        )}
        {navItems.map((item, idx) => (
          <Link
            key={idx}
            href={item.link}
            onClick={closeSheet}
            className="flex justify-center items-center gap-x-4"
          >
            <Star className="text-violet-500 w-2.5 h-2.5" />
            {item.name}
          </Link>
        ))}
        <Link
          href="/Saad_Sayyed_CV.pdf"
          target="_blank"
          className="flex justify-center items-center gap-x-4"
        >
          <Star className="text-violet-500 w-2.5 h-2.5" />
          Resume
        </Link>
      </SheetContent>
    </Sheet>
  );
};

export default Menubar;
