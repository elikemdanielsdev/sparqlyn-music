import clsx from "clsx";

type Props = {
  tag?: "section" | "header" | "footer";
  id?: string;
  className?: string;
  children: React.ReactNode;
};

export default function Section({
  tag: Tag = "section",
  id,
  className,
  children,
}: Props) {
  return (
    <Tag id={id} className={clsx("px-[4%] py-32", className)}>
      {children}
    </Tag>
  );
}
