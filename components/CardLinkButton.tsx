import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { twMerge } from "tailwind-merge";

type CardLinkButtonProps = {
  href: string;
  targetBlank?: boolean;
  as?: React.ElementType | string;
  bgColorClass?: string;
  hoverRingClass?: string;
  positionClass?: string;
  variant?: React.ElementType;
  [props: string]: any;
};

export default function CardLinkButton({
  href,
  targetBlank = false,
  as: Component = "a",
  bgColorClass,
  hoverRingClass,
  positionClass,
  variant: IconVariant = ArrowUpRightIcon,
  ...props
}: CardLinkButtonProps) {
  return (
    <div
      className={twMerge(
        `absolute flex items-center justify-center ${
          positionClass ? positionClass : "bottom-4 right-4"
        }`
      )}
    >
      <Component
        href={href}
        target={targetBlank ? "_blank" : undefined}
        rel={targetBlank ? "noreferrer" : undefined}
        className={twMerge(
          `text-bold rounded-full ${
            bgColorClass ?? "bg-neutral-600"
          } p-1 transition-all hover:ring-8 ${
            hoverRingClass ?? "hover:ring-neutral-400/[0.5]"
          }`
        )}
        {...props}
      >
        <IconVariant
          className="p-1"
          strokeWidth={3}
          width={24}
          height={24}
          color="white"
        />
      </Component>
    </div>
  );
}
