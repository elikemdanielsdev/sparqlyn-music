import { directus } from "@/schemas/directus";
import { readItems } from "@directus/sdk";

import Hero from "@/components/sections/hero";
import Section from "@/components/elements/section";
import Container from "@/components/elements/container";
import ArticleCard from "@/components/elements/article-card";

export default async function Showcase() {
  const showcase = await directus.request(
    readItems("showcase", {
      fields: ["title", "featured_image", "link"],
    }),
  );

  console.log(showcase);

  return (
    <>
      <Hero title="Showcase" subtitle="Showcase" className="pb-10" />
      <Section>
        <Container width="600" className="mt-10 rounded-[32px] bg-gray-100 p-2">
          <div className="grid gap-2 rounded-[24px]">
            {showcase.map((showcase) => (
              <ArticleCard
                key={showcase.title}
                title={showcase.title}
                slug={showcase.link}

                // tags={article.tags}
              />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
