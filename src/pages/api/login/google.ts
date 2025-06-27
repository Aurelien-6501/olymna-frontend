// /pages/api/login/google.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const query = req.url?.split("?")[1];

  if (!query) {
    res.status(400).send("Missing query parameters");
    return;
  }

  try {
    const strapiRes = await fetch(
      `http://localhost:1337/api/auth/google/callback?${query}`
    );
    const data = await strapiRes.json();

    if (data?.jwt) {
      // Enregistre le JWT et l'utilisateur dans un cookie ou redirige vers le frontend
      res.redirect(`/?jwt=${data.jwt}`);
    } else {
      res.status(401).json({ error: "Authentication failed", data });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
}
