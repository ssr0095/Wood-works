import { assets } from "@/public/assets/assets";
import { ArrowDown, ArrowRight } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative w-full h-[90vh] bg-cover bg-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url(/assets/images/img_05.jpg)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-primary/30 to-primary/90 z-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Decorative Elements */}
          <div className="flex justify-center mb-4">
            <div className="w-16 h-1 bg-accent mb-2" />
          </div>

          {/* Main Heading */}
          <h1 className="text-[min(12vw,63px)] font-bold leading-tight tracking-tight text-on-primary mb-6">
            <span className="inline-block">Woodwork that</span>
            <span className="relative inline-block ml-2">
              <span className="relative z-10">Speaks Quality</span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-accent/30 -z-0" />
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-[min(4vw,18px)] text-on-primary/90 max-w-2xl mx-auto mb-10">
            Transforming your spaces with expert carpentry and custom woodwork
            solutions tailored to your lifestyle.
          </p>

          {/* CTA Buttons */}
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
              Get Free Quote
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="max-md:hidden absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-on-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
