"use client";
import Image from "next/image";
import Link from "next/link";
import { assets, navMenu } from "@/public/assets/assets";
import { useState } from "react";
import { X, Menu } from "lucide-react";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      {/* Top announcement bar */}
      <div className="md:hidden w-full bg-secondary-container py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-center">
          <Link
            href="/contact"
            className="rounded-full px-4 py-1 text-sm font-medium bg-on-primary text-on-secondary-container hover:bg-secondary-container-hover transition-colors"
          >
            Contact us now →
          </Link>
        </div>
      </div>

      {/* HEADER */}
      <header className="w-full sticky top-0 left-0 z-50 bg-surface-container shadow-md">
        {/* Main navigation */}
        <nav className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={assets.logo}
              width={32}
              height={32}
              alt="PSK Wood Works Logo"
              className="text-on-primary rounded-full"
            />
            <span className="text-xl font-semibold text-on-surface">
              PSK Wood Works
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 flex-1 justify-center">
            {navMenu.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 rounded-full text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors duration-200 font-medium text-md"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-2">
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-full bg-primary text-on-primary hover:bg-primary/90 transition-colors font-medium text-sm shadow-xs hover:shadow-sm flex items-center gap-1.5"
            >
              Contact Us
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

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-full hover:bg-surface-container-high transition-colors"
            onClick={() => setVisible(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6 text-on-surface" />
          </button>
        </nav>
      </header>

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
