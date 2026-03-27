import { MOCK_KB_ARTICLE } from "@/data/kb";
import { notFound } from "next/navigation";
import RenderArticle from "./RenderArticle";

import type { Metadata } from "next";

// Generate static routing paths for all mock KB articles during build time
export function generateStaticParams() {
  return MOCK_KB_ARTICLE.map((article) => ({
    category: article.category,
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = MOCK_KB_ARTICLE.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: article.seo.metaTitle,
    description: article.seo.metaDescription,
    keywords: [
      article.title,
      article.category,
      "NeedRDP Tutorial",
      "Windows Server Guide",
    ],
    openGraph: {
      title: article.seo.metaTitle,
      description: article.seo.metaDescription,
      images: [article.coverImage.src],
    },
    twitter: {
      title: article.seo.metaTitle,
      description: article.seo.metaDescription,
      images: [article.coverImage.src],
    },
  };
}

export default async function page({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { slug } = await params;

  // Find the exact article by slug
  const article = MOCK_KB_ARTICLE.find((a) => a.slug === slug);

  // If article doesn't exist, show 404
  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <RenderArticle article={article} />
    </main>
  );
}
