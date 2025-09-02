import Link from "next/link";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { ChevronDown, Mail, Map, Phone } from "lucide-react";
import { socialLinks } from "@/public/assets/assets";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="w-full bg-primary">
      <div className="max-w-7xl mx-auto h-10 px-4 flex items-center justify-between">
        {/*Mobile*/}

        <div className="lg:hidden max-w-7xl mx-auto flex justify-center">
          <Link
            href="/contact"
            className=" text-sm font-medium text-primary-foreground transition-colors"
          >
            Contact us now →
          </Link>
        </div>
        {/*Desktop*/}
        <div className="hidden lg:flex items-center w-full max-w-7xl justify-between">
          <div className="flex items-center gap-6 flex-1">
            {/*Location*/}
            <HoverCard openDelay={50}>
              <HoverCardTrigger asChild>
                <p className="flex items-center gap-1 text-sm font-medium text-primary-foreground transition-colors">
                  <Map className="size-4 mr-1" />
                  Locations
                  <ChevronDown className="size-4" />
                </p>
              </HoverCardTrigger>
              <HoverCardContent className="w-40 p-2" side="bottom">
                <div className="flex flex-col items-start justify-center">
                  <p className="w-full p-1 text-sm">Tiruppur</p>
                  <p className="w-full p-1 text-sm">Coimbatore</p>
                  <p className="w-full p-1 text-sm">Erode</p>
                </div>
              </HoverCardContent>
            </HoverCard>
            {/*Email*/}
            <Link
              href="mailto:care@pskinteriors.com"
              aria-label="Email Us"
              className="flex items-center gap-1 hover:underline text-white"
            >
              <Mail className="size-4 mr-1" />
              <p className="text-sm">{process.env.NEXT_PUBLIC_EMAIL}</p>
            </Link>
            {/*Phone*/}
            <Link
              className="flex items-center gap-1 hover:underline text-white"
              // alt="whatsapp"
              href={`https://wa.me/${process.env.NEXT_PUBLIC_PHONE_LINK}?text=${process.env.NEXT_PUBLIC_WHATSAPP_TEXT}`}
            >
              <Phone className="size-4" />
              <p className="text-sm">{process.env.NEXT_PUBLIC_PHONE_TEXT}</p>
            </Link>
          </div>
          <div className="flex items-center gap-4 text-white">
            <p className="text-sm">Follow us</p>
            <ul className="flex items-center gap-3">
              {socialLinks?.map((item, index) => {
                return (
                  <li key={index}>
                    <Link
                      href={`${item.link}`}
                      className="flex items-center gap-1 hover:underline"
                    >
                      <Image
                        src={item.icon}
                        alt={item.social}
                        className="text-white"
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
