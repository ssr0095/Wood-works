import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] py-16 bg-cover dark:bg-center bg-[url(/assets/images/blur-bg-01.png)] dark:bg-[url(/assets/images/stacked-steps-01-dark-blur.webp)]">
      <div className="my-16">
        <div className="w-full justify-between items-center gap-10 grid lg:grid-cols-2 grid-cols-1">
          <div className="w-full flex-col max-lg:text-center justify-start lg:items-start items-center gap-8 inline-flex">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              About Us
            </h2>
            <div className="w-full flex flex-col justify-start lg:items-start items-center gap-1">
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
            </div>
            <Link
              href="/about"
              className="inline-flex items-center px-8 py-3 rounded-full bg-background text-foreground hover:bg-accent font-medium shadow-sm hover:shadow-md transition-all"
            >
              <span className="relative z-10">Learn more</span>
            </Link>
          </div>
          <div className="relative z-0">
            <Image
              className="lg:mx-0 mx-auto h-full rounded-3xl object-cover ring-4 ring-primary"
              src="https://pagedone.io/asset/uploads/1717751272.png"
              alt="about Us image"
              width={500}
              height={500}
            />
            <span className="hidden lg:block absolute -top-10 -right-10 w-full h-full bg-accent rounded-3xl -z-10"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
