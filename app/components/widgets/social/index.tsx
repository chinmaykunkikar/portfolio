import Card from "@components/Card";
import CardLinkButton from "@components/CardLinkButton";
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
        "group flex h-full w-full items-center justify-center",
        widgetBgColor,
      )}
    >
      <a href={socialUrl} target="_blank" rel="noreferrer">
        {children}
      </a>
      <CardLinkButton
        href={socialUrl}
        targetBlank
        bgColorClass={linkBgColor}
        hoverRingClass={linkRingColor}
      />
    </Card>
  );
}
