"use client";
import { Button } from "@/components/ui/button";
import { PhoneIcon } from "lucide-react";
import ContactDrawerDynamic from "./dynamic/ContactDrawerDynamic";

const Cta = () => {
  return (
    <section className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <div className="my-28 mx-auto max-w-7xl h-[30vh] flex max-md:flex-col justify-center items-center gap-5 md:gap-24  bg-primary border rounded-xl">
        <div className="max-w-md flex-col text-center justify-center items-center inline-flex">
          <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-primary-foreground">
            Ready to Transform Your Space?
          </h2>
        </div>
        <ContactDrawerDynamic>
          <Button size="lg" variant="secondary" className="max-sm:w-[60%]">
            <PhoneIcon />
            Call Us
          </Button>
        </ContactDrawerDynamic>
      </div>
    </section>
  );
};

export default Cta;
