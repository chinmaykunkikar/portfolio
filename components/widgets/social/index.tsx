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
    <Card className="flex flex-col items-center justify-center">
      <Image
        src={imgSrc}
        width={imgWidth ?? 128}
        height={imgHeight ?? 128}
        alt={imgAlt}
      />
      <a
        href={socialUrl}
        target="_blank"
        className="text-bold mt-4 mr-4 self-end hover:text-neutral-500"
        rel="noreferrer"
      >
        <ArrowRightCircleIcon width={42} height={42} />
      </a>
    </Card>
  );
}
