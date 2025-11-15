import { assets, servicesNav, socialLinks } from "@/public/assets/assets";
import { Mail, Phone } from "lucide-react";
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
          Ideal spaces are not just built they&apos;re designed, crafted and
          delivered with care. At PSK Interiors, we keep things simple,
          transparent, and tailored to your timeline.
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
            {servicesNav?.map((item, index) => (
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
              <Link className="hover:underline" href="/privacy-policy">
                Privacy policy
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="#">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/cookies">
                Cookies policy
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/credits">
                Credits & Attribution
              </Link>
            </li>
            <li>
              <Link
                className="hover:underline termly-display-preferences"
                href="#"
              >
                Consent Preferences
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
                <Mail className="w-4" />
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
            {servicesNav.slice(0, 4)?.map((item, index) => (
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
            <span className="sr-only">Instagram follow link</span>
          </Link>
        </div>
      </div>

      <div className="w-full flex items-center justify-end gap-1 mb-2">
        <p className="text-sm text-foreground/95 mr-2">CONNECT WITH US</p>
        <ul className="flex items-center text-foreground/70 gap-3">
          {socialLinks?.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  href={`${item.link}`}
                  className="flex items-center gap-1 hover:underline"
                >
                  <Image
                    src={item.icon}
                    alt={item.title}
                    className="text-white"
                  />
                  <span className="sr-only">{item.title} follow link</span>
                </Link>
              </li>
            );
          })}
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
          © 2025 PSK Interiors <span className="px-1">|</span> All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
