"use client";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";

type ItemType = {
  id: number;
  name: string;
  description: string;
  image: StaticImageData;
};

type ServiceType = {
  items: ItemType[];
  title: string;
  description: string;
  link: string;
};

const ServiceCard = ({ title, description, items, link }: ServiceType) => {
  const [isTouched, setIsTouched] = useState(false);

  return (
    <Link
      href={`/services#${link}`}
      onClick={() => scrollTo(0, 0)}
      className="group"
      onTouchStart={() => setIsTouched(true)}
      onTouchEnd={() => setIsTouched(false)}
    >
      <div className="relative aspect-3/4 overflow-hidden">
        <Image
          loading="lazy"
          className={`absolute top-0 left-0 max-w-full h-full object-cover object-center transition duration-300 ${
            isTouched ? "opacity-0" : "group-hover:opacity-0"
          }`}
          src={items[0]?.image}
          alt={items[0]?.name}
          placeholder="blur"
        />

        <Image
          loading="lazy"
          className={`absolute top-0 left-0 max-w-full h-full object-cover object-center transition duration-300 ${
            isTouched ? "opacity-100" : "group-hover:opacity-100 opacity-0"
          }`}
          src={items[1]?.image}
          alt={items[1]?.name}
          placeholder="blur"
        />

        {/* Content Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black opacity-100 flex flex-col items-start justify-end p-5 gap-1 md:gap-3">
          <h3 className="text-white text-2xl md:text-3xl lg:text-4xl">
            {title}
          </h3>
          <p
            className={`text-white/70 text-xs md:text-sm line-clamp-3 transition-all duration-500 ease-out ${
              isTouched
                ? "max-h-32 opacity-100"
                : "group-hover:max-h-32 group-hover:opacity-100 max-h-0 opacity-0"
            }`}
          >
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
