import { BlogCardRegular } from "@/components/ui/blog-card";
import { Separator } from "@/components/ui/separator";
import { Container } from "@/components/ui/container";
import { TBlogMeta } from "@/type";
import { cn } from "@/lib/utils";

type TProps = {
  relatedPost: TBlogMeta[];
  className?: string;
};

export default function RelatedPost({ relatedPost, className }: TProps) {
  if (relatedPost.length > 0)
    return (
      <Container className={cn(className)}>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2 text-foreground">
              Related Articles
            </h2>
            <p className="text-muted-foreground w-full max-w-2xl">
              Explore more insights and guides from the same topic.
            </p>
          </div>
        </div>
        <Separator />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-6">
          {relatedPost.map((relatedPost) => (
            <BlogCardRegular key={relatedPost.id} blog={relatedPost} />
          ))}
        </div>
      </Container>
    );

  return null;
}
