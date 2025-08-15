"use client"
import Link from "next/link";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import Image, { StaticImageData } from "next/image";
import { Button } from "./ui/button";

type ServiceType = {
    image: StaticImageData,
    name: string,
    description: string
}

const Service = ({
  image,
  name,
  description,
} : ServiceType) => {
  const ServiceCard = (
    <Card className="from-accent/50 to-muted bg-linear-to-b">
      <CardHeader>
        <Image
          src={image}
          alt={`${name} image`}
          className={"rounded-t-2xl w-full h-full pb-4 aspect-4/3 object-cover object-center transition duration-300" }
            // ${
            // image[1] && "group-hover:opacity-0"
          // }`}
        />

        {/* {image[1] && (
          <img
            src={image[1]}
            alt="Hover"
            loading="lazy"
            className="absolute top-0 left-0 w-full h-full object-cover transition duration-300 opacity-0 group-hover:opacity-100"
          />
        )} */}

      {/* <p className="w-fit mt-1 px-2 bg-blue-50 border border-blue-200 text-gray-800 text-sm">
        {tag}
      </p> */}

      <CardTitle>{name}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>

    <CardFooter>
        <Button>
          See more
        </Button>
      </CardFooter>
    </Card>
    // <div className="relative h-[60vh] from-accent/50 to-muted bg-linear-to-b z-0 group  transition-all duration-300">
    //   <Image
    //       src={image}
    //       alt={`${name} image`}
    //       className={"absolute top-0 left-0 aspect-4/3 object-cover object-center transition duration-300 -z-0" }
    //     />
    //   <div className="z-10 p-4 backdrop-blur-2xl border-2 rounded-2xl  transition-all">
    //     <h1>{name}</h1>
    //     <p className="hidden group-hover:block transition-all duration-300">{description}</p>
    //   </div>
    //   <Button>See more</Button>
    // </div>
  );
  return (
    <Link
      href={`/services`}
      onClick={() => scrollTo(0, 0)}
    >
      {ServiceCard}
    </Link>
  );
}

export default Service;