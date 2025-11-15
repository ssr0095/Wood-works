"use client";
import Link from "next/link";
import ServiceCard from "./Service";
import { services, servicesAdd } from "@/public/assets/assets";

const ServiceCollection = () => {
  const filter = services.concat(servicesAdd);
  return (
    <div className="">
      <div className="my-28">
        <div className="px-4 sm:px-[5vw] text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-muted text-muted-foreground border text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-on-surface mb-4">
            Complete Interior <span className="text-primary">Solutions</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-on-surface-variant">
            From homes to offices and commercial spaces, we deliver custom
            interiors designed to fit your needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          {filter?.map((item, index) => (
            <ServiceCard
              key={index}
              title={item?.["short-name"]}
              description={item?.description}
              items={item?.items}
              link={item?.key}
            />
          ))}
        </div>
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
