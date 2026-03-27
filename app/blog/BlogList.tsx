"use client";

import { BlogCardRegular } from "@/components/ui/blog-card";
import { mockBlog } from "@/data/blog";
import { motion } from "framer-motion";
import { useState } from "react";
import ThePagination from "@/components/ui/the-pagination";

const POSTS_PER_PAGE = 6;

export default function BlogList() {
  const [currentPage, setCurrentPage] = useState(1);

  // Total items and pages
  const totalItems = mockBlog.length;
  const totalPages = Math.ceil(totalItems / POSTS_PER_PAGE);

  // Get current posts
  const indexOfLastPost = currentPage * POSTS_PER_PAGE;
  const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
  const currentPosts = mockBlog.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Scroll to top of the list when changing pages
    window.scrollTo({ top: 300, behavior: "smooth" });
  };

  return (
    <div className="space-y-12 pb-24">
      {/* Blog Grid */}
      {currentPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-6">
          {currentPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <BlogCardRegular blog={post} className="h-full" />
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center py-24 text-muted-foreground border rounded-2xl bg-secondary/20">
          <p className="text-lg">No articles found.</p>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="pt-8 border-t border-border/40">
          <ThePagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
}
