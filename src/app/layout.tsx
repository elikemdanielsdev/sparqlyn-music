import { directus, directusApiUrl } from "@/schemas/directus";
import { readSingleton } from "@directus/sdk";

import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/components/elements/header";
import Footer from "@/components/elements/footer";
import "@/app/globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export async function generateMetadata(): Promise<Metadata> {
  const site = await directus.request(
    readSingleton("global", { fields: ["name", "description", "image"] }),
  );

  return {
    title: site.name,
    description: site.description,
    openGraph: {
      title: site.name,
      description: site.description,
      images: site.image ? [`${directusApiUrl}/assets/${site.image}`] : [],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer
          title="Let's Connect"
          subtitle="Book a 30-minute call with me to discuss your web project, and find out how I could be of help."
        />
      </body>
    </html>
  );
}
