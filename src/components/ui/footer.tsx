import { Section, Container, Heading } from "@/components/ui";
import Link from "next/link";
import Socials from "@/data/socials";

export default function Footer() {
  return (
    <Section
      tag="footer"
      id="videos"
      className="to-crimson-500 sticky bottom-0 -z-50 bg-gradient-to-tr from-black"
    >
      <Container
        width="830"
        className="relative z-20 grid place-items-center gap-10"
      >
        <Heading
          tag="h2"
          size="display-1"
          className="text-center uppercase leading-[1] text-amber-50"
        >
          Connect with Sparqlyn on
        </Heading>
        <div className="mt-5 flex gap-4">
          {Socials.map(({ link, platform }) => (
            <Link
              key={link}
              href={link}
              target="_blank"
              className="hover:text-crimson-800 btn h-2 rounded-full border border-amber-50 bg-transparent px-4 leading-tight text-amber-50 hover:bg-amber-50"
            >
              {platform}
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
