import { fetchProduitById } from "@/lib/api/boutique";
import { notFound } from "next/navigation";
import Image from "next/image";
import { ClickCollectButton } from "@/components/ClickCollectButton";
export default async function ProduitDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const produit = await fetchProduitById((await params).id);

  if (!produit) {
    notFound();
    return null;
  }

  const photoUrl = produit.photo?.[0]?.url
    ? `${process.env.NEXT_PUBLIC_STRAPI_MEDIA_URL}${produit.photo[0].url}`
    : "/default-image.jpg";

  return (
    <main className="p-8 max-w-3xl mx-auto">
      <Image
        src={photoUrl}
        alt={produit.nom}
        width={600}
        height={400}
        className="w-full h-64 object-cover rounded mb-6"
      />
      <h1 className="text-2xl font-bold mb-2">{produit.nom}</h1>
      <p className="text-lg text-gray-700 mb-4">{produit.description}</p>
      <p className="text-xl font-semibold">{produit.prix} €</p>

      <ClickCollectButton produit={produit} />
    </main>
  );
}
