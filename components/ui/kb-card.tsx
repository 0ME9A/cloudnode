import type { TKBCatogary } from "@/type";
import type { TKBArticle } from "@/type";
import { cn, formatDate } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { Separator } from "./separator";
import { CATEGORIES } from "@/data/kb";
import { Badge } from "./badge";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";
import Image from "next/image";
import Link from "next/link";

export type TResearchCardProps = TKBCatogary & {
  className?: string;
};

export function KBCategoary({
  title,
  desc,
  route,
  coverImage,
  articleCount,
  className,
}: TResearchCardProps) {
  return (
    <Card
      className={cn(
        "group gap-0 group relative bg-background/40 backdrop-blur-sm hover:bg-primary/5",
        "shadow-2xl shadow-primary/10 hover:shadow-primary/20",
        "transition-all duration-300 hover:-translate-y-2",
        "border border-border/50 hover:border-primary/40",
        className,
      )}
    >
      <div className="px-6 pb-6">
        <div className="overflow-hidden rounded-md">
          <Image
            src={coverImage.src}
            alt={coverImage.alt}
            width={500}
            height={500}
            className="size-full object-cover aspect-video group-hover:scale-105 duration-300"
          />
        </div>
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{desc}</CardDescription>
      </CardHeader>
      <Separator className="mt-6" />
      <CardFooter className="pt-4 flex justify-between">
        <p>
          <strong>{articleCount}</strong> Articles
        </p>
        <Link
          href={route}
          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
        >
          View All
          <ChevronRight size={16} />
        </Link>
      </CardFooter>
    </Card>
  );
}

type TProps = {
  article: TKBArticle;
  className?: string;
};

export function KBArticleCard({ article, className }: TProps) {
  const formattedDate = formatDate(article.publishedAt);
  const categoryData = CATEGORIES.find((c) => c.id === article.category);

  return (
    <article className="group h-full">
      <Card
        className={cn(
          "relative overflow-hidden rounded-lg pt-0",
          "transition-all duration-300",
          "hover:-translate-y-1",
          "border-border/50 hover:border-primary/30 shadow-xl hover:shadow-primary/5",
          className,
        )}
      >
        <Link
          href={`/knowledge-base/${article.category}/${article.slug}`}
          aria-label={`Read article: ${article.title}`}
          className="absolute inset-0 z-10"
        />
        <div className="p-6 pb-0">
          <div className="overflow-hidden rounded-md">
            <Image
              src={article.coverImage.src}
              alt={article.coverImage.alt}
              width={500}
              height={500}
              className="size-full object-cover aspect-video group-hover:scale-105 duration-300"
            />
          </div>
        </div>
        <CardHeader className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant={"outline"}>
              {categoryData?.title || article.category}
            </Badge>
          </div>

          <CardTitle className="text-lg leading-snug group-hover:text-primary transition-colors flex items-start justify-between gap-4">
            {article.title}
            <ChevronRight
              size={18}
              className="mt-1 opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
            />
          </CardTitle>

          <CardDescription className="line-clamp-3 text-sm leading-relaxed">
            {article.excerpt}
          </CardDescription>
        </CardHeader>

        <div className="h-full" />

        <CardFooter className="text-xs text-muted-foreground flex items-center justify-between pt-0">
          <span>{formattedDate}</span>
          <span>{article.readingTimeMinutes} min read</span>
        </CardFooter>
      </Card>
    </article>
  );
}
