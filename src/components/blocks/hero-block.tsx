import clsx from "clsx";
import { Container, Section } from "@/components/ui";

type Props = {
  className?: string;
  title?: string;
  subtitle?: string;
};

export default function HeroBlock({ className, title, subtitle }: Props) {
  return (
    <Section className={clsx(className)}>
      <Container
        width="1400"
        className="grid place-items-center gap-4 text-center"
      >
        <h1 className="text-7xl uppercase">{title}</h1>
        <h2 className="text-3xl">{subtitle}</h2>
      </Container>
    </Section>
  );
}
