import Link from "next/link";

type Props = {
  title?: string;
  slug?: string;
  date?: string;
  tags?: string[];
};

export default function ArticleCard({ title, slug, date, tags }: Props) {
  return (
    <article className="overflow-hidden rounded-[24px]">
      <Link href={`/articles/${slug}`} className="grid gap-2 bg-white p-10">
        <h3 className="text-[22px] font-bold">{title}</h3>
        <time dateTime={date} className="-order-1">
          {date}
        </time>
        {/* Tags */}
        <div className="mt-3 flex flex-wrap gap-2">
          {tags?.map((tag) => (
            <span key={tag} className="badge badge-ghost">
              {tag}
            </span>
          ))}
        </div>
      </Link>
    </article>
  );
}
