import clsx from "clsx";

type Props = {
  tag?: "section" | "header" | "footer";
  className?: string;
  children: React.ReactNode;
};

export default function Section({
  tag: Tag = "section",
  className,
  children,
}: Props) {
  return <Tag className={clsx("px-[4%] py-20", className)}>{children}</Tag>;
}
