import Card from "@components/card";
import CardLinkButton from "@components/card-link-btn";

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
    <Card className={`group ${widgetBgColor}`}>
      <div className="flex h-full w-full items-center justify-center">
        <a href={socialUrl} target="_blank" rel="noreferrer">
          {children}
        </a>
        <CardLinkButton
          href={socialUrl}
          targetBlank
          bgColorClass={linkBgColor}
          hoverRingClass={linkRingColor}
        />
      </div>
    </Card>
  );
}
