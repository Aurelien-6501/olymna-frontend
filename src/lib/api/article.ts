import { fetchFromStrapi } from "./http";

export async function fetchArticles() {
  return fetchFromStrapi("articles?populate=*");
}

export async function fetchArticleById(documentId: string) {
  const res = await fetchFromStrapi(
    `articles?populate=*&filters[documentId][$eq]=${documentId}`
  );

  return res?.[0] ?? null;
}
