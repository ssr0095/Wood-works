<<<<<<< Updated upstream
import { assets } from "@/public/assets/assets";
import Image from "next/image";

const About = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-on-surface mb-4">
            We didn't reinvent the wheel
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-on-surface-variant mb-4">
            We are strategists, designers and developers. Innovators and problem
            solvers. Small enough to be simple and quick, but big enough to
            deliver the scope you want at the pace you need. Small enough to be
            simple and quick, but big enough to deliver the scope you want at
            the pace you need.
          </p>
          <p className="max-w-2xl mx-auto text-lg text-on-surface-variant mb-4">
            We are strategists, designers and developers. Innovators and problem
            solvers. Small enough to be simple and quick.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <Image
            className="w-full rounded-lg"
            src={assets.wood3}
            alt="office content 1"
          />
          <Image
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src={assets.wood11}
            alt="office content 2"
          />
        </div>
      </div>
    </section>
  );
=======
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
                        Building Stronger Communities through Collaboration and Empowerment
                      </h2>
                      <p className="max-w-2xl mx-auto text-md text-primary-foreground/70">
                        We combine traditional techniques with modern innovation to deliver
                        furniture that stands the test of time. We combine traditional techniques with modern innovation to deliver
                        furniture that stands the test of time. We combine traditional techniques with modern innovation to deliver
                        furniture that stands the test of time.
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
                    <img className="lg:mx-0 mx-auto h-full rounded-3xl object-cover ring-4 ring-primary" src="https://pagedone.io/asset/uploads/1717751272.png" alt="about Us image" />
                    <span className="hidden lg:block absolute -top-10 -right-10 w-full h-full bg-accent rounded-3xl -z-10"></span>
                  </div>
                </div>
              </div>
            </section>
          );
>>>>>>> Stashed changes
};

export default About;
