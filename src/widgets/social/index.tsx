import Link from "next/link";
import Card from "src/components/Card";
import CardLinkButton from "src/components/CardLinkButton";
import { twMerge } from "tailwind-merge";

export type SocialPropTypes = {
  widgetBgColor?: string;
  linkBgColor?: string;
  linkRingColor?: string;
  children?: JSX.Element | JSX.Element[] | String;
  socialUrl: string;
  label: string;
};

export default function SocialWidget({
  widgetBgColor,
  linkBgColor,
  linkRingColor,
  children,
  socialUrl,
  label,
}: SocialPropTypes) {
  return (
    <Card
      className={twMerge(
        "group flex w-full items-center justify-center",
        widgetBgColor,
      )}
    >
      <Link
        href={socialUrl}
        target="_blank"
        aria-label={label}
        rel="noreferrer"
        passHref
      >
        {children}
      </Link>
      <CardLinkButton
        href={socialUrl}
        label={label}
        targetBlank
        bgColorClass={linkBgColor}
        hoverRingClass={linkRingColor}
      />
    </Card>
  );
}
