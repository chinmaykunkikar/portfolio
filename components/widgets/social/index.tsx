import Card from "@components/card";
import CardLinkButton from "@components/card-link-btn";

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
    <Card className="group">
      <div className="flex h-full w-full items-center justify-center">
        <a href={socialUrl} target="_blank" rel="noreferrer">
          {children}
        </a>
        <CardLinkButton
          href={socialUrl}
          bgColorClass={socialBgColor}
          hoverRingClass={socialRingColor}
        />
      </div>
    </Card>
  );
}
