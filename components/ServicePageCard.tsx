"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ServiceCategoryType } from "@/public/assets/assets";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const ServicePageCard = ({
  service,
  key,
}: {
  service: ServiceCategoryType;
  key: number;
}) => {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggleExpand = (index: string) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div key={key} className="mb-16" id={service.key}>
      <div className="my-10">
        <h2 className=" relative text-2xl lg:text-3xl font-bold text-foreground dark:text-primary-foreground mb-3">
          {service.category}
        </h2>
        <p className="max-w-4xl text-md text-foreground">
          {service.description}
        </p>
      </div>
      <Carousel>
        <CarouselContent>
          {service?.items?.map((item, index: number) => {
            const isExpanded = expanded[service.category + index];

            return (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Image
                  src={item.image}
                  alt={item.name}
                  className="relative w-full aspect-3/4 object-cover hover:transform hover:scale-[1.03] transition-transform duration-400"
                  loading="lazy"
                  placeholder="blur"
                />

                <h2 className="text-lg font-semibold text-foreground dark:text-primary-foreground mt-2">
                  {item.name}
                </h2>

                <p
                  className={cn(
                    "mt-1 text-sm text-foreground transition-all duration-300",
                    isExpanded ? "line-clamp-none" : "line-clamp-2"
                  )}
                >
                  {item.description}
                </p>

                <button
                  onClick={() => toggleExpand(service.category + index)}
                  className="mt-1 text-xs text-muted-foreground/95 hover:underline"
                >
                  {isExpanded ? "Show less ↑" : "Read more ↓"}
                </button>
              </CarouselItem>
            );
          })}
        </CarouselContent>

        <CarouselPrevious className="max-sm:hidden" />
        <CarouselNext className="max-sm:hidden" />
      </Carousel>
      <Separator className="my-6" />
    </div>
  );
};

export default ServicePageCard;
