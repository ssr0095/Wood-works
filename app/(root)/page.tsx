import About from "@/components/About";
<<<<<<< Updated upstream
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import InfiniteBanner from "@/components/InfiniteBanner";
=======
import Cta from "@/components/Cta";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import ServiceCollection from "@/components/ServiceCollection";
>>>>>>> Stashed changes
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyChooseUs btnNeed={true} />
      <About />
<<<<<<< Updated upstream
      <Services />
      <InfiniteBanner />
      <Footer />
=======
      <ServiceCollection/>
      <Cta/>
      <Faq/>
>>>>>>> Stashed changes
    </main>
  );
}
