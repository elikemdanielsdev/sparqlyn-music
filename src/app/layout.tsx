import type { Metadata } from "next";
import localFont from "next/font/local";
import { Header, Footer } from "@/components/ui";
import "@/app/frontend.css";

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

const briceBold = localFont({
  src: [
    {
      path: "./fonts/Brice-Bold.woff",
      weight: "900",
    },
    {
      path: "./fonts/Brice-Bold.woff2",
      weight: "900",
    },
    {
      path: "./fonts/Brice-Bold.eot",
      weight: "900",
    },
  ],
  variable: "--font-brice-bold",
  weight: "900",
});

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Sparqlyn",
    description:
      "Sparqlyn is a music platform that allows you to create and share your own music.",
    openGraph: {
      title: "Sparqlyn",
      description:
        "Sparqlyn is a music platform that allows you to create and share your own music.",
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
        className={`${geistSans.variable} ${geistMono.variable} ${briceBold.variable} antialiased`}
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
