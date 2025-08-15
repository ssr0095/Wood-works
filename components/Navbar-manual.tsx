"use client";
import Image from "next/image";
import Link from "next/link";
import { assets, navMenu } from "@/public/assets/assets";
import { useState } from "react";
import { X, Menu, PhoneIcon } from "lucide-react";
import { Button } from "./ui/button";
import ThemeToggle  from "./ThemeToggle";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      {/* Top announcement bar */}
      <div className="md:hidden w-full bg-primary py-2 px-4">
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
              src={assets.logo}
              width={32}
              height={32}
              alt="PSK Wood Works Logo"
              className="rounded-full"
            />
            <h1 className="text-lg md:text-xl font-semibold text-foreground ">
              PSK Wood Works
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 flex-1 justify-center">
            {navMenu.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 rounded-full hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 text-foreground transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div>
          </div>
          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-5">
            <ThemeToggle/>
            <Link
              href="/contact"
              // className="px-5 py-2.5 rounded-full bg-primary text-on-primary hover:bg-primary/90 transition-colors font-medium text-sm shadow-xs hover:shadow-sm flex items-center gap-1.5"
            >
              <Button size="lg"><PhoneIcon/>Call Now</Button>
            </Link> 
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-1">
            <ThemeToggle/>
            <button
              className="p-2 rounded-full hover:bg-accent hover:text-accent-foreground active:bg-accent/80 dark:hover:bg-secondary/10 dark:active:bg-secondary/20 dark:active:ring-secondary/25 ring ring-background/0 transition-colors"
              onClick={() => setVisible(true)}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6 text-muted-foreground grow-0" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Sidebar */}
      <div>
        {/* Overlay */}
        <div
          className={`fixed inset-0 bg-surface-lowest/80 backdrop-blur-sm z-50 transition-opacity ${
            visible ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setVisible(false)}
        />

        {/* Sidebar */}
        <div
          className={`fixed top-0 right-0 h-full w-80 max-w-full bg-background z-50 shadow-lg transition-transform duration-300 ease-out ${
            visible ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-border">
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
                className="rounded-full"
              />
              <h1 className="text-xl font-semibold text-foreground">
                PSK Wood Works
              </h1>
            </Link>
            <button
              onClick={() => setVisible(false)}
              className="p-2 rounded-full hover:bg-accent hover:text-accent-foreground active:bg-accent/80 dark:hover:bg-secondary/10 dark:active:bg-secondary/20 dark:active:ring-secondary/25 ring ring-background/0 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6 text-muted-foreground" />
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex flex-col p-2">
            {navMenu.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setVisible(false)}
                className="px-4 py-3.5 rounded-lg text-on-surface hover:bg-surface-high transition-colors font-medium flex items-center gap-3"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Contact Section */}
          <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200 bg-surface-high">
            <div className="mb-4 text-sm text-on-surface-variant">
              Ready to start your project?
            </div>
            <Link
              href="/contact"
              onClick={() => setVisible(false)}
              className="w-full px-6 py-3 rounded-full bg-primary text-on-primary font-medium flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors shadow-xs"
            >
              <span>Get Free Estimate</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right-icon lucide-arrow-right size-4"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
