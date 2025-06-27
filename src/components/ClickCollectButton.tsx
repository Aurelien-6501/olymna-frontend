// src/components/ClickCollectButton.tsx
"use client";

import { Produit } from "@/types/produit";

export function ClickCollectButton({ produit }: { produit: Produit }) {
  const handleClick = async () => {
    const res = await fetch("/api/checkout/session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        produit: {
          nom: produit.nom,
          description: produit.description,
          prix: produit.prix,
          photoUrl: produit.photo?.[0]?.url
            ? `${process.env.NEXT_PUBLIC_STRAPI_MEDIA_URL}${produit.photo[0].url}`
            : "",
        },
      }),
    });

    const data = await res.json();
    if (data.url) {
      window.location.href = data.url;
    }
  };

  return (
    <button
      onClick={handleClick}
      className="mt-4 px-4 py-2 bg-black text-white rounded hover:opacity-90"
    >
      Réserver en Click & Collect
    </button>
  );
}
