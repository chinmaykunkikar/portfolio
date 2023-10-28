import { twMerge } from "tailwind-merge";

type CardPropsType = React.HTMLAttributes<HTMLDivElement> & {
  children?: React.ReactNode;
};

export function Card({ children, className, ...props }: CardPropsType) {
  return (
    <section
      className={twMerge(
        "font-semibold relative h-72 rounded-xl bg-white p-4 text-type transition-all duration-300 ease-in",
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}
