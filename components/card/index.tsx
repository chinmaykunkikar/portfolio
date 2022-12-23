import React from "react";

export type CardPropsType = {
  className?: String;
  children?: JSX.Element | JSX.Element[] | String;
  [props: string]: any;
};

export default function Card({ children, className, ...props }: CardPropsType) {
  return (
    <div
      className={`font-semibold min-h-[16rem] rounded-3xl bg-white p-4 text-neutral-600
      transition-all duration-300 ease-in hover:drop-shadow-xl ${
        className ?? ""
      }`}
      {...props}
    >
      {children}
    </div>
  );
}
