import { fetchCoachings } from "@/lib/api/coaching";
import { Coaching } from "@/types/strapi";
import Link from "next/link";

export default async function CoachingPage() {
  const coachings = await fetchCoachings();

  if (!coachings || coachings.length === 0) {
    return (
      <p className="p-4 text-center">
        Aucun coaching disponible pour le moment.
      </p>
    );
  }

  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Nos Coachings</h1>

      <ul className="grid gap-6 md:grid-cols-2">
        {coachings.map((item: Coaching) => {
          if (!item) return null;

          const { id, titre, date_heure, coach, documentId } = item;
          const coachInfo = coach;

          return (
            <li
              key={id}
              className="border rounded-md p-4 hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold mb-2">{titre}</h2>
              <p className="text-sm text-gray-500 mb-1">
                {new Date(date_heure).toLocaleString()}
              </p>
              {coachInfo && (
                <p className="text-sm text-gray-700 mb-3">
                  Avec {coachInfo.prenom} {coachInfo.nom}
                </p>
              )}
              <Link
                href={`/coaching/${documentId}`}
                className="text-sm text-blue-600 underline"
              >
                Voir le détail →
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
