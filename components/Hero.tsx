"use client";
import Image from "next/image";
import ContactDrawerDynamic from "./dynamic/ContactDrawerDynamic";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Hero = () => {
  const router = useRouter();
  const { theme } = useTheme();
  const [currTheme, setCurrTheme] = useState(
    "/assets/images/background/stacked-peaks-05-noise.webp"
  );

  useEffect(() => {
    setCurrTheme(
      theme == "dark"
        ? "/assets/images/background/stacked-peaks-04-dark-noise.webp"
        : "/assets/images/background/stacked-peaks-05-noise.webp"
    );
  }, [theme]);
  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      {/* <div
        className="absolute inset-0 bg-cover bg-center bg-[url(/assets/images/background/stacked-peaks-05-noise.webp)] dark:bg-[url(/assets/images/background/stacked-peaks-04-dark-noise.webp)]"
      /> */}
      <Image
        src={currTheme}
        alt="Background"
        layout="fill" // Important for background effect
        objectFit="cover" // Important for background effect
        className="background-image" // Apply CSS class
        fetchPriority="high"
        loading="eager"
      />
      {/* Content */}
      <div className="relative h-full flex flex-col items-start justify-center text-center">
        <div className="max-w-7xl px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-medium leading-tight xl:leading-32 tracking-tight text-balance text-center md:text-start text-primary-foreground mb-16">
            <span>Built for Homes, Offices & </span> Beyond
            {/* Designs that Define Your Space 
            Where Function Meets Craftsmanship

Spaces Styled, Work Perfected

Quality Interiors, Every Detail

Tailored Designs for Every Space

Interiors with Purpose & Precision

Built for Homes, Offices & Beyond */}
          </h1>

          {/* Subheading */}
          {/* <p className="text-[min(4vw,18px)] text-on-primary/90 max-w-2xl mx-auto mb-10">
Your trusted partner for high-quality, sustainable craftsmanship — whether it’s a custom kitchen, sleek office fitting, or a stylish store renovation.          </p> */}

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button
              variant="secondary"
              size="lg"
              onClick={() => router.push("/services")}
            >
              Explore Our Services
            </Button>

            <ContactDrawerDynamic>
              <Button
                variant="ghost"
                size="lg"
                className="border-2 border-white text-white "
              >
                Get a Free Quote
              </Button>
            </ContactDrawerDynamic>
          </div>
        </div>

        {/* Scroll Indicator */}
        {/* <div className="max-md:hidden absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
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
            className="text-on-primary"
          >
            <path d="M12 5v14" />
            <path d="m19 12-7 7-7-7" />
          </svg>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
