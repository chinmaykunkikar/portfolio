import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Card from "../../card";

export type SocialPropTypes = {
  socialColor?: string;
  children?: JSX.Element | JSX.Element[] | String;
  socialUrl: string;
};

export default function SocialWidget({
  socialColor,
  children,
  socialUrl,
}: SocialPropTypes) {
  return (
    <Card className="group relative">
      <div className="flex h-full w-full items-center justify-center">
        <a href={socialUrl}>{children}</a>
        <div className="absolute right-4 bottom-4 flex items-center justify-center">
          <a
            href={socialUrl}
            target="_blank"
            className={`text-bold rounded-full ${
              socialColor ? `${socialColor}` : "bg-white hover:ring-white/[0.5]"
            } p-1 transition-all hover:ring-8`}
            rel="noreferrer"
          >
            <ArrowUpRightIcon
              className="p-1"
              strokeWidth={3}
              width={24}
              height={24}
              color="white"
            />
          </a>
        </div>
      </div>
    </Card>
  );
}
