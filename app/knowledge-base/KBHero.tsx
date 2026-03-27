"use client";

import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { POPULAR_KB } from "@/data/kb";
import { Search } from "lucide-react";
import { Fragment, useState } from "react";

export default function KBHero() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e?: React.FormEvent<HTMLFormElement>) => {
    if (e) e.preventDefault();
    if (!query.trim()) return;
    router.push(`/knowledge-base/search?q=${encodeURIComponent(query.trim())}`);
  };

  const handlePopularSearch = (term: string) => {
    setQuery(term);
    router.push(`/knowledge-base/search?q=${encodeURIComponent(term)}`);
  };

  return (
    <Container>
      <PageHeader
        title="Knowledge Base"
        desc="Find detailed guides, tutorials, and answers to your questions."
        align="c"
        className="pb-8"
      />
      {/* Search Bar */}
      <div className="relative max-w-3xl mx-auto">
        <form
          onSubmit={handleSearch}
          className="relative flex items-center bg-secondary/50 rounded-full border border-primary/20 focus-within:ring-1 focus-within:ring-primary/50 focus-within:border-primary/50 transition-all"
        >
          <Search className="absolute left-4 size-5 text-muted-foreground" />
          <Input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for articles, guides, or keywords..."
            className="pl-12 pr-28 h-14 rounded-full text-base bg-transparent border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          <Button
            type="submit"
            className="absolute right-2 h-10 rounded-full px-6"
          >
            Search
          </Button>
        </form>
        <p className="text-sm text-muted-foreground mt-4 flex gap-2 flex-wrap">
          Popular searches:{" "}
          {POPULAR_KB.map((keyword, index) => (
            <Fragment key={keyword.id}>
              <span
                onClick={() => handlePopularSearch(keyword.label)}
                className="dark:text-primary hover:underline cursor-pointer font-semibold"
              >
                {keyword.label}
              </span>
              {index < POPULAR_KB.length - 1 && ", "}
            </Fragment>
          ))}
        </p>
      </div>
    </Container>
  );
}
