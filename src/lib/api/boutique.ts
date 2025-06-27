import { fetchFromStrapi } from "./http";

export async function fetchBoutique() {
  return fetchFromStrapi("produits?populate=photo");
}

export async function fetchProduitById(documentId: string) {
  const res = await fetchFromStrapi(
    `produits?populate=photo&filters[documentId][$eq]=${documentId}`
  );
  return res?.[0] ?? null;
}
