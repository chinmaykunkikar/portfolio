import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Card from "../../card";

export type SocialPropTypes = {
  imgSrc: string;
  imgAlt: string;
  imgWidth?: number;
  imgHeight?: number;
  socialUrl: string;
};

export default function SocialWidget({
  imgSrc,
  imgAlt,
  imgWidth,
  imgHeight,
  socialUrl,
}: SocialPropTypes) {
  return (
    <Card className="group relative">
      <div className="flex h-full w-full items-center justify-center">
        <Image
          src={imgSrc}
          width={imgWidth ?? 128}
          height={imgHeight ?? 128}
          alt={imgAlt}
        />
        <div className="absolute right-4 bottom-4 flex -rotate-45 items-center justify-center group-hover:text-neutral-500">
          <a
            href={socialUrl}
            target="_blank"
            className="text-bold rounded-full hover:bg-neutral-300"
            rel="noreferrer"
          >
            <ArrowRightCircleIcon width={42} height={42} />
          </a>
        </div>
      </div>
    </Card>
  );
}
