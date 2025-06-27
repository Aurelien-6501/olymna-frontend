import { fetchFromStrapi } from "./http";

export async function fetchReservationsByUser(userIdentifier: string) {
  if (!userIdentifier) return [];

  const isEmail = userIdentifier.includes("@");

  const query = new URLSearchParams({
    "populate[coaching]": "true",
    "populate[user]": "true",
    [`filters[user][${isEmail ? "email" : "id"}][$eq]`]: userIdentifier,
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
