// import { assets } from "../assets/assets";

import { assets } from "@/public/assets/assets";
import Image from "next/image";

const InfiniteBanner = () => {
  return (
    <div className="container">
      <div className="text-center">
        <div
          x-data="{}"
          x-init="$nextTick(() => {
                        let ul = $refs.logos;
                        ul.insertAdjacentHTML('afterend', ul.outerHTML);
                        ul.nextSibling.setAttribute('aria-hidden', 'true');
                    })"
          className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
        >
          <ul
            x-ref="logos"
            className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
          >
            {[1, 2, 3, 4, 5, 6, 7].map((item, i) => (
              <li key={i}>
                <Image
                  placeholder="blur"
                  src={assets.logo}
                  width={32}
                  height={32}
                  alt="PSK Interiors Logo"
                  className="text-on-primary rounded-full"
                  loading="lazy"
                />
              </li>
            ))}
          </ul>
          <ul
            x-ref="logos"
            className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
          >
            {[1, 2, 3, 4, 5, 6, 7].map((item, i) => (
              <li key={i}>
                <Image
                  placeholder="blur"
                  src={assets.logo}
                  width={32}
                  height={32}
                  alt="PSK Interiors Logo"
                  className="text-on-primary rounded-full"
                  loading="lazy"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InfiniteBanner;
