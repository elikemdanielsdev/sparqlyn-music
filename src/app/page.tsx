import clsx from "clsx";
import { Container, Heading, Section } from "@/components/ui";
import { SparqlynSVG } from "@/assets/svg";
import { Nominations, Awards } from "@/data";
import Marquee from "react-fast-marquee";
import Image from "next/image";

// Import images
import sparqlynImage from "@/assets/images/sparqlyn-image.png";
import ahmmed1 from "@/assets/images/ahmmed-1.jpg";
import ahmmed2 from "@/assets/images/ahmmed-2.jpg";
import ahmmed3 from "@/assets/images/ahmmed-3.jpg";
import ahmmed4 from "@/assets/images/ahmmed-4.jpg";
import ahmmed5 from "@/assets/images/ahmmed-5.jpg";
import ahmmed6 from "@/assets/images/ahmmed-6.jpg";
import ahmmed7 from "@/assets/images/ahmmed-7.jpg";
import ahmmed8 from "@/assets/images/ahmmed-8.jpg";
import Link from "next/link";

const imageFilenames = [
  ahmmed1,
  ahmmed2,
  ahmmed3,
  ahmmed4,
  ahmmed5,
  ahmmed6,
  ahmmed7,
  ahmmed8,
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Section
        id="intro"
        className="to-crimson-500 overflow-hidden bg-gradient-to-tr from-black pb-0"
      >
        <Container className="relative grid place-items-center">
          <Image
            src={sparqlynImage}
            alt="Sparqlyn"
            width={1000}
            height={1000}
            className="z-10 -mb-4"
          />
          <SparqlynSVG className="absolute bottom-0" />
        </Container>
      </Section>
      {/* Bio Section */}
      <Section id="bio" className="bg-amber-50 py-28">
        <Container
          width="830"
          className="grid place-items-center gap-10 text-center uppercase"
        >
          <span className="font-brice-bold max-w-screen-240">
            Sparqlyn is known in real life as
          </span>
          <Heading
            tag="h1"
            size="display-1"
            className="from-crimson-800 to-crimson-500 bg-gradient-to-tr bg-clip-text leading-[1] text-transparent"
          >
            Ahmmed{" "}
            <span className="text-display-span inline-block">
              Kanneh Larweh
            </span>
          </Heading>
        </Container>
        <Marquee pauseOnHover={true} autoFill={true} className="my-12">
          {imageFilenames.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`Image ${index + 1}`}
              width={480}
              height={560}
              className="mx-1 aspect-[480/560] object-cover grayscale transition duration-300 ease-in-out hover:grayscale-0"
            />
          ))}
        </Marquee>
        <Container width="700" className="text-center text-2xl leading-[1.7]">
          <p>
            He is an Afrobeats singer, songwriter, and performer from Ghana.
            Born on February 2, 1983, in the Greater Accra Region, Sparqlyn
            showed a love for music from a young age. In fact, he performed
            beautifully at his school's speech and prize-giving day when he was
            in class 4. However, he put his musical aspirations on hold until
            after he completed his junior secondary school education at
            Asanteman Secondary School in the Ashanti Region in 2001.
          </p>

          {/* Drawer Component */}
          <div className="drawer drawer-end z-50">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label
                htmlFor="my-drawer-4"
                className="bg-crimson-500 hover:bg-crimson-800 btn drawer-button mt-12 h-auto rounded-full border-none px-8 py-6 text-[16px] text-amber-50"
              >
                Read More
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer-4"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <div className="text-crimson-800 menu min-h-full w-[560px] bg-amber-50 p-10 text-left text-xl">
                {/* Sidebar content here */}
                <p>Some content goes here</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Video Section */}
      <Section
        id="videos"
        className="to-crimson-500 relative min-h-[80vh] bg-gradient-to-tr from-black"
      >
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute bottom-0 left-0 right-0 top-0 h-full w-full object-cover"
        >
          <source src="/videos/sparqlyn-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="to-crimson-500/80 absolute inset-0 z-10 bg-gradient-to-tr from-black/80"></div>

        <Container
          width="830"
          className="relative z-20 grid place-items-center gap-10"
        >
          <Heading
            tag="h2"
            size="display-1"
            className="text-center uppercase leading-[1] text-amber-50"
          >
            Music Videos on YouTube
          </Heading>
          <Link
            href="http://www.youtube.com/@iamsparqlyn"
            target="_blank"
            className="bg-crimson-500 hover:bg-crimson-800 btn drawer-button mt-2 h-auto rounded-full border-none px-8 py-6 text-[16px] text-amber-50"
          >
            Watch Now
          </Link>
        </Container>
      </Section>

      {/* Nominations Section */}
      <Section id="nominations" className="bg-amber-50 py-28">
        <Container
          width="830"
          className="grid place-items-center gap-10 text-center uppercase"
        >
          <Heading
            tag="h1"
            size="display-1"
            className="from-crimson-800 to-crimson-500 bg-gradient-to-tr bg-clip-text leading-[1] text-transparent"
          >
            Nominations
          </Heading>
        </Container>
        <Container className="mt-20">
          <ul>
            {Nominations.map((nomination, index) => (
              <li key={nomination.id}>
                <div
                  className={clsx(
                    "flex items-center justify-between py-10 text-2xl",
                    index === 0
                      ? "border-y-crimson-800 border-y"
                      : "border-b-crimson-800 border-b",
                  )}
                >
                  <h3 className="text-2xl">{nomination.name}</h3>
                  <div className="flex items-center gap-[100px]">
                    <p>{nomination.type}</p>
                    <time>{nomination.year}</time>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Awards Section */}
      <Section id="awards" className="bg-amber-50 py-28">
        <Container
          width="830"
          className="grid place-items-center gap-10 text-center uppercase"
        >
          <Heading
            tag="h1"
            size="display-1"
            className="from-crimson-800 to-crimson-500 bg-gradient-to-tr bg-clip-text leading-[1] text-transparent"
          >
            Awards
          </Heading>
        </Container>
        <Container className="mt-20">
          <ul>
            {Awards.map((award, index) => (
              <li key={award.id}>
                <div
                  className={clsx(
                    "flex items-center justify-between py-10 text-2xl",
                    index === 0
                      ? "border-y-crimson-800 border-y"
                      : "border-b-crimson-800 border-b",
                  )}
                >
                  <h3 className="text-2xl">{award.name}</h3>
                  <div className="flex items-center gap-[100px]">
                    <p>{award.type}</p>
                    <time>{award.year}</time>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    </>
  );
}
