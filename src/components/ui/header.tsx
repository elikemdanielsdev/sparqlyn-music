"use client";

import clsx from "clsx";
import Link from "next/link";
import { Section, Container } from "@/components/ui";
import { NavItems } from "@/data";
import { Logo } from "@/assets/svg";
import { useEffect, useState } from "react";

export default function Header() {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <Section
      tag="header"
      className="border-crimson-800 fixed z-40 w-full border-b bg-amber-50 py-[16px]"
    >
      <Container
        width="1400"
        className="flex items-center justify-between gap-6"
      >
        <Link href="/">
          <Logo />
        </Link>
        {/* Navigation */}
        <nav className="flex items-center gap-2">
          {NavItems.map(({ href, name }) => (
            <Link
              key={href}
              href={href}
              className={clsx(
                "rounded-full px-4 py-3 leading-none transition duration-300 hover:bg-gray-200/80",
                activeSection === href.slice(1) &&
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
