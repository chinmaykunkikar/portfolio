import { ArrowRightIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline";

type LinkArrowProps = {
  href: string;
  as?: React.ElementType | string;
  bgColorClass?: string;
  hoverRingClass?: string;
  variant?: "external" | "internal";
};

export default function LinkArrow({
  href,
  as: Component = "a",
  bgColorClass,
  hoverRingClass,
  variant = "external",
}: LinkArrowProps) {
  // The parent component (<Card />) should have the "relative" class for this to work properly
  return (
    <div className="absolute right-4 bottom-4 flex items-center justify-center">
      <Component
        href={href}
        className={`text-bold rounded-full ${
          bgColorClass ?? "bg-neutral-600"
        } p-1 transition-all hover:ring-8 ${
          hoverRingClass ?? "hover:ring-neutral-300/[0.5]"
        }`}
      >
        {variant === "external" ? (
          <ArrowUpRightIcon
            className="p-1"
            strokeWidth={3}
            width={24}
            height={24}
            color="white"
          />
        ) : (
          <ArrowRightIcon
            className="p-1"
            strokeWidth={3}
            width={24}
            height={24}
            color="white"
          />
        )}
      </Component>
    </div>
  );
}
