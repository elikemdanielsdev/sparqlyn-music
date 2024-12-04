import clsx from "clsx";
import Container from "@/components/ui/container";
import Heading from "@/components/ui/heading";
import Section from "@/components/ui/section";

type Props = {
  title?: string;
  subtitle?: string;
  className?: string;
  button?: boolean;
  buttonProps?: {
    class?: string;
    label?: string;
    size?: "xs" | "sm" | "md" | "lg";
  };
  message?: string;
};

export default function Footer({
  title,
  subtitle,
  className,
  button,
  buttonProps,
  message,
}: Props) {
  return (
    <>
      <Section className={clsx("bg-gray-950 py-40 text-white", className)}>
        <Container
          width="500"
          className="grid place-items-center gap-4 text-center"
        >
          <Heading
            tag="h1"
            size="display-1"
            className="leading-[1.2]"
            text={title ?? ""}
          />
          <Heading
            tag="h2"
            size="display-3"
            weight="normal"
            className="text-xl"
            text={subtitle ?? ""}
          />
          {/* {button && (
            <div class="mt-10 grid place-items-center gap-3">
              <Button {...buttonProps}>{buttonProps?.label ?? "Button"}</Button>
              <p class="text-sm">{message}</p>
            </div>
          )} */}
        </Container>
      </Section>
    </>
  );
}
