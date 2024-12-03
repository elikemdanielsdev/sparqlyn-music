import { createDirectus, rest } from "@directus/sdk";
import type Global from "@/schemas/_global";
import type Home from "@/schemas/_home";
import type Article from "@/schemas/_articles";
import type Showcase from "@/schemas/_showcase";

// Schema for the Directus API
type Schema = {
  global: Global;
  home: Home;
  articles: Article[];
  showcase: Showcase[];
};

const directusApiUrl = process.env.DIRECTUS_API_ENDPOINT;

if (!directusApiUrl) {
  throw new Error("DIRECTUS_API_ENDPOINT is not set");
}

const directus = createDirectus<Schema>(directusApiUrl).with(rest());

export { directus, directusApiUrl };
