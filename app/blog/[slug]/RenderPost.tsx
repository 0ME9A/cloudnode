import { Container } from "@/components/ui/container";
import { CalendarDays, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn, formatDate } from "@/lib/utils";
import { TBlogMeta } from "@/type";
import BackBtn from "@/components/ui/back-btn";
import PostInfoCard from "./PostInfoCard";
import parse from "html-react-parser";
import Image from "next/image";

type TProps = {
  post: TBlogMeta | undefined;
  className?: string;
};

export default function RenderPost({ post, className }: TProps) {
  if (!post) {
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

            <div className="flex items-center gap-3 my-6">
              <Badge className="px-3 py-1 text-sm bg-primary/20 dark:text-primary hover:bg-primary/30 border-0">
                {post.category.label}
              </Badge>
              {post.editorial.featured && (
                <Badge variant="secondary" className="px-3 py-1 text-sm">
                  Featured
                </Badge>
              )}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.1]">
              {post.title}
            </h1>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {post.excerpt}
            </p>

            <div className="flex items-center gap-6 text-sm text-muted-foreground border-y border-border/40 py-6">
              <div className="flex items-center gap-3">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  width={40}
                  height={40}
                  className="rounded-full ring-2 ring-background border border-border"
                />
                <span className="font-medium text-foreground hidden sm:block">
                  {post.author.name}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4" />
                <time dateTime={post.publishedAt}>
                  {formatDate(post.publishedAt)}
                </time>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readingTimeMinutes} min read</span>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <Container className="pt-0!">
        <div>
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={post.coverImage.src}
              alt={post.coverImage.alt}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content (HTML Render) */}
            <div className="lg:col-span-8 prose prose-neutral dark:prose-invert max-w-none prose-headings:text-foreground prose-a:text-primary hover:prose-a:text-primary/80 prose-blockquote:border-l-primary prose-blockquote:bg-primary/5 prose-blockquote:rounded-r-lg prose-blockquote:py-2 prose-blockquote:pr-4 prose-blockquote:my-8 prose-pre:border prose-pre:bg-muted/50 [&_p]:text-foreground/75 [&_ul]:text-foreground/75">
              {parse(post.content)}
            </div>

            {/* Sidebar Sticky Column */}
            <PostInfoCard tags={post.tags} className="mt-8" />
          </div>
        </div>
      </Container>
    </article>
  );
}
