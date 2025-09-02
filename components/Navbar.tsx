"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { assets, navMenu } from "@/public/assets/assets";
import { Separator } from "./ui/separator";
import { useState } from "react";
import { Button } from "./ui/button";
import ThemeToggle from "./ThemeToggle";
import { Menu, ArrowRight, Phone } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Navigation } from "./Navigation";
import ContactDrawer from "./ContactDrawer";
import Banner from "./Banner";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      {/* Banner */}
      <Banner />

      {/* HEADER */}
      <header className="w-full sticky top-0 left-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        {/* Main navigation */}
        <nav className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              placeholder="blur"
              src={assets.logo}
              width={32}
              height={32}
              alt="PSK Interiors Logo"
              className="rounded-full"
            />
            <h1 className="text-lg md:text-xl font-semibold text-foreground ">
              PSK Interiors
            </h1>
          </Link>
          {/* Desktop Navigation */}
          <Navigation />

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-5">
            <ThemeToggle />
            <ContactDrawer>
              <Button>
                <Phone />
                Call Now
              </Button>
            </ContactDrawer>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-1">
            <ThemeToggle />
            {/* Mobile Sidebar */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <button
                  className="p-2 rounded-full hover:bg-accent hover:text-accent-foreground active:bg-accent/80 dark:hover:bg-secondary/10 dark:active:bg-secondary/20 dark:active:ring-secondary/25 ring ring-background/0 transition-colors"
                  aria-label="Open menu"
                >
                  <Menu className="w-6 h-6 text-muted-foreground grow-0" />
                </button>
              </SheetTrigger>
              <SheetContent side="bottom">
                <SheetHeader>
                  <SheetTitle>
                    <Image
                      placeholder="blur"
                      src={assets.logo}
                      width={32}
                      height={32}
                      alt="PSK Interiors Logo"
                      className="rounded-full"
                    />
                  </SheetTitle>
                </SheetHeader>
                <Separator />
                {/* Menu Items */}
                <div className="flex flex-col px-2 gap-3">
                  {navMenu?.map((item) => (
                    <Link
                      href={item.href}
                      key={item.name}
                      className="w-full px-4 py-2 rounded-2xl text-foreground hover:bg-accent"
                      onClick={() => setOpen(false)} // close sheet
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <SheetFooter>
                  <Separator />
                  <div className="mb-4 text-sm text-foreground">
                    Ready to start your project?
                  </div>
                  <Button
                    onClick={() => {
                      setOpen(false);
                      router.push("/contact");
                    }}
                  >
                    Get Free Estimate <ArrowRight className="size-4" />
                  </Button>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </header>
    </>
  );
};

// export setOpenDraw;
export default Navbar;
