"use client";

import type { TFaqCategory } from "@/type";
import { Container } from "./ui/container";
import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import LinkButton from "./ui/link-btn";

type Props = {
  data: TFaqCategory[];
  limit?: number;
  className?: string;
  showFilter?: boolean;
  showViewAll?: boolean;
};

/**
 * FaqSection
 * --------------------------------
 * - Category tabs
 * - Accessible accordion
 */
export default function FaqSection({
  data,
  className,
  limit,
  showFilter,
  showViewAll,
}: Props) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [activeItem, setActiveItem] = useState<string | null>(null);

  /**
   * Compute filtered FAQ list
   */
  const filteredFaqs = useMemo(() => {
    let faqs =
      activeCategory === "all"
        ? data.flatMap((section) => section.faqs)
        : (data.find((section) => section.id === activeCategory)?.faqs ?? []);

    if (limit) {
      return faqs.slice(0, limit);
    }

    return faqs;
  }, [activeCategory, data, limit]);

  return (
    <Container className={cn("space-y-8", className)}>
      {/* Category Tabs */}
      {showFilter && (
        <div className="flex flex-wrap justify-center gap-3">
          {/* ALL BUTTON */}
          <button
            onClick={() => setActiveCategory("all")}
            className={cn(
              "px-2 sm:px-4 sm:py-2 rounded-full text-sm border transition-all duration-200",
              activeCategory === "all"
                ? "bg-primary/20 border-primary"
                : "bg-background hover:bg-primary/5",
            )}
          >
            All
          </button>

          {data.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveCategory(section.id)}
              className={cn(
                "px-2 sm:px-4 sm:py-2 rounded-full text-sm border transition-all duration-200",
                activeCategory === section.id
                  ? "bg-primary/20 border-primary"
                  : "bg-background hover:bg-primary/5",
              )}
            >
              {section.category}
            </button>
          ))}
        </div>
      )}
      {/* Accordion */}
      <Accordion
        type="single"
        collapsible
        value={activeItem ?? undefined}
        onValueChange={(val) => setActiveItem(val)}
        className="space-y-4"
      >
        {filteredFaqs.map((faq, i) => (
          <AccordionItem
            key={faq.id}
            value={faq.id}
            className={cn(
              "px-6 border last:border",
              "shadow-2xl shadow-primary/10 hover:shadow-primary/20 rounded-lg",
              faq.id === activeItem
                ? "bg-linear-to-bl from-primary/5"
                : "bg-background",
            )}
          >
            <AccordionTrigger className="text-left text-base md:text-lg font-medium py-6">
              <span
                className={cn(
                  "text-sm mt-1 inline-block duration-300",
                  faq.id === activeItem
                    ? "text-primary"
                    : "text-muted-foreground",
                )}
              >
                {String(i + 1).padStart(2, "0")}
              </span>{" "}
              <span className="mr-auto">{faq.question}</span>
            </AccordionTrigger>

            <AccordionContent className="text-muted-foreground text-sm pb-4 pl-8">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      {showViewAll && (
        <div className="flex items-center justify-center gap-4">
          <LinkButton
            link={{
              href: "/faqs",
              label: "View All Faqs",
              highlight: true,
              icon: {
                showIcon: true,
              },
            }}
          />
        </div>
      )}
    </Container>
  );
}
