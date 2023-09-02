import Card from "@components/Card";
import CardLinkButton from "@components/CardLinkButton";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export type SocialPropTypes = {
  widgetBgColor?: string;
  linkBgColor?: string;
  linkRingColor?: string;
  children?: JSX.Element | JSX.Element[] | String;
  socialUrl: string;
};

export default function SocialWidget({
  widgetBgColor,
  linkBgColor,
  linkRingColor,
  children,
  socialUrl,
}: SocialPropTypes) {
  return (
    <Card
      className={twMerge(
        "group flex w-full items-center justify-center aspect-auto h-full",
        widgetBgColor,
      )}
    >
      <Link href={socialUrl} target="_blank" rel="noreferrer" passHref>
        {children}
      </Link>
      <CardLinkButton
        href={socialUrl}
        targetBlank
        bgColorClass={linkBgColor}
        hoverRingClass={linkRingColor}
      />
    </Card>
  );
}
