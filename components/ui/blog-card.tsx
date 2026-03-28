import type { TBlogMeta } from "@/type";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";
import { cn, formatDate } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { Badge } from "./badge";
import Link from "next/link";
import Image from "next/image";

type TProps = {
  blog: TBlogMeta;
  thumbnailSpin?: boolean;
  className?: string;
};

/**
 * SectorCard SectorCardMini
 * --------------------
 * Used on Investment / Sectors pages.
 * Visual priority: image → title → description.
 * Hover interaction is subtle and brand-safe.
 */
export default function BlogCard({ blog, thumbnailSpin, className }: TProps) {
  return (
    <article className="group h-full">
      <Card
        className={cn(
          "group relative overflow-hidden rounded-lg aspect-square lg:aspect-auto",
          "transition-all duration-300",
          "shadow-2xl shadow-primary/10 hover:shadow-primary/20",
          "border-border/50 hover:border-primary/30 hover:shadow-[0_0_24px_#3466FF0D]",
          className,
        )}
      >
        <Link
          href={`/blog/${blog.slug}`}
          aria-label={`Read article: ${blog.title}`}
          className="absolute inset-0 z-10"
        />
        <div className="overflow-hidden rounded-lg size-full absolute top-0">
          <Image
            src={blog.coverImage.src}
            alt={blog.coverImage.alt}
            width={500}
            height={500}
            className={cn(
              "h-full w-full object-cover transition-transform duration-500 group-hover:scale-110",
              thumbnailSpin &&
                "animate-spin scale-180 animation-duration-200000 group-hover:scale-200",
            )}
          />
        </div>
        <span className="absolute right-6 top-6 border size-8 flex items-center justify-center rounded-full transition-transform group-hover:scale-110 bg-background">
          <ChevronRight size={18} />
        </span>
        <div className="absolute bottom-0 w-full p-6">
          <div className="bg-foreground/40 backdrop-blur-lg rounded-xl space-y-2 p-6 text-white">
            <CardHeader className="px-0">
              <CardTitle className="text-lg sm:text-xl">{blog.title}</CardTitle>

              <CardDescription className="line-clamp-3 text-muted dark:text-muted-foreground">
                {blog.excerpt}
              </CardDescription>
            </CardHeader>
            <CardFooter className="gap-2 text-lg px-0 mt-4">
              <Badge className="px-4 py-2">{blog.category.label}</Badge>
              <Badge
                variant={"ghost"}
                className="px-4 py-2 text-muted dark:text-muted-foreground"
              >
                {blog.updatedAt}
              </Badge>
            </CardFooter>
          </div>
        </div>
      </Card>
    </article>
  );
}

export function BlogCardRegular({ blog, thumbnailSpin, className }: TProps) {
  const formattedDate = formatDate(blog.publishedAt);

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
          href={`/blog/${blog.slug}`}
          aria-label={`Read article: ${blog.title}`}
          className="absolute inset-0 z-10"
        />

        <div className="p-6 pb-0">
          <div className="overflow-hidden rounded-lg">
            <Image
              src={blog.coverImage.src}
              alt={blog.coverImage.alt}
              width={500}
              height={500}
              className={cn(
                "w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105",
                thumbnailSpin &&
                  "animate-spin scale-125 animation-duration-[200000ms]",
              )}
            />
          </div>
        </div>

        <CardHeader className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <Badge className="px-3 py-1 text-xs">{blog.category.label}</Badge>
            {blog.stage?.label && (
              <Badge variant="secondary" className="px-3 py-1 text-xs">
                {blog.stage?.label}
              </Badge>
            )}
          </div>

          <CardTitle className="text-lg leading-snug group-hover:text-primary transition-colors flex items-start gap-2">
            {blog.title}
            <ChevronRight
              size={18}
              className="mt-1 opacity-0 group-hover:opacity-100 transition-opacity"
            />
          </CardTitle>

          <CardDescription className="line-clamp-3 text-sm leading-relaxed">
            {blog.excerpt}
          </CardDescription>
        </CardHeader>
        <div className="h-full" />
        <CardFooter className="text-xs text-muted-foreground flex items-center justify-between pt-0">
          <span>{formattedDate}</span>
          <span>{blog.readingTimeMinutes} min read</span>
        </CardFooter>
      </Card>
    </article>
  );
}

export function BlogCardMini({ blog, thumbnailSpin, className }: TProps) {
  return (
    <Card
      className={cn(
        "group relative overflow-hidden rounded-lg bg-transparent p-4",
        "transition-all duration-300",
        "shadow-2xl shadow-primary/10 hover:shadow-primary/20",
        className,
      )}
    >
      <Link
        href={`/blog/${blog.slug}`}
        aria-label={`Read article: ${blog.title}`}
        className="absolute inset-0 z-10"
      />
      <span className="absolute right-6 top-6 border size-8 flex items-center justify-center rounded-full transition-transform group-hover:scale-110 bg-background">
        <ChevronRight size={18} />
      </span>
      <div className="flex items-center">
        <div className="relative size-28 sm:size-32 overflow-hidden rounded-lg aspect-square shrink-0">
          <Image
            src={blog.coverImage.src}
            alt={blog.coverImage.alt}
            width={500}
            height={500}
            // className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-160 animate-spin scale-150 animation-duration-100000"
            className={cn(
              "h-full w-full object-cover transition-transform duration-500 group-hover:scale-110",
              thumbnailSpin &&
                "animate-spin scale-180 animation-duration-200000 group-hover:scale-200",
            )}
          />
        </div>
        <div className="w-full space-y-2">
          <CardHeader className="pl-4 sm:pl-6">
            <CardTitle className="sm:text-lg xl:text-xl line-clamp-2">
              {blog.title}
            </CardTitle>
          </CardHeader>
          <CardFooter className="flex flex-wrap justify-start gap-2 text-lg pl-4 sm:pl-6">
            <Badge className="sm:px-4 sm:py-2 bg-background-secondary text-primary">
              {blog.category.label}
            </Badge>
            <Badge variant={"ghost"} className="sm:px-4 sm:py-2">
              {blog.updatedAt}
            </Badge>
          </CardFooter>
        </div>
      </div>
    </Card>
  );
}
