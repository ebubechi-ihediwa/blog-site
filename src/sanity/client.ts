import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "bp5qvz3s",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});