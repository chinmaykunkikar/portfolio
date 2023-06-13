import { twMerge } from "tailwind-merge";

export type CardPropsType = {
  className?: String;
  children?: JSX.Element | JSX.Element[] | String | React.ReactNode;
  [props: string]: any;
};

export default function Card({ children, className, ...props }: CardPropsType) {
  return (
    <div
      className={twMerge(`font-semibold relative min-h-[16rem] rounded-3xl bg-white p-4 text-neutral-600
      transition-all duration-300 ease-in hover:drop-shadow-xl ${
        className ?? "card"
      }`)}
      {...props}
    >
      {children}
    </div>
  );
}
