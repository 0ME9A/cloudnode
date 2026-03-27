import { KBArticleCard } from "@/components/ui/kb-card";
import { Container } from "@/components/ui/container";
import { PageHeaderV2 } from "@/components/ui/header";
import { Separator } from "@/components/ui/separator";
import { MOCK_KB_ARTICLE } from "@/data/kb";
import { notFound } from "next/navigation";
import { CATEGORIES } from "@/data/kb";

// Generate static routes for all categories
export function generateStaticParams() {
  return CATEGORIES.map((category) => ({
    category: category.id,
  }));
}

export default async function page({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  // Find the category info
  const categoryData = CATEGORIES.find((c) => c.id === category);

  if (!categoryData) {
    notFound();
  }

  // Filter articles belonging to this category
  const categoryArticles = MOCK_KB_ARTICLE.filter(
    (article) => article.category === category,
  );

  return (
    <main>
      <PageHeaderV2
        label="Knowledge Base"
        title={categoryData.title}
        desc={categoryData.desc}
      />
      <Separator className="container mx-auto" />

      <Container>
        {categoryArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryArticles.map((article) => (
              <KBArticleCard key={article.id} article={article} className="h-full"/>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 text-muted-foreground border rounded-2xl bg-secondary/20">
            <p className="text-lg">No articles found in this category yet.</p>
          </div>
        )}
      </Container>
    </main>
  );
}
