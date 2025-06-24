import { fetchArticleById } from "@/lib/api/article";
import { notFound } from "next/navigation";
import { Article } from "@/types/article";

export default async function ArticleDetailPage(props: {
  params: { id: string };
}) {
  const { id } = await props.params;
  const article: Article | null = await fetchArticleById(id);

  if (!article) {
    notFound();
    return null;
  }

  const { titre, contenu } = article;

  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{titre}</h1>
      <p className="text-sm text-gray-500 mb-6">
        Publié le {new Date(article.date_publication).toLocaleDateString()}
      </p>
      <article className="prose prose-lg">
        <div dangerouslySetInnerHTML={{ __html: contenu }} />
      </article>
    </main>
  );
}
