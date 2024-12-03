import { directus } from "@/schemas/directus";
import { readItems, readSingleton } from "@directus/sdk";

import Hero from "@/components/sections/hero";
import Section from "@/components/elements/section";
import Container from "@/components/elements/container";
import ShowcaseCard from "@/components/elements/showcase-card";

export default async function Home() {
  // Get Home Data
  const home = await directus.request(
    readSingleton("home", {
      fields: [
        "hero_title",
        "hero_subtitle",
        "hero_button_text",
        "hero_image",
        "content",
      ],
    }),
  );

  // Get Showcase Data
  const showcase = await directus.request(
    readItems("showcase", {
      fields: ["title", "description", "featured_image", "link"],
    }),
  );

  return (
    <>
      <Hero
        title={home.hero_title}
        subtitle={home.hero_subtitle}
        button={true}
        buttonProps={{
          children: home.hero_button_text,
        }}
      />
      <Section className="pt-0">
        <Container className="mt-10 rounded-[32px]">
          <div className="grid gap-2">
            {showcase.map((showcase) => (
              <ShowcaseCard
                key={showcase.title}
                title={showcase.title}
                description={showcase.description}
                image={showcase.featured_image}
                link={showcase.link}
                // tags={article.tags}
              />
            ))}
          </div>
          <h1 className="text-display-1 font-bold">Hello, Yaw and Elikem</h1>
        </Container>
      </Section>
    </>
  );
}
