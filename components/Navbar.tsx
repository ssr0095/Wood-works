"use client";
import Image from "next/image";
import Link from "next/link";
// import { useRouter } from "next/navigation";
import { assets, navMenu } from "@/public/assets/assets";
import { Menu, PhoneIcon, ArrowRight, Copy, Phone } from "lucide-react";
import { Button } from "./ui/button";
import ThemeToggle  from "./ThemeToggle";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from "./ui/separator";
import { useState } from "react";
<<<<<<< Updated upstream
import { X, Menu, ArrowRight, Phone } from "lucide-react";
=======
import { Input } from "./ui/input";
import { Label } from "@radix-ui/react-label";
>>>>>>> Stashed changes

const Navbar = () => {
  const [open, setOpen] = useState(false)
  // const router = useRouter()
  const [openDraw, setOpenDraw] = useState(false)

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
              alt="PSK Wood Works Logo"
              className="rounded-full"
            />
<<<<<<< Updated upstream
            <span className="text-xl font-bold text-on-surface">
=======
            <h1 className="text-lg md:text-xl font-semibold text-foreground ">
>>>>>>> Stashed changes
              PSK Wood Works
            </h1>
          </Link>
          {/* Desktop Navigation */}
          <NavigationMenu className="max-lg:hidden" viewport={false}>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href='/'>Home</Link>
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
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/gallery">Gallery</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/about">About Us</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          {/* Desktop CTA */}
<<<<<<< Updated upstream
          <div className="hidden md:flex items-center gap-2">
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-full bg-primary text-on-primary hover:bg-primary/90 transition-colors font-medium text-sm shadow-xs hover:shadow-sm flex items-center gap-1.5"
            >
              Contact Us
              <Phone className="size-4" />
            </Link>
=======
          <div className="hidden lg:flex items-center gap-5">
            <ThemeToggle/>
            <Drawer open={openDraw} onOpenChange={setOpenDraw}>
              <DrawerTrigger asChild>
                <Button><Phone/>Call Now</Button>
              </DrawerTrigger>
              <DrawerContent className="flex items-center justify-center">
                <DrawerHeader className="text-left">
                  <DrawerTitle>Edit profile</DrawerTitle>
                  <DrawerDescription>
                    Make changes to your profile here. Click save when you&apos;re done.
                  </DrawerDescription>
                </DrawerHeader>
                <div className="w-full max-w-sm px-4">
                  <div className={" grid items-start gap-6"}>
                    <div className="grid gap-3">
                      <Label htmlFor="email">Email</Label>
                      <div className="flex items-center gap-1">
                        <Input type="email" id="email" defaultValue="shadcn@example.com" />
                        <Button variant="outline" size="icon"><Copy className=""/></Button>
                      </div>
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="username">Username</Label>
                      <div className="flex items-center gap-1">
                        <Input id="username" defaultValue="@shadcn" />
                        <Button variant="outline" size="icon"><Copy className=""/></Button>
                      </div>
                    </div>
                  </div>
                </div>
                <DrawerFooter className="w-full max-w-sm my-6">
                  <DrawerClose asChild>
                    <Button>Close</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
>>>>>>> Stashed changes
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-1">
            <ThemeToggle/>
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
                      alt="PSK Wood Works"
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
                  <Button onClick={() => handleLinkClick("/contact")}>
                    Get Free Estimate <ArrowRight className="size-4" />
                  </Button>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </header>
<<<<<<< Updated upstream

      {/* Mobile Sidebar */}
      <div className="md:hidden">
        {/* Overlay */}
        <div
          className={`fixed inset-0 bg-surface-container-lowest/80 backdrop-blur-sm z-40 transition-opacity ${
            visible ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setVisible(false)}
        />

        {/* Sidebar */}
        <div
          className={`fixed top-0 right-0 h-full w-80 max-w-full bg-surface-container z-50 shadow-lg transition-transform duration-300 ease-out ${
            visible ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-outline-variant">
            <Link
              href="/"
              onClick={() => setVisible(false)}
              className="flex items-center gap-3"
            >
              <Image
                src={assets.logo}
                width={32}
                height={32}
                alt="PSK Wood Works"
                className="text-on-primary rounded-full"
              />
              <span className="text-xl font-semibold text-on-surface">
                PSK Wood Works
              </span>
            </Link>
            <button
              onClick={() => setVisible(false)}
              className="p-2 rounded-full hover:bg-surface-container-high transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6 text-on-surface" />
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex flex-col p-2">
            {navMenu.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setVisible(false)}
                className="px-4 py-3.5 rounded-lg text-on-surface hover:bg-surface-container-high transition-colors font-medium flex items-center gap-3"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Contact Section */}
          <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-outline-variant bg-surface-container-high">
            <div className="mb-4 text-sm text-on-surface-variant">
              Ready to start your project?
            </div>
            <Link
              href="/contact"
              onClick={() => setVisible(false)}
              className="w-full px-6 py-3 rounded-full bg-primary text-on-primary font-medium flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors shadow-xs"
            >
              <span>Get Free Estimate</span>
              <ArrowRight />
            </Link>
          </div>
        </div>
      </div>
=======
>>>>>>> Stashed changes
    </>
  );
};

export default Navbar;
