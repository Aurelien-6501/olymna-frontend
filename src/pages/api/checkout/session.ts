// pages/api/checkout/session.ts
import type { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-05-28.basil",
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") return res.status(405).end();

  const { produit } = req.body;

  console.log("req.body ➜", req.body);

  if (!produit) return res.status(400).json({ error: "Produit manquant" });

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: produit.nom,
              description: produit.description,
            },
            unit_amount: produit.prix * 100, // en centimes
          },
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/boutique/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/boutique/cancel`,
    });

    res.status(200).json({ url: session.url });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error("Erreur inconnue", error);
    }

    res.status(500).json({ error: "Erreur lors de la création de la session" });
  }
}
