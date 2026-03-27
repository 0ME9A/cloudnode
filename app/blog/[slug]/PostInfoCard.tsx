import { FiFacebook, FiLinkedin, FiX } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Share2 } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

type TProps = {
  tags: string[];
  className?: string;
};

export default function PostInfoCard({ tags, className }: TProps) {
  return (
    <div className={cn("lg:col-span-4", className)}>
      <div className="sticky top-32 bg-primary/5 border rounded-2xl p-6">
        <h4 className="font-semibold mb-4 flex items-center gap-2">
          <Share2 className="h-4 w-4" /> Share this article
        </h4>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full hover:bg-blue-50 hover:text-blue-600 hover:border-blue-600 transition-colors"
          >
            <FiFacebook className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full hover:bg-sky-50 hover:text-sky-500 hover:border-sky-500 transition-colors"
          >
            <FiX className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-600 transition-colors"
          >
            <FiLinkedin className="h-4 w-4" />
          </Button>
        </div>

        {tags.length > 0 && (
          <div className="mt-8 pt-8 border-t border-border/40">
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">
              Topics
            </h4>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="px-3 py-1 font-normal"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        )}

        <div className="mt-8 pt-6 border-t border-border/40">
          <p className="text-sm text-muted-foreground mb-4">
            Ready to upgrade your infrastructure?
          </p>
          <Button className="w-full shadow-lg asChild">
            <Link href="/pricing">View Server Plans</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
