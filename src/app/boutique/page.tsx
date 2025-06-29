import { fetchBoutique } from "@/lib/api/boutique";
import { Produit } from "@/types/produit";
import Image from "next/image";
import Link from "next/link";

export default async function BoutiquePage() {
  const produits = await fetchBoutique();

  return (
    <main className="p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Boutique Bien-être</h1>

      {produits.length === 0 ? (
        <p>Aucun produit disponible.</p>
      ) : (
        <ul className="grid gap-6 md:grid-cols-3">
          {produits.map((produit: Produit) => {
            const photoUrl = produit.photo?.[0]?.url
              ? `${process.env.NEXT_PUBLIC_STRAPI_MEDIA_URL}${produit.photo[0].url}`
              : "/default-image.jpg";
            return (
              <Link key={produit.id} href={`/boutique/${produit.documentId}`}>
                <li className="border rounded-md p-4 shadow-sm hover:shadow-lg transition cursor-pointer">
                  <Image
                    src={photoUrl}
                    alt={produit.nom}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover rounded mb-4"
                  />
                  <h2 className="text-lg font-semibold">{produit.nom}</h2>
                  <p className="text-sm text-gray-700">{produit.prix} €</p>
                </li>
              </Link>
            );
          })}
        </ul>
      )}
    </main>
  );
}
