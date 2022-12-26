import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Card from "../../card";
import LinkArrow from "../../link-arrow";

export type SocialPropTypes = {
  socialBgColor?: string;
  socialRingColor?: string;
  children?: JSX.Element | JSX.Element[] | String;
  socialUrl: string;
};

export default function SocialWidget({
  socialBgColor,
  socialRingColor,
  children,
  socialUrl,
}: SocialPropTypes) {
  return (
    <Card className="group relative">
      <div className="flex h-full w-full items-center justify-center">
        <a href={socialUrl} target="_blank" rel="noreferrer">
          {children}
        </a>
        <LinkArrow
          bgColorClass={socialBgColor}
          hoverRingClass={socialRingColor}
        />
      </div>
    </Card>
  );
}
