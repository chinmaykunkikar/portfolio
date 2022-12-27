import Card from "@components/card";
import LinkArrow from "@components/link-arrow";

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
          href={socialUrl}
          bgColorClass={socialBgColor}
          hoverRingClass={socialRingColor}
        />
      </div>
    </Card>
  );
}
