import { assets, categoryList } from "@/public/assets/assets";
import { Phone } from "lucide-react";
import Image from "next/image";
import { Separator } from "./ui/separator";
import Link from "next/link";

const Footer = () => {
  // const theme = themeList.slice(0, 4);
  return (
    <footer className="z-0 relative px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] border-t mt-40 bg-[url(/assets/images/bg-wave.svg)] dark:bg-[url(/assets/images/bg-wave-dark.svg)]">
      <div className="my-6 z-10">
        {/* <Link href="/" className="flex items-center gap-3"> */}
        <Image
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
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About us</Link>
            </li>
            <li>
              <Link href="/collection">Collection</Link>
            </li>
            <li>
              <Link href="#">Privacy policy</Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium text-foreground/95 mb-5">
            SERVICES
          </p>
          <ul className="flex flex-col gap-1 text-foreground/70">
            {categoryList.map((item) => (
              <li key={item}>
                <Link href="/collection">{item}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium text-foreground/95 mb-5">LEGAL</p>
          <ul className="flex flex-col gap-1 text-foreground/70">
            <li>
              <Link href="#">Privacy policy</Link>
            </li>
            <li>
              <Link href="#">Terms & Conditions</Link>
            </li>
            <li>
              <Link href="#">Shipping Policy</Link>
            </li>
          </ul>
        </div>

        <div className="sm:col-span-2 lg:col-span-1">
          <p className="text-xl font-medium text-foreground/95 mb-5">
            NEED HELP?
          </p>
          <ul className="flex flex-col gap-1 text-foreground/70">
            <li>
              <Link
                className="flex items-center gap-2 hover:underline"
                // alt="whatsapp"
                href="https://wa.me/8248586654?text=Hey!%20I%20saw%20your%20collection%20and%20loved%20it.%20Can%20you%20help%20me%20with%20sizes%20and%20pricing?"
              >
                <Phone className="w-4" />
                +91 98945-96902
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
                care@pskinteriors.com
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium text-foreground/95 mb-5">
            INSTAGRAM
          </p>
          <Link
            href="https://www.instagram.com/cousins_.fashion?igsh=aGZmaXRpNmJ2NWQ2"
            target="_blank"
            className="w-fit grid grid-cols-2 gap-4"
          >
            <Image
              src={assets.logo}
              alt="instgram image 1"
              className="max-w-16"
            />
            <Image
              src={assets.logo}
              alt="instgram image 2"
              className="max-w-16"
            />
            <Image
              src={assets.logo}
              alt="instgram image 3"
              className="max-w-16"
            />
            <Image
              src={assets.logo}
              alt="instgram image 4"
              className="max-w-16"
            />
          </Link>
        </div>
      </div>

      <div className="w-full flex items-center justify-end gap-1 mb-2">
        <p className="text-sm text-foreground/95">CONNECT WITH US</p>
        <ul className="flex items-center text-foreground/70">
          <li>
            <Link
              href="https://www.instagram.com/cousins_.fashion?igsh=aGZmaXRpNmJ2NWQ2"
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
        <p className="max-sm:hidden">
          Privacy Policy <span className="px-1">|</span> Terms of Use
        </p>
        <p>
          © 2025 pskinteriors.in <span className="px-1">|</span> All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
