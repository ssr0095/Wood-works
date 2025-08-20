"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { assets, navMenu } from "@/public/assets/assets";
import { Separator } from "./ui/separator";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "./ui/button";
import ThemeToggle from "./ThemeToggle";
import {
  Menu,
  ArrowRight,
  Copy,
  Phone,
  Headphones,
  Mail,
} from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const [openDraw, setOpenDraw] = useState(false);

  return (
    <>
      {/* Top announcement bar */}
      <div className="lg:hidden w-full bg-primary py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-center">
          <Link
            href="/contact"
            className="text-sm font-medium text-primary-foreground transition-colors"
          >
            Contact us now →
          </Link>
        </div>
      </div>

      {/* HEADER */}
      <header className="w-full sticky top-0 left-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        {/* Main navigation */}
        <nav className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={assets.wood7}
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
          <NavigationMenu className="max-lg:hidden" viewport={false}>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/">Home</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[300px] gap-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/services/#service-01">
                          <div className="font-medium">Components</div>
                          <div className="text-muted-foreground">
                            Browse all components in the library.
                          </div>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="/services/#service-02">
                          <div className="font-medium">Documentation</div>
                          <div className="text-muted-foreground">
                            Learn how to use the library.
                          </div>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="/services/#service-03">
                          <div className="font-medium">Blog</div>
                          <div className="text-muted-foreground">
                            Read our latest blog posts.
                          </div>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="/services/#service-04">
                          <div className="font-medium">Follow</div>
                          <div className="text-muted-foreground">
                            Read our latest blog posts.
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/gallery">Gallery</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/about">About Us</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-5">
            <ThemeToggle />
            <Drawer open={openDraw} onOpenChange={setOpenDraw}>
              <DrawerTrigger asChild>
                <Button>
                  <Phone />
                  Call Now
                </Button>
              </DrawerTrigger>
              <DrawerContent className="flex items-center justify-center">
                <DrawerHeader className="w-full max-w-sm px-4 flex items-center justify-start">
                  <div className="size-12 rounded-full bg-primary text-primary-foreground text-center flex items-center justify-center mb-4">
                    <Headphones />
                  </div>
                  <DrawerTitle className="text-3xl">Contact us</DrawerTitle>
                  <DrawerDescription className="text-md">
                    Help is just a click away.
                  </DrawerDescription>
                </DrawerHeader>
                <div className="w-full max-w-sm px-4">
                  <div className="grid items-start gap-6">
                    <p className="text-sm text-center text-foreground">
                      Call us anytime between 10am - 7pm
                    </p>
                    <div
                      className="flex items-center gap-3 cursor-pointer group"
                      onClick={async () => {
                        await navigator.clipboard.writeText("+91 9894796902");
                        toast.success("Copied");
                      }}
                    >
                      <Phone />
                      <div className="w-full px-4 py-2 rounded-md border border-border bg-accent text-accent-foreground">
                        +91 98947-96902
                      </div>
                      <Button size="icon">
                        <Copy />
                      </Button>
                    </div>
                    <div
                      className="flex items-center gap-3 cursor-pointer"
                      onClick={async () => {
                        await navigator.clipboard.writeText(
                          "care@pskinteriors.com"
                        );
                        toast.success("Copied");
                      }}
                    >
                      <Mail />
                      <div className="w-full px-4 py-2 rounded-md border border-border bg-accent text-accent-foreground">
                        care@pskinteriors.com
                      </div>
                      <Button size="icon">
                        <Copy className="" />
                      </Button>
                    </div>
                  </div>
                </div>
                <DrawerFooter className="w-full max-w-sm my-6">
                  <DrawerClose asChild>
                    <Button variant="secondary">Close</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
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
                  {navMenu.map((item) => (
                    <Link
                      href={item.href}
                      key={item.name}
                      className="w-full px-4 py-2 rounded-2xl text-foreground hover:bg-accent"
                      onClick={() => setOpen(false)} // close sheet when clicked
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
                  <Button onClick={() => router.push("/contact")}>
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

export default Navbar;
