import { AlarmCheckIcon, Check, Cog, Hammer, Leaf } from "lucide-react";
import Link from "next/link";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Hammer className="text-primary-foreground" />,
      title: "Craftsmanship Excellence",
      description:
        "Decades of experience delivering premium woodwork with meticulous attention to detail.",
    },
    {
      icon: <Leaf className="text-primary-foreground" />,
      title: "Sustainable Materials",
      description:
        "We source only eco-friendly, high-quality wood from responsibly managed forests.",
    },
    {
      icon: <Cog className="text-primary-foreground" />,
      title: "Custom Solutions",
      description:
        "Tailored designs to match your unique style and functional requirements.",
    },
    {
      icon: <AlarmCheckIcon className="text-primary-foreground" />,
      title: "Timely Delivery",
      description:
        "We respect your time with guaranteed on-schedule project completion.",
    },
  ];

  return (
    <section className="section bg-surface-container-low">
      <div className="">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-primary-container text-on-primary-container text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-on-surface mb-4">
            Exceptional Woodwork Crafted with Passion
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-on-surface-variant">
            We combine traditional techniques with modern innovation to deliver
            furniture that stands the test of time.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-surface-container-high rounded-xl p-6 shadow-1 hover:shadow-2 transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-3xl font-semibold text-on-surface mb-2">
                {feature.title}
              </h3>
              <p className="text-on-surface-variant">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: "25+", label: "Years Experience" },
            { value: "500+", label: "Projects Completed" },
            { value: "100%", label: "Client Satisfaction" },
            { value: "5", label: "Master Craftsmen" },
          ].map((stat, index) => (
            <div key={index} className="text-center p-4">
              <div className="text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-on-surface-variant uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/about"
            className="inline-flex items-center px-8 py-3 rounded-full bg-primary-container text-on-primary-container hover:bg-primary-container-hover active:bg-primary-container-active state-layer font-medium shadow-1 hover:shadow-2 transition-all"
          >
            <span className="relative z-10">Learn About Our Process</span>
            <span className="state-layer-content absolute inset-0 bg-on-primary-container opacity-0 hover:opacity-[0.08] active:opacity-[0.12] rounded-full transition-opacity"></span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
