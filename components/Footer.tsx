import { assets, servicesNav } from "@/public/assets/assets";
import { Phone } from "lucide-react";
import Image from "next/image";
import { Separator } from "./ui/separator";
import Link from "next/link";

const Footer = () => {
  // const theme = themeList.slice(0, 4);
  return (
    <footer className="z-0 relative px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] border-t mt-40 cursor-default bg-[url(/assets/images/background/bg-wave.svg)] dark:bg-[url(/assets/images/background/bg-wave-dark.svg)]">
      <div className="my-6 z-10">
        {/* <Link className="hover:underline" href="/" className="flex items-center gap-3"> */}
        <Image
          placeholder="blur"
          src={assets.logo}
          width={32}
          height={32}
          alt="PSK Interiors Logo"
          className="rounded-full mb-4"
        />
        {/* </Link> */}
        <p className="w-full md:w-11/12 text-foreground/70 text-sm">
          CousinsFashion brings you stylish, high-quality fashion for every
          occasion. Explore trendy clothing and accessories for men and women,
          blending comfort with style. Shop hassle-free with easy payments, fast
          delivery, and custom designs via WhatsApp. Dress with confidence—only
          at CousinsFashion!
        </p>
      </div>
      <Separator />
      <div className="flex flex-col sm:grid sm:grid-cols-[1fr_1fr_1fr] lg:grid-cols-[1fr_1fr_1fr_1fr_1fr] gap-7 sm:gap-14 my-10 text-sm">
        <div>
          <p className="text-xl font-medium text-foreground/95 mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-foreground/70">
            <li>
              <Link className="hover:underline" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium text-foreground/95 mb-5">
            SERVICES
          </p>
          <ul className="flex flex-col gap-1 text-foreground/70">
            {servicesNav.map((item, index) => (
              <li key={index}>
                <Link
                  className="hover:underline"
                  href={`/services#${item.key}`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium text-foreground/95 mb-5">LEGAL</p>
          <ul className="flex flex-col gap-1 text-foreground/70">
            <li>
              <Link className="hover:underline" href="#">
                Privacy policy
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="#">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        <div className="sm:col-span-2 lg:col-span-1">
          <p className="text-xl font-medium text-foreground/95 mb-5">
            CONTACT US
          </p>
          <ul className="flex flex-col gap-1 text-foreground/70">
            <li>
              <Link
                className="flex items-center gap-2 hover:underline"
                // alt="whatsapp"
                href={`https://wa.me/${process.env.NEXT_PUBLIC_PHONE_LINK}?text=${process.env.NEXT_PUBLIC_WHATSAPP_TEXT}`}
              >
                <Phone className="w-4" />
                {process.env.NEXT_PUBLIC_PHONE_TEXT}
              </Link>
            </li>
            <li>
              <Link
                href="mailto:care@pskinteriors.com"
                aria-label="Email Us"
                className="flex items-center gap-2 hover:underline"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-mail"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                {process.env.NEXT_PUBLIC_EMAIL}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium text-foreground/95 mb-5">
            INSTAGRAM
          </p>
          <Link
            href={`${process.env.NEXT_PUBLIC_INSTAGRAM_LINK}`}
            target="_blank"
            className="w-fit grid grid-cols-2 gap-4"
          >
            {servicesNav.slice(0, 4).map((item, index) => (
              <Image
                loading="lazy"
                placeholder="blur"
                key={index}
                src={item.src}
                alt={`instagram image - ${item.alt}`}
                className="size-16 object-center object-cover overflow-hidden"
                width={64}
                height={64}
              />
            ))}
          </Link>
        </div>
      </div>

      <div className="w-full flex items-center justify-end gap-1 mb-2">
        <p className="text-sm text-foreground/95">CONNECT WITH US</p>
        <ul className="flex items-center text-foreground/70">
          <li>
            <Link
              href={`${process.env.NEXT_PUBLIC_INSTAGRAM_LINK}`}
              className="p-2"
              // alt="instagram"
              aria-label="follow on instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </Link>
          </li>
        </ul>
      </div>

      <Separator />
      <div className="w-full flex items-center justify-center sm:justify-between py-5 text-xs text-muted-foreground">
        <div className="max-sm:hidden flex items-center">
          <p className="hover:underline">Privacy Policy</p>{" "}
          <span className="px-1">|</span>{" "}
          <p className="hover:underline">Terms of Use</p>
        </div>
        <p>
          © 2025 {process.env.NEXT_PUBLIC_FRONTEND_URL}{" "}
          <span className="px-1">|</span> All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
