import { fetchFromStrapi } from "./http";

export async function fetchProduits() {
  return fetchFromStrapi("produits?populate=photo");
}
