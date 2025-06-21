import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import InfiniteBanner from "@/components/InfiniteBanner";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyChooseUs />
      <About />
      <Services />
      <InfiniteBanner />
      <Footer />
    </main>
  );
}
