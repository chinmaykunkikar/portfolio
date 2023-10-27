import Card from "@components/Card";
import CardLinkButton from "@components/CardLinkButton";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

type SocialPropTypes = {
  widgetBgColor?: string;
  linkBgColor?: string;
  linkRingColor?: string;
  children?: React.ReactNode;
  socialUrl: string;
  label: string;
  ariaLabel: string;
};

export default function SocialWidget({
  widgetBgColor,
  linkBgColor,
  linkRingColor,
  children,
  socialUrl,
  label,
  ariaLabel,
}: SocialPropTypes) {
  return (
    <Card
      className={twMerge(
        "group flex w-full items-center justify-center",
        widgetBgColor,
      )}
      aria-label={ariaLabel}
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
