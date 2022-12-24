import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Card from "../../card";

export type SocialPropTypes = {
  cardColor?: string;
  children?: JSX.Element | JSX.Element[] | String;
  socialUrl: string;
};

export default function SocialWidget({
  cardColor,
  children,
  socialUrl,
}: SocialPropTypes) {
  return (
    <Card className={`group relative ${cardColor ? `bg-[${cardColor}]` : ""}`}>
      <div className="flex h-full w-full items-center justify-center">
        {children}
        <div className="absolute right-4 bottom-4 flex items-center justify-center">
          <a
            href={socialUrl}
            target="_blank"
            className="text-bold rounded-full bg-white p-1 transition-all hover:ring-4 hover:ring-white/[0.5]"
            rel="noreferrer"
          >
            <ArrowUpRightIcon
              className="p-1"
              strokeWidth={3}
              width={24}
              height={24}
            />
          </a>
        </div>
      </div>
    </Card>
  );
}
