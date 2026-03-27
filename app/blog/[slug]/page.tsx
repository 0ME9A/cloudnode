import { notFound } from "next/navigation";
import { mockBlog } from "@/data/blog";
import RelatedPost from "./RelatedPost";
import RenderPost from "./RenderPost";

import type { Metadata } from "next";

// Generate static routing paths for all mock blog posts during build time
export function generateStaticParams() {
  return mockBlog.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = mockBlog.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.seo.metaTitle,
    description: post.seo.metaDescription,
    keywords: [
      post.title,
      ...post.tags,
      post.category.label,
      "Windows RDP Blog",
    ],
    openGraph: {
      title: post.seo.metaTitle,
      description: post.seo.metaDescription,
      images: [post.coverImage.src],
    },
    twitter: {
      title: post.seo.metaTitle,
      description: post.seo.metaDescription,
      images: [post.coverImage.src],
    },
  };
}

export default async function page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const { slug } = await params;
  const post = mockBlog.find((p) => p.slug === slug);
  if (!post) {
    notFound();
  }

  // Find related posts (same category, exclude current post)
  const relatedPosts = mockBlog
    .filter((p) => p.category.id === post.category.id && p.id !== post.id)
    .slice(0, 3);

  return (
    <main className="min-h-screen">
      <RenderPost post={post} />

      {/* Related Posts Section */}
      <RelatedPost relatedPost={relatedPosts} />
    </main>
  );
}
