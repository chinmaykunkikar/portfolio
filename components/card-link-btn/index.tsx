import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

type CardLinkButtonProps = {
  href: string;
  as?: React.ElementType | string;
  bgColorClass?: string;
  hoverRingClass?: string;
  variant?: React.ElementType;
};

export default function CardLinkButton({
  href,
  as: Component = "a",
  bgColorClass,
  hoverRingClass,
  variant: IconVariant = ArrowUpRightIcon,
}: CardLinkButtonProps) {
  return (
    <div className="absolute right-4 bottom-4 flex items-center justify-center">
      <Component
        href={href}
        className={`text-bold rounded-full ${
          bgColorClass ?? "bg-neutral-600"
        } p-1 transition-all hover:ring-8 ${
          hoverRingClass ?? "hover:ring-neutral-400/[0.5]"
        }`}
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
