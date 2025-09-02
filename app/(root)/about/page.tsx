import Cta from "@/components/Cta";
import Faq from "@/components/Faq";
import WhyChooseUs from "@/components/WhyChooseUs";
import { AboutFAQ, assets } from "@/public/assets/assets";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BadgeCheck, Blocks } from "lucide-react";

const About = () => {
  const process = [
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
          About Us
        </h1>
      </section>
      {/* Title */}
      <section className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <div className="my-28">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Crafting Spaces with{" "}
              <span className="text-primary">Purpose & Precision</span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg ">
              We blend time-honored craftsmanship with modern design, delivering
              interiors that look exceptional—and stand the test of time.
            </p>
          </div>
        </div>
      </section>
      {/* Who we are and what we do */}
      <section className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <div className="flex items-center gap-5 max-md:flex-col md:flex-row">
          <Card>
            <CardHeader className="flex items-center gap-5">
              <div className="size-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                <BadgeCheck />
              </div>
              <CardTitle className="text-xl md:text-2xl lg:text-3xl font-bold">
                Who We Are
              </CardTitle>
            </CardHeader>
            <CardContent className="text-foreground">
              Founded in 1989, PSK Interiors is a collective of passionate
              designers and skilled craftsmen dedicated to transforming spaces
              into beautiful, functional environments. Every project—be it a
              cozy residence, efficient office, or dynamic retail space—is
              crafted with precision and an unwavering commitment to quality.
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex items-center gap-5">
              <div className="size-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                <Blocks />
              </div>
              <CardTitle className="text-xl md:text-2xl lg:text-3xl font-bold">
                What We Do
              </CardTitle>
            </CardHeader>
            <CardContent className="text-foreground">
              We provide end-to-end interior solutions, thoughtfully tailored
              for residential, commercial, and corporate clients. From modular
              kitchens, wardrobes, and TV units to office fit-outs, retail
              displays, and custom carpentry, we design, build, and install
              interiors that match your vision and endure over time.{" "}
            </CardContent>
          </Card>
        </div>
      </section>
      {/* Our Process */}
      <section className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <div className="my-28">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Our <span className="text-primary">Process</span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-foreground">
              We follow a simple and transparent process to make your dream
              space a reality.
            </p>
          </div>

          {/* Features Grid */}
          <div className="relative grid items-center gap-8">
            <span className="absolute top-6 left-11 w-2 h-[90%] bg-primary -z-10"></span>
            {process?.map((feature, index) => (
              <div
                key={index}
                className="grid max-md:grid-rows-[65px_1fr] md:grid-cols-[75px_1fr] p-6 rounded-xl border bg-[url('/assets/images/background/bg-star.svg')] dark:bg-[url('/assets/images/background/dark-star-pattern-bg.svg')]"
              >
                <div className="size-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mb-4">
                  {index + 1 + "."}
                </div>
                <div className="w-full flex flex-col items-start justify-center gap-1.5">
                  <h2 className="text-card-foreground leading-none font-semibold text-xl">
                    {feature.title}
                  </h2>
                  <div className="text-muted-foreground text-sm">
                    <p>{feature.description.one}</p>
                    <p>{feature.description.two}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Why choose Us*/}
      <WhyChooseUs btnNeed={false} />
      {/* FAQ */}
      <Faq FAQS={AboutFAQ} />
      {/* CTA */}
      <Cta />
    </>
  );
};

export default About;
