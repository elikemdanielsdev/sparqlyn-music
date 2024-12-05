import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import localFont from "next/font/local";
import { Header } from "@/components/ui";
import "@/app/frontend.css";
import Footer from "@/components/ui/footer";

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
    <html lang="en" className="scroll-smooth bg-amber-50">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${briceBold.variable} text-crimson-800 flex min-h-screen flex-col antialiased`}
      >
        <Header />
        <main className="flex-grow">
          {children}
          <SpeedInsights />
        </main>
        <Footer />
      </body>
    </html>
  );
}
