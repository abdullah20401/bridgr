import sanityClient, { SanityClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = SanityClient({
  projectId: "",
  dataset: "production",
  apiVersion: "2021-11-16",
  useCdn: true,
  token: "",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
