import { KBArticleCard } from "@/components/ui/kb-card";
import { Container } from "@/components/ui/container";
import { PageHeaderV2 } from "@/components/ui/header";
import { Separator } from "@/components/ui/separator";
import { MOCK_KB_ARTICLE } from "@/data/kb";

export default async function page({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const query = q?.toLowerCase().trim();

  // Filter articles based on the search query
  const searchResults = query
    ? MOCK_KB_ARTICLE.filter((article) => {
        return (
          article.title.toLowerCase().includes(query) ||
          article.excerpt.toLowerCase().includes(query) ||
          article.content.toLowerCase().includes(query) ||
          article.tags.some((tag) => tag.toLowerCase().includes(query)) ||
          article.category.toLowerCase().includes(query)
        );
      })
    : [];

  return (
    <main>
      <PageHeaderV2
        label="Search Results"
        title={query ? `Results for "${query}"` : "Search Knowledge Base"}
        desc={
          query
            ? `Found ${searchResults.length} article${searchResults.length === 1 ? "" : "s"} matching your request.`
            : "Enter a query to find guides and tutorials."
        }
      />
      <Separator className="container mx-auto" />

      <Container>
        {query ? (
          searchResults.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {searchResults.map((article) => (
                <KBArticleCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <div className="text-center py-24 text-muted-foreground border rounded-2xl bg-secondary/20">
              <p className="text-lg">
                No articles found for &quot;{query}&quot;. Try adjusting your
                search terms.
              </p>
            </div>
          )
        ) : (
          <div className="text-center py-24 text-muted-foreground border rounded-2xl bg-secondary/20">
            <p className="text-lg">Please enter a search query.</p>
          </div>
        )}
      </Container>
    </main>
  );
}
