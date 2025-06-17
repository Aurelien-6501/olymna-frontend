import { fetchFromStrapi } from "./http";

export async function fetchArticles() {
  return fetchFromStrapi("articles");
}
