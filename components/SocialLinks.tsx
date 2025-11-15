"use client";
import { SocialCardsType } from "@/public/assets/assets";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const SocialCard = ({
  Social,
  key,
}: {
  Social: SocialCardsType;
  key: number;
}) => {
  const navigation = useRouter();

  return (
    <Card
      key={key}
      className="py-4 hover:bg-accent/50 transition-colors cursor-pointer"
      onClick={() => navigation.push("#")}
    >
      <CardContent className="flex items-center gap-5 px-4">
        <div className="size-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
          <Image
            // placeholder="blur"
            src={Social.icon}
            alt="wood"
            className="w-5"
            width={20}
            height={20}
          />
        </div>
        <div className="flex flex-col items-start justify-center gap-1 cursor-default">
          <h2>{Social.title}</h2>
          <Link
            href={`${Social.link}`}
            className="text-xs hover:underline hover:text-primary"
          >
            follow us
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default SocialCard;
