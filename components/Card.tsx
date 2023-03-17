export type CardPropsType = {
  className?: String;
  children?: JSX.Element | JSX.Element[] | String | React.ReactNode;
  [props: string]: any;
};

export default function Card({ children, className, ...props }: CardPropsType) {
  // TODO Add back p-4 here
  return (
    <div
      className={`font-semibold relative min-h-[16rem] rounded-3xl bg-white text-neutral-600
      transition-all duration-300 ease-in hover:drop-shadow-xl ${
        className ?? ""
      }`}
      {...props}
    >
      {children}
    </div>
  );
}
