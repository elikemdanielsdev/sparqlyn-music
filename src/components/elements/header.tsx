"use client";

import { Section, Container } from "@/components/elements";
import Link from "next/link";
import clsx from "clsx";
import navItems from "@/utils/nav";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const currentPath = usePathname();
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
        timeZone: "Africa/Accra",
      };
      const formatter = new Intl.DateTimeFormat("en-US", options as any);
      const formattedTime = formatter.format(now);
      setCurrentTime(formattedTime);
    };

    updateTime(); // Initial update
    const interval = setInterval(updateTime, 1000); // Update every second

    return () => {
      clearInterval(interval); // Clean up the interval on component unmount
    };
  }, []);

  return (
    <Section tag="header" className="py-6">
      <Container width="1200" className="grid grid-cols-3 items-center gap-6">
        <Link href="/"> Elikem Daniels </Link>
        {/* Navigation */}
        <nav className="mx-auto flex items-center gap-2 rounded-full bg-gray-100 p-2">
          {navItems.map(({ href, name }) => (
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
        {/* Current time in Accra */}
        <time className="ml-auto">Accra : {currentTime}</time>
      </Container>
    </Section>
  );
}
