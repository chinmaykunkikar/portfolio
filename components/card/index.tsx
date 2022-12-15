import React from "react";

export type CardPropsType = {
  className?: String;
  children?: JSX.Element | String;
  colSpan?: number;
};

export default function Card({ children, className }: CardPropsType) {
  return (
    <div
      className={`min-h-[20vh] rounded-2xl bg-white p-6 text-xl font-semibold text-neutral-600 transition-all duration-300 ease-in hover:drop-shadow-xl ${className}`}
    >
      {children}
    </div>
  );
}
