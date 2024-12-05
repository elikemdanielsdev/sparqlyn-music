import clsx from "clsx";

const weights = {
  thin: "font-thin",
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
  extrabold: "font-extrabold",
};

const sizes = {
  "display-1": "text-display-1",
  "display-2": "text-display-2",
  "display-3": "text-display-3",
  "sub-display": "text-sub-display",
};

type Props = {
  className?: string;
  size?: keyof typeof sizes;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  weight?: keyof typeof weights;
  children: React.ReactNode;
};

export default function Heading({
  tag: Tag = "h1",
  size = "display-1",
  weight = "bold",
  className,
  children,
}: Props) {
  return (
    <Tag className={clsx(sizes[size], weights[weight], className)}>
      {children}
    </Tag>
  );
}
