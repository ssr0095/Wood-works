"use client";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CreditsList } from "@/public/assets/assets";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

const Credits = () => {
  return (
    <section className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      {/* Title */}
      <div className="my-28">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-on-surface mb-4">
            Credits <span className="text-primary">& </span>
            Attribution
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-on-surface-variant">
            PSK Interiors is built upon amazing open-source tools and resources.
            We gratefully acknowledge the following:
          </p>
        </div>
      </div>
      {/* </section> */}
      <div className="grid gap-6 sm:grid-cols-2">
        {CreditsList?.map((item, i) => (
          <Card
            key={i}
            className="rounded-2xl shadow-sm hover:shadow-md transition"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {item.title}
                {item.link && (
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary"
                  >
                    <ExternalLink size={16} />
                  </Link>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Credits;
