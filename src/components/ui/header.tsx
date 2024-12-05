"use client";

import { Section, Container } from "@/components/ui";
import Link from "next/link";
import clsx from "clsx";
import { NavItems } from "@/data";
import { usePathname } from "next/navigation";

export default function Header() {
  const currentPath = usePathname();

  return (
    <Section tag="header" className="sticky top-0 z-40 bg-amber-50 py-[4px]">
      <Container
        width="1400"
        className="flex items-center justify-between gap-6"
      >
        <Link href="/"> Elikem Daniels </Link>
        {/* Navigation */}
        <nav className="flex items-center gap-2">
          {NavItems.map(({ href, name }) => (
            <Link
              key={href}
              href={href}
              className={clsx(
                "rounded-full px-4 py-3 leading-none transition duration-300 hover:bg-gray-200/80",
                (currentPath === href || currentPath.startsWith(href + "/")) &&
                  "bg-white font-medium shadow-sm hover:bg-white",
              )}
            >
              {name}
            </Link>
          ))}
        </nav>
      </Container>
    </Section>
  );
}
