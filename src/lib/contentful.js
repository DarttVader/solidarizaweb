import { createClient } from "contentful";

export const clientContentful = createClient({
  space: env("CONTENTFUL_SPACE_ID"),
  accessToken: env("CONTENTFUL_ACCESS_TOKEN"),
});
