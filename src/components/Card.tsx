import { ClassNameValue, twMerge } from "tailwind-merge";

export type CardPropsType = {
  className?: ClassNameValue;
  children?: JSX.Element | JSX.Element[] | String | React.ReactNode;
  [props: string]: any;
};

export default function Card({ children, className, ...props }: CardPropsType) {
  return (
    <div
      className={twMerge(
        `font-semibold text-type relative h-72 rounded-xl bg-white p-4
      transition-all duration-300 ease-in`,
        className ?? "card",
      )}
      {...props}
    >
      {children}
    </div>
  );
}
