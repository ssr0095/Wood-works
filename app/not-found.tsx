import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="w-full h-svh px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] flex flex-col items-center justify-center overflow-hidden">
      <div className="relative w-full h-full my-20 flex flex-col items-center justify-center gap-4 border-2 border-border border-dashed">
        <div className="absolute size-40 max-lg:-top-10 top-10 -right-6 bg-[url(/assets/images/leaf-1.svg)] bg-contain bg-no-repeat transform rotate-45" />
        <h3 className="text-8xl">404</h3>
        <h2 className="text-2xl">Page Not Found</h2>
        <p className="text-center">
          The page you requested could not be found.
        </p>
        <Button asChild>
          <Link href="/">
            <ArrowLeft className="size-4" />
            Go to Homepage
          </Link>
        </Button>
        <div className="absolute size-40 max-lg:-bottom-10 top-80 max-lg:left-10 left-50 bg-[url(/assets/images/leaf-1.svg)] bg-contain bg-no-repeat transform -rotate-70" />
      </div>
    </section>
  );
}
