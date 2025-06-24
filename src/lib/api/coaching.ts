import { fetchFromStrapi } from "./http";

export async function fetchCoachings() {
  return fetchFromStrapi("coachings?populate=coach");
}

export async function fetchCoachingById(documentId: string) {
  const res = await fetchFromStrapi(
    `coachings?populate[coach]=true&populate[reservations][populate][user]=true&filters[documentId][$eq]=${documentId}`
  );

  return res?.[0] ?? null;
}
