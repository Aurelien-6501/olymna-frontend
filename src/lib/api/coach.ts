import { fetchFromStrapi } from "./http";
import { Coach } from "@/types/coach";

export async function fetchCoachs(): Promise<Coach[]> {
  return fetchFromStrapi("coaches?populate=photo");
}

export async function fetchCoachByDocumentId(
  documentId: string
): Promise<Coach | null> {
  const data = await fetchFromStrapi(
    `coaches?populate=photo&filters[documentId][$eq]=${documentId}`
  );
  return data?.[0] ?? null;
}
