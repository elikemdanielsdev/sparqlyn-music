import Hero from "../ui/hero";
import Link from "next/link";

const heroData = {
  title: "Hello",
  subtitle: "World",
};

export default function HeroBlock() {
  return (
    <>
      <Hero title={heroData.title} subtitle={heroData.subtitle} />
      <header>
        <Link href="/">Google Inc</Link>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </nav>
        <button>CTA now!</button>
      </header>
    </>
  );
}
