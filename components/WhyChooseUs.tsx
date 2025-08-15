<<<<<<< Updated upstream
import { AlarmCheckIcon, Check, Cog, Hammer, Leaf } from "lucide-react";
=======
import { AlarmCheck, Cog, Hammer, Leaf } from "lucide-react";
>>>>>>> Stashed changes
import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { exp_info } from "@/public/assets/assets";

const WhyChooseUs = ({btnNeed}:{btnNeed:Boolean}) => {
  const features = [
    {
<<<<<<< Updated upstream
      icon: <Hammer className="text-primary-foreground" />,
=======
      icon: (
        <Hammer/>
      ),
>>>>>>> Stashed changes
      title: "Craftsmanship Excellence",
      description:
        "Decades of experience delivering premium woodwork with meticulous attention to detail.",
    },
    {
<<<<<<< Updated upstream
      icon: <Leaf className="text-primary-foreground" />,
=======
      icon: (
        <Leaf/>
      ),
>>>>>>> Stashed changes
      title: "Sustainable Materials",
      description:
        "We source only eco-friendly, high-quality wood from responsibly managed forests.",
    },
    {
<<<<<<< Updated upstream
      icon: <Cog className="text-primary-foreground" />,
=======
      icon: (
        <Cog/>
      ),
>>>>>>> Stashed changes
      title: "Custom Solutions",
      description:
        "Tailored designs to match your unique style and functional requirements.",
    },
    {
<<<<<<< Updated upstream
      icon: <AlarmCheckIcon className="text-primary-foreground" />,
=======
      icon: (
        <AlarmCheck/>
      ),
>>>>>>> Stashed changes
      title: "Timely Delivery",
      description:
        "We respect your time with guaranteed on-schedule project completion.",
    },
  ];

  return (
<<<<<<< Updated upstream
    <section className="section bg-surface-container-low">
      <div className="">
=======
    <section className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <div className="my-28">
>>>>>>> Stashed changes
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-muted text-muted-foreground border text-sm font-medium mb-4">
            Why Choose Us
          </span>
<<<<<<< Updated upstream
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-on-surface mb-4">
            Exceptional Woodwork Crafted with Passion
=======
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Exceptional Woodwork{" "}
            <span className="text-primary">Crafted with Passion</span>
>>>>>>> Stashed changes
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-foreground">
            We combine traditional techniques with modern innovation to deliver
            furniture that stands the test of time.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="from-muted/50 to-muted bg-linear-to-b"
            >
              <CardHeader>
              <div className="size-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mb-4">
                {feature.icon}
              </div>
<<<<<<< Updated upstream
              <h3 className="text-3xl font-semibold text-on-surface mb-2">
=======
              <CardTitle>
>>>>>>> Stashed changes
                {feature.title}
              </CardTitle>
              <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 bg-accent rounded-xl p-4">
          {exp_info.map((stat, index) => (
            <div key={index} className="text-center p-4">
              <div className="mb-2">
                <h3 className="text-4xl font-extrabold text-primary">{stat.value}</h3>
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
              Learn more
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default WhyChooseUs;
