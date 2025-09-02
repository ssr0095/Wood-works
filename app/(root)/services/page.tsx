"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { assets, ServiceFAQ, services } from "@/public/assets/assets";
import Cta from "@/components/Cta";
import Faq from "@/components/Faq";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

const Services = () => {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggleExpand = (index: string) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
  return (
    <>
      {/* Hero */}
      <section className="w-full h-[30vh] md:h-[50vh] flex items-center justify-center bg-cover bg-center bg-[url(/assets/images/background/stacked-peaks-05-noise.webp)] dark:bg-[url(/assets/images/background/stacked-peaks-04-dark-noise.webp)] overflow-hidden select-none">
        <h1 className="text-3xl z-20 md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
          Our Services
        </h1>
      </section>
      {/* Title */}
      <section className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] select-none">
        <div className="my-28">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-on-surface mb-4">
              Crafting Everyday{" "}
              <span className="text-primary">Spaces with Passion</span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-on-surface-variant">
              Essential interior solutions for homes, offices, and commercial
              spaces—designed for beauty and built for durability.
            </p>
          </div>
        </div>
      </section>
      {/* Services */}
      <section className="my-28 select-none">
        <div className="mt-20 relative" id="service-01">
          <div className="absolute size-40 top-44 right-10 bg-[url(/assets/images/leaf-1.svg)] bg-contain bg-no-repeat transform rotate-45" />
          {/* <div className="w-full h-[10vh] md:h-[20vh] flex items-center justify-center bg-cover bg-center bg-[url(/assets/images/background/stacked-peaks-05-noise.webp)] dark:bg-[url(/assets/images/background/stacked-peaks-04-dark-noise.webp)] overflow-hidden">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground">
              01 SERVICE
            </h2>
          </div> */}
          <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
            {services?.map((service, index) => {
              return (
                <div key={index} className="mb-16" id={service.key}>
                  <div className="my-10">
                    <h2 className=" relative text-2xl lg:text-3xl font-bold text-foreground dark:text-primary-foreground mb-3">
                      {service.category}
                    </h2>
                    <p className="max-w-4xl text-md text-foreground">
                      {service.description}
                    </p>
                  </div>

                  {/* <div className="w-full flex gap-4 items-center justify-center"> */}
                  <Carousel>
                    <CarouselContent>
                      {service.items?.map((item, index: number) => {
                        const isExpanded = expanded[service.category + index];

                        return (
                          <CarouselItem
                            key={index}
                            className="md:basis-1/2 lg:basis-1/3"
                          >
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
                              onClick={() =>
                                toggleExpand(service.category + index)
                              }
                              className="mt-1 text-xs text-muted-foreground/70 hover:underline"
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
            })}
          </div>
          {/* <div className="w-full h-[10vh] md:h-[20vh] flex items-center justify-center bg-cover bg-center bg-[url(/assets/images/background/stacked-peaks-05-noise.webp)] dark:bg-[url(/assets/images/background/stacked-peaks-04-dark-noise.webp)] overflow-hidden">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground">
              02 SERVICE
            </h2>
          </div> */}
          <section className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] select-none">
            <div className="my-28">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-on-surface mb-4">
                  Complete Interior{" "}
                  <span className="text-primary">Solutions</span>
                </h2>
                <p className="max-w-2xl mx-auto text-lg text-on-surface-variant">
                  No detail left behind—doors, partitions, POP, and more to
                  elevate your interiors inside and out.
                </p>
              </div>
            </div>
          </section>
          <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] mt-20">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 grid-rows-[repeat(auto-fit, minmax(200px, 1fr))] transition-all duration-300">
              {/* LEFT */}
              <div className="grid gap-4 col-span-2">
                {/* WALL */}
                <div
                  className="relative col-span-2 md:row-span-2 group aspect-3/4 overflow-hidden rounded-lg"
                  id="wall"
                >
                  <Image
                    placeholder="blur"
                    loading="lazy"
                    className="absolute top-0 left-0 max-w-full h-full object-cover object-center transition duration-300 group-hover:opacity-0"
                    src={assets.texturedWallDesignPattern}
                    alt="gallery-photo"
                  />
                  <Image
                    placeholder="blur"
                    loading="lazy"
                    className="absolute top-0 left-0 max-w-full h-full object-cover object-center transition duration-300 opacity-0 group-hover:opacity-100"
                    src={assets.decorativeWallPaneling}
                    alt="gallery-photo"
                  />
                  <div className="absolute inset-0 bg-linear-[30deg] to-60% from-black opacity-100 transition-opacity duration-300 flex flex-col items-start justify-end p-5 gap-1 md:gap-3">
                    <h3 className="text-white text-2xl md:text-3xl lg:text-4xl">
                      Wall
                    </h3>
                    <p className="text-white/70 text-xs md:text-sm">
                      A beautiful wall design
                    </p>
                  </div>
                </div>
                {/* DINING */}
                <div
                  className="relative col-span-2 group aspect-4/3 overflow-hidden rounded-lg"
                  id="dining-room"
                >
                  <Image
                    placeholder="blur"
                    loading="lazy"
                    className="absolute top-0 left-0 max-w-full h-full object-cover object-center transition duration-300 group-hover:opacity-0"
                    src={assets.modernDiningRoomDesign}
                    alt="gallery-photo"
                  />
                  <Image
                    placeholder="blur"
                    loading="lazy"
                    className="absolute top-0 left-0 max-w-full h-full object-cover object-bottom transition duration-300 opacity-0 group-hover:opacity-100"
                    src={assets.elegantDiningInterior}
                    alt="gallery-photo"
                  />
                  <div className="absolute inset-0 bg-linear-[30deg] to-60% from-black opacity-100 transition-opacity duration-300 flex flex-col items-start justify-end p-5 gap-1 md:gap-3">
                    <h3 className="text-white text-2xl md:text-3xl lg:text-4xl">
                      Dining Room
                    </h3>
                    <p className="text-white/70 text-xs md:text-sm">
                      A stylish dining room design
                    </p>
                  </div>
                </div>
                {/* POOJA ROOM */}
                <div
                  className="relative col-span-2 group aspect-3/4 overflow-hidden rounded-lg"
                  id="pooja-room"
                >
                  <Image
                    placeholder="blur"
                    loading="lazy"
                    className="absolute top-0 left-0 max-w-full h-full object-cover object-center transition duration-300 group-hover:opacity-0"
                    src={assets.modernPoojaRoomInterior}
                    alt="gallery-photo"
                  />
                  <Image
                    placeholder="blur"
                    loading="lazy"
                    className="absolute top-0 left-0 max-w-full h-full object-cover object-center transition duration-300 opacity-0 group-hover:opacity-100"
                    src={assets.traditionalPoojaRoomDesign}
                    alt="gallery-photo"
                  />
                  <div className="absolute inset-0 bg-linear-[30deg] to-60% from-black opacity-100 transition-opacity duration-300 flex flex-col items-start justify-end p-5 gap-1 md:gap-3">
                    <h3 className="text-white text-2xl md:text-3xl lg:text-4xl">
                      Pooja Room
                    </h3>
                    <p className="text-white/70 text-xs md:text-sm">
                      A serene pooja room design
                    </p>
                  </div>
                </div>
              </div>
              {/* RIGHT */}
              <div className="grid gap-4 grid-cols-2 col-span-2">
                {/* SPACE SAVE */}
                <div
                  className="relative col-span-1 group aspect-3/4 overflow-hidden rounded-lg"
                  id="space-saving"
                >
                  <Image
                    placeholder="blur"
                    loading="lazy"
                    className="absolute top-0 left-0 max-w-full h-full object-cover object-center transition duration-300 group-hover:opacity-0"
                    src={assets.multiPurposeStorageSolution}
                    alt="gallery-photo"
                  />
                  <Image
                    placeholder="blur"
                    loading="lazy"
                    className="absolute top-0 left-0 max-w-full h-full object-cover object-center transition duration-300 opacity-0 group-hover:opacity-100"
                    src={assets.modularSpaceSavingSolution}
                    alt="gallery-photo"
                  />
                  <div className="absolute inset-0 bg-linear-[30deg] to-60% from-black opacity-100 transition-opacity duration-300 flex flex-col items-start justify-end p-5 gap-1 md:gap-3">
                    <h3 className="text-white text-2xl md:text-3xl lg:text-4xl">
                      Space Saving
                    </h3>
                    <p className="text-white/70 text-xs md:text-sm">
                      A smart space-saving design
                    </p>
                  </div>
                </div>
                {/* OFFICE */}
                <div
                  className="relative col-span-1 group aspect-3/4 overflow-hidden rounded-lg"
                  id="home-office"
                >
                  <Image
                    placeholder="blur"
                    loading="lazy"
                    className="absolute top-0 left-0 max-w-full h-full object-cover object-center transition duration-300 group-hover:opacity-0"
                    src={assets.ergonomicOfficeDesign}
                    alt="gallery-photo"
                  />
                  <Image
                    placeholder="blur"
                    loading="lazy"
                    className="absolute top-0 left-0 max-w-full h-full object-cover object-center transition duration-300 opacity-0 group-hover:opacity-100"
                    src={assets.luxuryOfficeInterior}
                    alt="gallery-photo"
                  />
                  <div className="absolute inset-0 bg-linear-[30deg] to-60% from-black opacity-100 transition-opacity duration-300 flex flex-col items-start justify-end p-5 gap-1 md:gap-3">
                    <h3 className="text-white text-2xl md:text-3xl lg:text-4xl">
                      Office
                    </h3>
                    <p className="text-white/70 text-xs md:text-sm">
                      A modern office design
                    </p>
                  </div>
                </div>
                {/* BED */}
                <div
                  className="relative col-span-2 group aspect-4/3 overflow-hidden rounded-lg"
                  id="bedroom"
                >
                  <Image
                    placeholder="blur"
                    loading="lazy"
                    className="absolute top-0 left-0 max-w-full h-full object-cover object-center transition duration-300 group-hover:opacity-0"
                    src={assets.luxuryMasterBedroom}
                    alt="gallery-photo"
                  />
                  <Image
                    placeholder="blur"
                    loading="lazy"
                    className="absolute top-0 left-0 max-w-full h-full object-cover object-center transition duration-300 opacity-0 group-hover:opacity-100"
                    src={assets.modernBedroomInterior}
                    alt="gallery-photo"
                  />
                  <div className="absolute inset-0 bg-linear-[15deg] to-60% from-black opacity-100 transition-opacity duration-300 flex flex-col items-start justify-end p-5 gap-1 md:gap-3">
                    <h3 className="text-white text-2xl md:text-3xl lg:text-4xl">
                      Bedroom
                    </h3>
                    <p className="text-white/70 text-xs md:text-sm">
                      A cozy bedroom design
                    </p>
                  </div>
                </div>
                {/* DOOR */}
                <div
                  className="relative col-span-2 group aspect-3/4 overflow-hidden rounded-lg"
                  id="doors"
                >
                  <Image
                    placeholder="blur"
                    loading="lazy"
                    className="absolute top-0 left-0 max-w-full h-full object-cover object-center transition duration-300 group-hover:opacity-0"
                    src={assets.modernInteriorDoorSolution}
                    alt="gallery-photo"
                  />
                  <Image
                    placeholder="blur"
                    loading="lazy"
                    className="absolute top-0 left-0 max-w-full h-full object-cover object-center transition duration-300 opacity-0 group-hover:opacity-100"
                    src={assets.luxuryDoorDesignCollection}
                    alt="gallery-photo"
                  />
                  <div className="absolute inset-0 bg-linear-[30deg] to-60% from-black opacity-100 transition-opacity duration-300 flex flex-col items-start justify-end p-5 gap-1 md:gap-3">
                    <h3 className="text-white text-2xl md:text-3xl lg:text-4xl">
                      Door
                    </h3>
                    <p className="text-white/70 text-xs md:text-sm">
                      A stylish door design
                    </p>
                  </div>
                </div>
                {/* WINDOW */}
                <div
                  className="relative col-span-2 group aspect-4/3 overflow-hidden rounded-lg"
                  id="windows"
                >
                  <Image
                    placeholder="blur"
                    loading="lazy"
                    className="absolute top-0 left-0 max-w-full h-full object-cover object-center transition duration-300 group-hover:opacity-0"
                    src={assets.modernWindowDesignSolution}
                    alt="gallery-photo"
                  />
                  <Image
                    placeholder="blur"
                    loading="lazy"
                    className="absolute top-0 left-0 max-w-full h-full object-cover object-center transition duration-300 opacity-0 group-hover:opacity-100"
                    src={assets.stylishWindowTreatmentDesign}
                    alt="gallery-photo"
                  />
                  <div className="absolute inset-0 bg-linear-[30deg] to-60% from-black opacity-100 transition-opacity duration-300 flex flex-col items-start justify-end p-5 gap-1 md:gap-3">
                    <h3 className="text-white text-2xl md:text-3xl lg:text-4xl">
                      Window
                    </h3>
                    <p className="text-white/70 text-xs md:text-sm">
                      A beautiful window design
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Cta />
      <Faq FAQS={ServiceFAQ} />
    </>
  );
};

export default Services;
