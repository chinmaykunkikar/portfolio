type ButtonPropsType = {
  children?: React.ReactNode;
};

export function Button({ children }: ButtonPropsType) {
  return (
    <button className="rounded-xl px-4 py-2 transition-all duration-200 ease-in hover:bg-neutral-300">
      {children}
    </button>
  );
}
