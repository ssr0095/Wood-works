"use client";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

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
  return (
    <Link
      href={`/services#${link}`}
      onClick={() => scrollTo(0, 0)}
      className=" group "
    >
      <div className="relative aspect-3/4 overflow-hidden">
        <Image
          loading="lazy"
          className="absolute top-0 left-0 max-w-full h-full object-cover object-center transition duration-300 group-hover:opacity-0"
          src={items[0]?.image}
          alt={items[0]?.name}
          placeholder="blur"
        />
        <Image
          loading="lazy"
          className="absolute top-0 left-0 max-w-full h-full object-cover object-center transition duration-300 opacity-0 group-hover:opacity-100"
          src={items[1]?.image}
          alt={items[1]?.name}
          placeholder="blur"
        />
        <div className="absolute inset-0 bg-linear-[30deg] to-60% from-black opacity-100 transition-opacity duration-500 flex flex-col items-start justify-end p-5 gap-1 md:gap-3">
          <h3 className="text-white text-2xl md:text-3xl lg:text-4xl">
            {title}
          </h3>
          <p className="max-h-0 group-hover:max-h-32 text-white/70 text-xs md:text-sm line-clamp-3 transition-all duration-1200 ease-out">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
