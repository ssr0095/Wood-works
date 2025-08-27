import Cta from "@/components/Cta";
import Faq from "@/components/Faq";
import WhyChooseUs from "@/components/WhyChooseUs";
import { assets } from "@/public/assets/assets";
import Image from "next/image";

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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-on-surface mb-4">
              Exceptional Interior work{" "}
              <span className="text-primary">Crafted with Passion</span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-on-surface-variant">
              We combine traditional techniques with modern innovation to
              deliver furniture that stands the test of time.
            </p>
          </div>
        </div>
      </section>
      {/* Working process */}
      <section className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] py-16 bg-cover dark:bg-center bg-[url(/assets/images/background/blur-bg-01.png)] dark:bg-[url(/assets/images/background/stacked-steps-01-dark-blur.webp)]">
        <div className="w-full flex items-center justify-center">
          <span className="inline-block px-3 py-1 rounded-full bg-muted text-muted-foreground border text-sm font-medium mb-4">
            Our process
          </span>
        </div>
        <div className="my-16 flex flex-col items-center gap-14">
          <div className="w-full justify-between items-center gap-10 grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full flex-col max-lg:text-center justify-start lg:items-start items-center gap-2 inline-flex">
              {/* <div className="w-full flex flex-col justify-start lg:items-start items-center gap-1"> */}
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary-foreground mb-3">
                Building Stronger Communities through Collaboration and
                Empowerment
              </h2>
              <p className="max-w-2xl mx-auto text-md text-primary-foreground/70">
                We combine traditional techniques with modern innovation to
                deliver furniture that stands the test of time. We combine
                traditional techniques with modern innovation to deliver
                furniture that stands the test of time. We combine traditional
                techniques with modern innovation to deliver furniture that
                stands the test of time.
              </p>
              {/* </div>  */}
            </div>
            <div className="flex items-center justify-center relative z-0">
              <Image
                className="w-64 rounded-3xl object-cover aspect-4/3 ring-4 ring-primary"
                src="/assets/images/donet.webp"
                alt="about Us image"
                width={256}
                height={192}
              />
              {/* <span className="hidden lg:block absolute -top-10 -right-10 w-full h-full bg-accent rounded-3xl -z-10"></span> */}
            </div>
          </div>
          <div className="w-full justify-between items-center gap-10 grid lg:grid-cols-2 grid-cols-1">
            <div className="flex items-center justify-center relative z-0">
              <Image
                className="w-64 rounded-3xl object-cover aspect-4/3 ring-4 ring-primary"
                src="/assets/images/donet.webp"
                alt="about Us image"
                width={256}
                height={192}
              />
              {/* <span className="hidden lg:block absolute -top-10 -right-10 w-full h-full bg-accent rounded-3xl -z-10"></span> */}
            </div>
            <div className="w-full flex-col max-lg:text-center justify-start lg:items-start items-center gap-2 inline-flex">
              {/* <div className="w-full flex flex-col justify-start lg:items-start items-center gap-1"> */}
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary-foreground mb-3">
                Building Stronger Communities through Collaboration and
                Empowerment
              </h2>
              <p className="max-w-2xl mx-auto text-md text-primary-foreground/70">
                We combine traditional techniques with modern innovation to
                deliver furniture that stands the test of time. We combine
                traditional techniques with modern innovation to deliver
                furniture that stands the test of time. We combine traditional
                techniques with modern innovation to deliver furniture that
                stands the test of time.
              </p>
              {/* </div>  */}
            </div>
          </div>
          <div className="w-full justify-between items-center gap-10 grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full flex-col max-lg:text-center justify-start lg:items-start items-center gap-2 inline-flex">
              {/* <div className="w-full flex flex-col justify-start lg:items-start items-center gap-1"> */}
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary-foreground mb-3">
                Building Stronger Communities through Collaboration and
                Empowerment
              </h2>
              <p className="max-w-2xl mx-auto text-md text-primary-foreground/70">
                We combine traditional techniques with modern innovation to
                deliver furniture that stands the test of time. We combine
                traditional techniques with modern innovation to deliver
                furniture that stands the test of time. We combine traditional
                techniques with modern innovation to deliver furniture that
                stands the test of time.
              </p>
              {/* </div>  */}
            </div>
            <div className="flex items-center justify-center relative z-0">
              <Image
                className="w-64 rounded-3xl object-cover aspect-4/3 ring-4 ring-primary"
                src="/assets/images/donet.webp"
                alt="about Us image"
                width={256}
                height={192}
              />
              {/* <span className="hidden lg:block absolute -top-10 -right-10 w-full h-full bg-accent rounded-3xl -z-10"></span> */}
            </div>
          </div>
        </div>
      </section>

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
            {process.map((feature, index) => (
              <div
                key={index}
                className="grid max-md:grid-rows-[65px_1fr] md:grid-cols-[75px_1fr] p-6 rounded-xl border bg-[url('/assets/images/background/bg-star.svg')] dark:bg-[url('/assets/images/background/dark-star-pattern-bg.svg')]"
              >
                <div className="size-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mb-4">
                  {index + 1 + "."}
                </div>
                <div className="w-full flex flex-col items-start justify-center gap-1.5">
                  <h2 className="text-card-foreground leading-none font-semibold">
                    {feature.title}
                  </h2>
                  <div className="text-muted-foreground text-sm">
                    <p>{feature.description.one}</p>
                    <p>{feature.description.two}</p>
                  </div>
                </div>
              </div>
              // <Card key={index} className="">
              //   <CardHeader className="flex flex-col items-center">
              //     <div className="size-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mb-4">
              //       {index + 1}
              //     </div>
              //     <CardTitle>{feature.title}</CardTitle>
              //     <CardDescription>{feature.description}</CardDescription>
              //   </CardHeader>
              // </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Why choose Us*/}
      <WhyChooseUs btnNeed={false} />
      {/* FAQ */}
      <Faq />
      {/* CTA */}
      <Cta />
    </>
  );
};

export default About;
