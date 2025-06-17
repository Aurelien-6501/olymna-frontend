import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 p-8 text-center">
      <h1 className="text-4xl font-bold">Bienvenue chez Olymna</h1>
      <p className="text-lg max-w-xl text-gray-600">
        Pilates, yoga, bien-être : tout ce qu’il vous faut pour prendre soin de
        vous.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mt-6">
        <Link
          href="/coaching"
          className="px-6 py-3 bg-black text-white rounded hover:opacity-90"
        >
          Voir les coachings
        </Link>
        <Link
          href="/boutique"
          className="px-6 py-3 bg-black text-white rounded hover:opacity-90"
        >
          Accéder à la boutique
        </Link>
        <Link
          href="/blog"
          className="px-6 py-3 bg-black text-white rounded hover:opacity-90"
        >
          Lire le blog
        </Link>
        <Link
          href="/login"
          className="px-6 py-3 border border-black text-black rounded hover:bg-gray-100"
        >
          Connexion
        </Link>
      </div>
    </main>
  );
}
