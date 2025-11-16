import { AlarmCheck, Cog, Hammer, Ribbon } from "lucide-react";
import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { experienceInfo } from "@/public/assets/assets";

const WhyChooseUs = ({ btnNeed }: { btnNeed: boolean }) => {
  const features = [
    {
      icon: <Hammer />,
      title: "Craftsmanship Excellence",
      description:
        "Decades of experience delivering premium woodwork with meticulous attention to detail.",
    },
    {
      icon: <Ribbon />,
      title: "Made for Demands",
      description:
        "On-budget delivery with interiors built to handle heavy use in business environments.",
    },
    {
      icon: <Cog />,
      title: "Custom Solutions",
      description:
        "Tailored designs to match your unique style and functional requirements.",
    },
    {
      icon: <AlarmCheck />,
      title: "Timely Delivery",
      description:
        "We respect your time with guaranteed on-schedule project completion.",
    },
  ];

  return (
    <section className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <div className="my-28">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-muted text-accent-foreground border text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Exceptional Interior work{" "}
            <span className="text-primary">Crafted with Passion</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-foreground">
            We combine traditional techniques with modern innovation to deliver
            furniture that stands the test of time.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features?.map((feature, index) => (
            <Card key={index} className="">
              <CardHeader>
                <div className="size-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 bg-accent rounded-xl p-4">
          {experienceInfo?.map((stat, index) => (
            <div key={index} className="text-center p-4">
              <div className="mb-2">
                <h3 className="text-4xl font-extrabold text-primary">
                  {stat.value}
                </h3>
              </div>
              <div className="text-sm font-extrabold text-foreground uppercase tracking-wider">
                <p className="">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        {btnNeed && (
          <div className="mt-16 text-center">
            <Link
              href="/about"
              className="inline-flex items-center px-8 py-3 rounded-full text-foreground border-2 hover:bg-accent border-primary transition-all"
            >
              See the Process
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default WhyChooseUs;
