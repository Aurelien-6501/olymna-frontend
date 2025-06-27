import { fetchArticleById } from "@/lib/api/article";
import { notFound } from "next/navigation";
import Image from "next/image";

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const article = await fetchArticleById(id);

  if (!article) {
    notFound();
    return null;
  }

  const { titre, contenu } = article;

  const photoUrl = article.photo?.[0]?.url
    ? `${process.env.NEXT_PUBLIC_STRAPI_MEDIA_URL}${article.photo[0].url}`
    : "/default-image.jpg";

  return (
    <main className="p-8 max-w-3xl mx-auto">
      <Image
        src={photoUrl}
        alt={article.titre || "Image de l'article"}
        width={600}
        height={400}
        className="w-full h-64 object-cover rounded mb-6"
      />
      <h1 className="text-3xl font-bold mb-4">{titre}</h1>
      <p className="text-sm text-gray-500 mb-6">
        Publié le {new Date(article.date_publication).toLocaleDateString()}
      </p>
      <article className="prose prose-lg whitespace-pre-line">
        <div dangerouslySetInnerHTML={{ __html: contenu }} />
      </article>
    </main>
  );
}
