import clsx from "clsx";

const widths = {
  "1200": "max-w-screen-1200",
  "1000": "max-w-screen-1000",
  "700": "max-w-screen-700",
  "600": "max-w-screen-600",
  "500": "max-w-screen-500",
};

type Props = {
  width?: keyof typeof widths;
  className?: string;
  children: React.ReactNode;
};

export default function Container({
  width = "1200",
  className,
  children,
}: Props) {
  return (
    <div className={clsx("mx-auto", widths[width], className)}>{children}</div>
  );
}
