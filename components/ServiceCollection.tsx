"use client";
import { category } from "@/public/assets/assets";
import Service from "./Service";
import Link from "next/link";
// import Loading from "./ServiceCardSkeleton"
// import { useState } from "react"

const ServiceCollection = () => {
  const filter = category.slice(0, 6);
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <div className="my-28">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-muted text-muted-foreground border text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-on-surface mb-4">
            Exceptional Woodwork{" "}
            <span className="text-primary">Crafted with Passion</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-on-surface-variant">
            We combine traditional techniques with modern innovation to deliver
            furniture that stands the test of time.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-5">
          {filter?.map((item, index) => (
            <Service
              key={index}
              name={item?.name}
              description={item?.description}
              image={item?.image}
            />
          ))}
        </div>
        {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {filter?.map((item, index) => (
                    <Service
                    key={index}
                    name={item?.name}
                    description={item?.description}
                    image={item?.image}
                    />
                ))}
            </div> */}
        <div className="w-full text-center mt-10">
          <Link
            href="/services"
            className="inline-flex items-center px-8 py-3 rounded-full text-foreground border-2 hover:bg-accent border-primary transition-all"
          >
            <span className="relative z-10">Explore more</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCollection;
