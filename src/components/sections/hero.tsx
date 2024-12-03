import clsx from "clsx";
import Section from "@/components/elements/section";
import Container from "@/components/elements/container";
import Heading from "@/components/elements/heading";
import Image from "next/image";
import { directusApiUrl } from "@/schemas/directus";
import Button from "@/components/elements/button";

type Props = {
  className?: string;
  title?: string;
  subtitle?: string;
  date?: string;
  button?: boolean;
  buttonProps?: {
    children?: React.ReactNode;
    className?: string;
  };
  message?: string;
  image?: string;
  featured_image?: string;
  alt?: string;
};

export default function Hero({
  className,
  title,
  subtitle,
  date,
  button,
  buttonProps,
  message,
  image,
  featured_image,
  alt,
}: Props) {
  return (
    <Section className={clsx(className)}>
      <Container
        width="1000"
        className="grid place-items-center gap-4 text-center"
      >
        {/* Title */}
        {title && (
          <Heading
            tag="h1"
            size="display-1"
            className="leading-[1.2]"
            text={title}
          />
        )}
        {/* Subtitle */}
        {subtitle && (
          <Heading
            tag="h2"
            size="sub-display"
            weight="normal"
            className="max-w-screen-700"
            text={subtitle}
          />
        )}
        {/* Date */}
        {date && <time dateTime={date}>{date}</time>}
        {/* Button */}
        {button && (
          <div className="mt-10 grid place-items-center gap-3">
            <Button {...buttonProps}>
              {buttonProps?.children ?? "Button"}
            </Button>
            <p className="text-sm">{message}</p>
          </div>
        )}
      </Container>
      {/* Image */}
      {image && (
        <Container className="mt-32">
          <Image
            width={1200}
            height={1200}
            src={`${directusApiUrl}/assets/${image}`}
            alt={alt ?? ""}
            className="h-auto w-full"
          />
        </Container>
      )}
      {/* Featured Image */}
      {featured_image && (
        <Container className="mt-20 overflow-hidden rounded-[32px]">
          <Image
            width={1200}
            height={1200}
            src={`${directusApiUrl}/assets/${featured_image}`}
            alt={alt ?? ""}
            className="aspect-[1400/900] w-full object-cover"
          />
        </Container>
      )}
    </Section>
  );
}
