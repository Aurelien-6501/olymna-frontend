// /pages/api/me.ts
/*import type { NextApiRequest, NextApiResponse } from "next";
import cookie from "cookie";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const cookies = cookie.parse(req.headers.cookie || "");
  const token = cookies.jwt;

  if (!token) {
    return res.status(401).json({ error: "Not authenticated" });
  }

  try {
    const strapiRes = await fetch("http://localhost:1337/api/users/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!strapiRes.ok) {
      return res.status(401).json({ error: "Invalid token" });
    }

    const user = await strapiRes.json();
    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
}
*/
