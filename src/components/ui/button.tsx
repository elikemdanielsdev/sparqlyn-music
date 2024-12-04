import clsx from "clsx";

type Props = {
  className?: string;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
};

export default function Button({ children, className, size = "lg" }: Props) {
  return (
    <button
      className={clsx(
        "btn btn-primary rounded-full",
        size === "sm" && "btn-sm",
        size === "md" && "btn-md",
        size === "lg" && "btn-lg",
        className,
      )}
    >
      {children}
    </button>
  );
}
