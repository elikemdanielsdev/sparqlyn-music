import { directus } from "@/schemas/directus";
import { readItem } from "@directus/sdk";
import formattedDate from "@/utils/formatted-date";
import Hero from "@/components/sections/hero";
import Container from "@/components/elements/container";
import Section from "@/components/elements/section";

async function getArticle(slug: string) {
  const article = await directus.request(
    readItem("articles", slug, {
      fields: [
        "title",
        "slug",
        "published_date",
        "featured_image",
        "image_description",
        "content",
      ],
    }),
  );

  return article;
}

export default async function SingleArticle({
  params,
}: {
  params: { slug: string };
}) {
  const article = await getArticle(params.slug);
  return (
    <>
      <Hero
        title={article.title}
        date={article.published_date && formattedDate(article.published_date)}
        featured_image={article.featured_image}
        alt={article.image_description}
        className="pb-0"
      />
      <Section className="relative -mt-10 pt-0">
        <Container width="600" className="rounded-[32px] bg-gray-100 p-2">
          {article.content && (
            <div
              className="prose max-w-none rounded-[24px] bg-white p-10"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          )}
        </Container>
      </Section>
    </>
  );
}
