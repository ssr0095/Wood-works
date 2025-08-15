<<<<<<< Updated upstream
import { assets } from "@/public/assets/assets";
import { ArrowDown, ArrowRight } from "lucide-react";
import Link from "next/link";
=======
"use client"
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
>>>>>>> Stashed changes

const Hero = () => {
    const router = useRouter()
  
  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-[url(/assets/images/stacked-peaks-05-noise.webp)] dark:bg-[url(/assets/images/stacked-peaks-04-dark-noise.webp)]"
          // style={{ backgroundImage: "url(/assets/images/stacked-peaks-05.svg)" }}
        />
      {/* Content */}
      <div className="relative h-full flex flex-col items-start justify-center text-center">
        <div className="max-w-7xl px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
          {/* Main Heading */}
          <h1 className="text-[min(15vw,135px)] font-medium leading-tight xl:leading-32 tracking-tight text-balance max-sm:text-center text-start text-primary-foreground mb-16">
            <span>Woodwork that {" "}</span>Speaks Quality
          </h1>

          {/* Subheading */}
          {/* <p className="text-[min(4vw,18px)] text-on-primary/90 max-w-2xl mx-auto mb-10">
            Transforming your spaces with expert carpentry and custom woodwork
            solutions tailored to your lifestyle.
          </p> */}

          {/* CTA Buttons */}
<<<<<<< Updated upstream
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="flex items-center px-4 py-2 bg-accent text-on-accent rounded-full font-bold gap-1"
            >
              Explore Our Services
              <ArrowRight className="inline-block size-5" />
            </Link>

            <Link
              href="/contact"
              className="px-4 py-2 border-2 border-on-primary text-on-primary rounded-full font-bold"
            >
=======
          <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
            <Button variant="secondary" size="lg" onClick={()=> router.push('/services')}>
              Explore Our Services
            </Button>
            <Button variant="ghost" size="lg" className="border-2 border-white text-white " onClick={()=> router.push('/contact')}>
>>>>>>> Stashed changes
              Get Free Quote
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
<<<<<<< Updated upstream
        <div className="max-md:hidden absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-on-primary" />
        </div>
=======
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
>>>>>>> Stashed changes
      </div>
    </section>
  );
};

export default Hero;
