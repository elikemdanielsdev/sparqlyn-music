import { directusApiUrl } from "@/schemas/directus";
import Image from "next/image";
import Link from "next/link";

type Props = {
  title?: string;
  description?: string;
  image?: string;
  link?: string;
  tags?: string[];
};

export default function ShowcaseCard({
  title,
  description,
  image,
  link,
  tags,
}: Props) {
  return (
    <article className="overflow-hidden rounded-[32px]">
      <Link href={link || ""} target="_blank" className="relative grid gap-2">
        {image && (
          <Image
            src={`${directusApiUrl}/assets/${image}`}
            alt={title || ""}
            width={1200}
            height={1200}
            className="aspect-[1400/900] w-full object-cover"
          />
        )}
        <div className="absolute bottom-4 left-4 right-4 max-w-screen-500 rounded-[24px] bg-white p-10">
          {/* Title */}
          <h3 className="text-[22px] font-bold">
            {title} — <span className="font-normal">{description}</span>
          </h3>
          {/* Tags */}
          {tags && (
            <div className="mt-3 flex flex-wrap gap-2">
              {tags?.map((tag) => (
                <span key={tag} className="badge badge-ghost">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </Link>
    </article>
  );
}
