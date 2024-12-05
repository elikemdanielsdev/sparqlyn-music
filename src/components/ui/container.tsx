import clsx from "clsx";

const widths = {
  "1400": "max-w-screen-1400",
  "830": "max-w-screen-830",
  "700": "max-w-screen-700",
  "240": "max-w-screen-240",
};

type Props = {
  width?: keyof typeof widths;
  className?: string;
  children: React.ReactNode;
};

export default function Container({
  width = "1400",
  className,
  children,
}: Props) {
  return (
    <div className={clsx("mx-auto", widths[width], className)}>{children}</div>
  );
}
