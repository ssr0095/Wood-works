"use client";
import Link from "next/link";
import { Card, CardContent } from "./ui/card";
import Image, { StaticImageData } from "next/image";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

type ServiceType = {
  image: StaticImageData;
  title: string;
  description: string;
  link: string;
};

const ServiceCard = ({ title, description, image, link }: ServiceType) => {
  return (
    <Link href={`/services/${link}`} onClick={() => scrollTo(0, 0)}>
      <Card className="group hover:shadow-lg transition-shadow">
        <div className="overflow-hidden rounded-t-lg">
          <Image
            src={image}
            alt={title}
            className="group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <CardContent className="p-6">
          <h3 className="font-semibold text-xl mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <Button variant="outline" className="w-full">
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ServiceCard;
