import { fetchArticles } from "@/lib/api/article";
import { Article } from "@/types/article";
import Link from "next/link";

export default async function BlogPage() {
  const articles = await fetchArticles();

  if (!articles || articles.length === 0) {
    return (
      <p className="p-4 text-center">
        Aucun article disponible pour le moment.
      </p>
    );
  }

  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Notre blog</h1>

      <ul className="grid gap-6 md:grid-cols-2">
        {articles.map((item: Article) => {
          const { id, titre, documentId } = item;
          return (
            <li
              key={id}
              className="border rounded-md p-4 hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold mb-2">{titre}</h2>
              <Link
                href={`/blog/${documentId}`}
                className="text-sm text-blue-600 underline"
              >
                Lire l&apos;article →
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
