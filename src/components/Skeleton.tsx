import { cn } from "@lib/cn";

export function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <span
      className={cn("animate-pulse rounded-md bg-neutral-300", className)}
      aria-hidden="true"
      {...props}
    />
  );
}
