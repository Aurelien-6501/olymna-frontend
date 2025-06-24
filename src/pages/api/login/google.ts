// /pages/api/login/google.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { access_token } = req.query;

  if (typeof access_token === "string") {
    res.redirect(`/login-success?token=${access_token}`);
  } else {
    res.status(400).send("Token invalide ou manquant");
  }
}
