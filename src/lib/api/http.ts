const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL;
const API_TOKEN = process.env.NEXT_PUBLIC_STRAPI_TOKEN;

if (!API_URL) {
  throw new Error("NEXT_PUBLIC_STRAPI_API_URL is not defined in .env.local");
}

export async function fetchFromStrapi(endpoint: string) {
  try {
    const res = await fetch(`${API_URL}/${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
        ...(API_TOKEN && { Authorization: `Bearer ${API_TOKEN}` }),
      },
      cache: "no-store",
    });

    if (!res.ok) {
      console.error(`Erreur ${res.status} lors de la requête vers ${endpoint}`);
      return null;
    }

    const data = await res.json();
    return data.data;
  } catch (err) {
    console.error(`Erreur fetch ${endpoint} :`, err);
    return null;
  }
}
