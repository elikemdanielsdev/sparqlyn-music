import clsx from "clsx";
import Container from "@/components/elements/container";
import Heading from "@/components/elements/heading";
import Section from "@/components/elements/section";

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
      {/* Marquee */}
      <section className="relative mt-20 flex overflow-x-hidden bg-gradient-to-r from-green-300 to-rose-400">
        <div className="animate-marquee whitespace-nowrap py-6">
          <span className="mx-8 text-3xl">Directus</span>
          <span className="mx-8 text-3xl">•</span>
          <span className="mx-8 text-3xl">Astro</span>
          <span className="mx-8 text-3xl">•</span>
          <span className="mx-8 text-3xl">React</span>
          <span className="mx-8 text-3xl">•</span>
          <span className="mx-8 text-3xl">Tailwind CSS</span>
          <span className="mx-8 text-3xl">•</span>
          <span className="mx-8 text-3xl">Railway</span>
          <span className="mx-8 text-3xl">•</span>
          <span className="mx-8 text-3xl">Digital Ocean</span>
          <span className="mx-8 text-3xl">•</span>
        </div>

        <div className="absolute top-0 animate-marquee2 whitespace-nowrap py-6">
          <span className="mx-8 text-3xl">Directus</span>
          <span className="mx-8 text-3xl">•</span>
          <span className="mx-8 text-3xl">Astro</span>
          <span className="mx-8 text-3xl">•</span>
          <span className="mx-8 text-3xl">React</span>
          <span className="mx-8 text-3xl">•</span>
          <span className="mx-8 text-3xl">Tailwind CSS</span>
          <span className="mx-8 text-3xl">•</span>
          <span className="mx-8 text-3xl">Railway</span>
          <span className="mx-8 text-3xl">•</span>
          <span className="mx-8 text-3xl">Digital Ocean</span>
          <span className="mx-8 text-3xl">•</span>
        </div>
      </section>
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
