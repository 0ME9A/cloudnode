import { Container } from "@/components/ui/container";
import { CalendarDays, Clock } from "lucide-react";
import { cn, formatDate } from "@/lib/utils";
import { TKBArticle } from "@/type";
import BackBtn from "@/components/ui/back-btn";
import parse from "html-react-parser";
import Image from "next/image";

type TProps = {
  article: TKBArticle | undefined;
  className?: string;
};

export default function RenderArticle({ article, className }: TProps) {
  if (!article) {
    return (
      <p className="p-10 text-center text-lg font-semibold">Post not found!</p>
    );
  }

  return (
    <article className={cn(className)}>
      <div className="relative overflow-hidden mt-16">
        <div className="absolute inset-0 -z-10" />
        <Container as={"section"} className="pb-8!">
          <div>
            <BackBtn />

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight my-6 leading-[1.1]">
              {article.title}
            </h1>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {article.excerpt}
            </p>

            <div className="flex items-center gap-6 text-sm text-muted-foreground border-y border-border/40 py-6">
              <div className="flex items-center gap-3">
                <Image
                  src={article.author.avatar}
                  alt={article.author.name}
                  width={40}
                  height={40}
                  className="rounded-full ring-2 ring-background border border-border"
                />
                <span className="font-medium text-foreground hidden sm:block">
                  {article.author.name}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4" />
                <time dateTime={article.publishedAt}>
                  {formatDate(article.publishedAt)}
                </time>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{article.readingTimeMinutes} min read</span>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <Container className="pt-0!">
        <div>
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={article.coverImage.src}
              alt={article.coverImage.alt}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content (HTML Render) */}
            <div className="lg:col-span-8 prose prose-neutral dark:prose-invert max-w-none prose-headings:text-foreground prose-a:text-primary hover:prose-a:text-primary/80 prose-blockquote:border-l-primary prose-blockquote:bg-primary/5 prose-blockquote:rounded-r-lg prose-blockquote:py-2 prose-blockquote:pr-4 prose-blockquote:my-8 prose-pre:border prose-pre:bg-muted/50 [&_p]:text-foreground/75 [&_ul]:text-foreground/75">
              {parse(article.content)}
            </div>
          </div>
        </div>
      </Container>
    </article>
  );
}
