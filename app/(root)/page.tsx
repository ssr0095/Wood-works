import About from "@/components/About";
import Cta from "@/components/Cta";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import ServiceCollection from "@/components/ServiceCollection";
import WhyChooseUs from "@/components/WhyChooseUs";
import { HomeFAQ } from "@/public/assets/assets";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs btnNeed={true} />
      <About />
      <ServiceCollection />
      <Cta />
      <Faq FAQS={HomeFAQ} />
    </>
  );
}
