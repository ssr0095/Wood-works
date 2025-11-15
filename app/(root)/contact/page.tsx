import Cta from "@/components/Cta";
import Faq from "@/components/Faq";
import { ContactFAQ, socialLinks } from "@/public/assets/assets";
import { Headphones } from "lucide-react";
import { Metadata } from "next";
import ClientHead from "@/components/ClientHead";
import SocialCard from "@/components/SocialLinks";
import ContactInputs from "@/components/ContactInputs";
import StructuredData from "@/components/StructuredData";

const Contact = () => {
  return (
    <>
      <ClientHead title="Services" description="Some Description..." />

      {/* Hero */}
      <section className="w-full h-[30vh] md:h-[50vh] flex items-center justify-center bg-cover bg-center bg-[url(/assets/images/background/stacked-peaks-05-noise.webp)] dark:bg-[url(/assets/images/background/stacked-peaks-04-dark-noise.webp)] overflow-hidden">
        <h1 className="text-3xl z-20 md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
          Contact
        </h1>
      </section>
      {/* Title */}
      <section className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <div className="my-28">
          {/* Section Header */}
          <div className="w-full max-w-xl mx-auto flex flex-col items-center gap-4 mb-16">
            <div className="flex max-sm:flex-col items-center gap-5">
              <span className="size-12 rounded-full bg-primary text-primary-foreground text-center flex items-center justify-center">
                <Headphones />
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-center">
                Let’s Start Your <span className="text-primary">Project</span>
              </h2>
            </div>
            <p className="text-lg text-foreground text-center">
              Help is just a click away. Call us anytime between 10am - 7pm
            </p>
            {/* Contact details */}
            <ContactInputs />
          </div>
        </div>

        {/* Social */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {socialLinks?.map((social, index) => (
            <SocialCard Social={social} key={index} />
          ))}
        </div>
      </section>
      {/* FAQ */}
      <Faq FAQS={ContactFAQ} />
      {/* CTA */}
      <Cta />
      <StructuredData data={Sdata} />
    </>
  );
};

export default Contact;

export const metadata: Metadata = {
  title:
    "Contact PSK Interiors - Free Consultation for Interior Design & Carpentry Services",
  description:
    "Get in touch with PSK Interiors for your interior design needs. Free consultation available. Call +91 98945-96902 or email care@pskinteriors.in. We're available 10am-7pm daily.",
  keywords: [
    "contact PSK interiors",
    "interior design consultation",
    "carpentry services contact",
    "free consultation",
    "interior design quote",
  ],
  robots: { index: true, follow: true },
  alternates: {
    canonical: `https://${process.env.NEXT_PUBLIC_FRONTEND_DOMAIN}/contact`,
  },
  openGraph: {
    title: "Contact PSK Interiors - Free Interior Design Consultation",
    description:
      "Ready to transform your space? Contact PSK Interiors for a free consultation. Expert interior design and carpentry services available.",
    url: `https://${process.env.NEXT_PUBLIC_FRONTEND_DOMAIN}/contact`,
    images: [
      {
        url: `https://${process.env.NEXT_PUBLIC_FRONTEND_DOMAIN}/assets/images/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Contact PSK Interiors - Free Interior Design Consultation ",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

const Sdata = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  mainEntity: {
    "@type": "LocalBusiness",
    name: "PSK Interiors",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: `${process.env.NEXT_PUBLIC_EMAIL}`,
      telephone: `${process.env.NEXT_PUBLIC_PHONE_TEXT}`,
      availableLanguage: ["Tamil", "English", "Hindi"],
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        opens: "10:00",
        closes: "19:00",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
      },
    },
  },
};
