"use client";
import Cta from "@/components/Cta";
import Faq from "@/components/Faq";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
// import WhyChooseUs from "@/components/WhyChooseUs";
import { assets } from "@/public/assets/assets";
import { Copy, Headphones, Mail, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Contact = () => {
  const navigation = useRouter();
  const processes = [
    {
      title: "Consultation",
      description: {
        one: "We start by listening to your ideas, preferences, and requirements.",
        two: "Our team visits your space(if required) to understand dimensions and possibilities.",
      },
      bg: assets.bgStarDark,
    },
    {
      title: "Design & Planning",
      description: {
        one: "Based on your vision, we create practical design options that blend aesthetics with functionality.",
        two: "Material choices, layouts, and finishes are discussed openly to suit your style and budget.",
      },
      bg: assets.bgStarDark,
    },
    {
      title: "Execution & Craftsmanship",
      description: {
        one: "Once finalized, our skilled carpenters and fabricators get to work.",
        two: "We use high- quality wood, aluminium, and POP to ensure durability and long- lasting results.",
      },
      bg: assets.bgStarDark,
    },
    {
      title: "Quality Check & Finishing Touches",
      description: {
        one: "Every detail is carefully inspected to ensure precision.",
        two: "We focus on smooth finishes, perfect fittings, and a flawless look.",
      },
      bg: assets.bgStarDark,
    },
    {
      title: "Handover & Support",
      description: {
        one: "We hand over your transformed space on time.",
        two: "Our team remains available for after-service support whenever you need it.",
      },
      bg: assets.bgStarDark,
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="w-full h-[30vh] md:h-[50vh] flex items-center justify-center bg-cover bg-center bg-[url(/assets/images/background/stacked-peaks-05-noise.webp)] dark:bg-[url(/assets/images/background/stacked-peaks-04-dark-noise.webp)] overflow-hidden">
        <h1 className="text-3xl z-20 md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
          Contact
        </h1>
      </section>
      {/* Title */}
      <section className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <div className="my-28">
          {/* Section Header */}
          <div className="w-full max-w-xl mx-auto flex flex-col items-center gap-4 mb-16">
            <div className="flex max-sm:flex-col items-center gap-3">
              <span className="size-12 rounded-full bg-primary text-primary-foreground text-center flex items-center justify-center">
                <Headphones />
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Connect With <span className="text-primary">Us</span>
              </h2>
            </div>
            <p className="text-lg text-foreground text-center">
              Help is just a click away. Call us anytime between 10am - 7pm
            </p>
            {/* Contact details */}
            <div className="w-full max-w-sm flex flex-col gap-8 mt-8">
              <div className="w-full flex flex-col gap-3">
                <div className="w-full flex items-center justify-start gap-3">
                  <Phone className="w-4" />
                  <Label>Phone</Label>
                </div>
                <div
                  className="w-full flex items-center gap-2 cursor-pointer"
                  onClick={async () => {
                    await navigator.clipboard.writeText(
                      `+91 ${process.env.NEXT_PUBLIC_PHONE_LINK}`
                    );
                    toast.success("Copied");
                  }}
                >
                  <div className="w-full px-4 py-2 rounded-md border border-border bg-accent text-accent-foreground">
                    {process.env.NEXT_PUBLIC_PHONE_TEXT}
                  </div>
                  <Button size="icon">
                    <Copy />
                  </Button>
                </div>
              </div>
              <div className="w-full flex flex-col gap-3">
                <div className="w-full flex items-center justify-start gap-3">
                  <Mail className="w-4" />
                  <Label>Email</Label>
                </div>
                <div
                  className="w-full flex items-center gap-2 cursor-pointer"
                  onClick={async () => {
                    await navigator.clipboard.writeText(
                      `${process.env.NEXT_PUBLIC_EMAIL}`
                    );
                    toast.success("Copied");
                  }}
                >
                  <div className="w-full px-4 py-2 rounded-md border border-border bg-accent text-accent-foreground">
                    {process.env.NEXT_PUBLIC_EMAIL}
                  </div>
                  <Button size="icon">
                    <Copy />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {processes.map((feature, index) => (
            <Card
              key={index}
              className="py-4 hover:bg-accent/50 transition-colors cursor-pointer"
              onClick={() => navigation.push("#")}
            >
              <CardContent className="flex items-center gap-5 px-4">
                <div className="size-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                  <Image
                    placeholder="blur"
                    src={assets.logo}
                    alt="wood"
                    className="w-full object-center object-cover rounded-full"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="flex flex-col items-start justify-center gap-1 cursor-default">
                  <h2>Instagram</h2>
                  <Link
                    href="#"
                    className="text-xs hover:underline hover:text-primary"
                  >
                    follow us
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      {/* FAQ */}
      <Faq />
      {/* CTA */}
      <Cta />
    </>
  );
};

export default Contact;
