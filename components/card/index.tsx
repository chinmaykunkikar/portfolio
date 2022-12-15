import React from "react";

export type CardPropsType = {
  className?: String;
  children?: JSX.Element | String;
  colSpan?: number;
};

export default function Card({ children, className }: CardPropsType) {
  return (
    <div
      className={`rounded-xl bg-white p-6 transition-all duration-300 ease-in hover:drop-shadow-xl ${className}`}
    >
      {children}
    </div>
  );
}
