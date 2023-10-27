import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

type CardLinkButtonProps = {
  href: string;
  label: string;
  targetBlank?: boolean;
  bgColorClass?: string;
  hoverRingClass?: string;
  positionClass?: string;
  variant?: React.ElementType;
  [props: string]: any;
};

export default function CardLinkButton({
  href,
  label,
  targetBlank = false,
  bgColorClass,
  hoverRingClass,
  positionClass,
  variant: IconVariant = ArrowUpRightIcon,
  ...props
}: CardLinkButtonProps) {
  return (
    <button
      className={twMerge(
        "absolute flex items-center justify-center",
        positionClass ? positionClass : "bottom-4 right-4",
      )}
    >
      <Link
        passHref
        href={href}
        target={targetBlank ? "_blank" : undefined}
        rel={targetBlank ? "noreferrer" : undefined}
        aria-label={label}
        className={twMerge(
          " text-bold rounded-full p-1 transition-all hover:ring-8",
          bgColorClass ?? "bg-neutral-600",
          hoverRingClass ?? "hover:ring-neutral-400/[0.5]",
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
      </Link>
    </button>
  );
}
