import { fetchCoachs } from "@/lib/api/coach";
import { Coach } from "@/types/coach";
import Image from "next/image";

export default async function CoachPage() {
  const coachs = await fetchCoachs();
  if (!coachs || coachs.length === 0) {
    return (
      <main className="p-8 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Nos Coachs</h1>
        <p>Aucun coach trouvé.</p>
      </main>
    );
  }

  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Nos Coachs</h1>
      <ul className="grid gap-6 md:grid-cols-2">
        {coachs.map((coach: Coach) => {
          const photoUrl = coach.photo?.formats?.medium?.url
            ? `${process.env.NEXT_PUBLIC_STRAPI_MEDIA_URL}${coach.photo.formats.medium.url}`
            : `${process.env.NEXT_PUBLIC_STRAPI_MEDIA_URL}${coach.photo?.url}`;
          return (
            <li key={coach.id} className="border rounded-md p-4 shadow-sm">
              <Image
                src={photoUrl}
                alt={`${coach.prenom} ${coach.nom}`}
                width={400}
                height={192}
                className="w-full h-48 object-cover rounded mb-4"
              />

              <h2 className="text-xl font-semibold">
                {coach.prenom} {coach.nom}
              </h2>
              <p className="text-sm text-gray-600 mb-1">
                Spécialité : {coach.specialisation}
              </p>
              <p className="text-sm text-gray-700">{coach.bio}</p>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
