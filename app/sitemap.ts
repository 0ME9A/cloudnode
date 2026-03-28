import { CATEGORIES, MOCK_KB_ARTICLE } from "@/data/kb";
import { mockBlog } from "@/data/blog";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.BASE_URL || "https://cloudnode.vercel.app";

  // The main routes
  const mainRoutes = [
    "",
    "/about",
    "/pricing",
    "/blog",
    "/contact",
    "/affiliates",
    "/knowledge-base",
    "/submit-ticket",
    "/faqs",
    "/login",
    "/register",
    "/privacy-policy",
    "/terms-conditions",
    "/refund-policy",
    "/aup",
    "/sla",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // Blog posts
  const blogRoutes = mockBlog.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt).toISOString().split("T")[0],
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // KB Categories
  const kbCategoryRoutes = CATEGORIES.map((category) => ({
    url: `${baseUrl}${category.route}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // KB Articles
  const kbArticleRoutes = MOCK_KB_ARTICLE.map((article) => ({
    url: `${baseUrl}/knowledge-base/${article.category}/${article.slug}`,
    lastModified: new Date(article.updatedAt).toISOString().split("T")[0],
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    ...mainRoutes,
    ...blogRoutes,
    ...kbCategoryRoutes,
    ...kbArticleRoutes,
  ];
}
