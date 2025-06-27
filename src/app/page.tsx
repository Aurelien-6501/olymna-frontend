import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen px-4 py-12 bg-white text-center flex flex-col items-center gap-12">
      <section className="max-w-4xl">
        <h1 className="text-5xl font-extrabold mb-4 text-gray-900">
          Bienvenue chez Olymna
        </h1>
        <p className="text-xl text-gray-600">
          Pilates, yoga, bien-être : tout ce qu’il vous faut pour prendre soin
          de vous.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full">
        <Link
          href="/coaching"
          className="p-6 rounded-lg shadow-md hover:shadow-lg border border-gray-200 hover:bg-gray-50 transition text-left"
        >
          <h2 className="text-2xl font-semibold mb-2">👟 Nos cours</h2>
          <p className="text-gray-600 mb-4">
            Découvrez nos séances encadrées pour vous remettre en forme à votre
            rythme.
          </p>
          <span className="text-sm font-medium text-blue-600">
            En savoir plus →
          </span>
        </Link>

        <Link
          href="/boutique"
          className="p-6 rounded-lg shadow-md hover:shadow-lg border border-gray-200 hover:bg-gray-50 transition text-left"
        >
          <h2 className="text-2xl font-semibold mb-2">🛍️ La boutique</h2>
          <p className="text-gray-600 mb-4">
            Produits bien-être, accessoires et compléments pour prolonger
            l’expérience.
          </p>
          <span className="text-sm font-medium text-blue-600">
            Voir les produits →
          </span>
        </Link>

        <Link
          href="/blog"
          className="p-6 rounded-lg shadow-md hover:shadow-lg border border-gray-200 hover:bg-gray-50 transition text-left"
        >
          <h2 className="text-2xl font-semibold mb-2">📰 Le blog</h2>
          <p className="text-gray-600 mb-4">
            Conseils, inspirations et interviews pour nourrir votre esprit et
            votre corps.
          </p>
          <span className="text-sm font-medium text-blue-600">
            Lire les articles →
          </span>
        </Link>
      </section>
    </main>
  );
}
