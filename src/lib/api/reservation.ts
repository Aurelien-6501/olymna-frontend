import { fetchFromStrapi } from "./http";

export async function fetchReservationsByUser(userId: string) {
  if (!userId) return [];

  const query = new URLSearchParams({
    "populate[coaching]": "true",
    "populate[user]": "true",
    "filters[user][id][$eq]": userId,
  });

  const res = await fetchFromStrapi(`reservations?${query.toString()}`);
  console.log("fetchReservationsByUser res", res);

  if (Array.isArray(res)) {
    return res;
  }

  if (res?.data && Array.isArray(res.data)) {
    return res.data;
  }

  return [];
}
