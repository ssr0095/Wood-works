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
};

export default About;
