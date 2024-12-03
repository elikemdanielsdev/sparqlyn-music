import { directus } from "@/schemas/directus";
import { readItems } from "@directus/sdk";

import Hero from "@/components/sections/hero";
import Section from "@/components/elements/section";
import Container from "@/components/elements/container";
import ArticleCard from "@/components/elements/article-card";
import formattedDate from "@/utils/formatted-date";

export default async function Articles() {
  const articles = await directus.request(
    readItems("articles", {
      fields: ["title", "slug", "published_date", "featured_image", "tags"],
    }),
  );

  // console.log(articles);

  return (
    <>
      <Hero title="Articles" subtitle="Articles" className="pb-10" />
      <Section className="pt-0">
        <Container width="600" className="mt-10 rounded-[32px] bg-gray-100 p-2">
          <div className="grid gap-2 rounded-[24px]">
            {articles.map((article) => (
              <ArticleCard
                key={article.slug}
                title={article.title}
                slug={article.slug}
                date={
                  article.published_date
                    ? formattedDate(article.published_date)
                    : ""
                }
                tags={article.tags}
              />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
