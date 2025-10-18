"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;
    const half = Math.floor(maxPagesToShow / 2);

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else if (currentPage <= half) {
      for (let i = 1; i <= maxPagesToShow - 1; i++) {
        pageNumbers.push(i);
      }
      pageNumbers.push("...");
      pageNumbers.push(totalPages);
    } else if (currentPage >= totalPages - half) {
      pageNumbers.push(1);
      pageNumbers.push("...");
      for (let i = totalPages - (maxPagesToShow - 2); i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      pageNumbers.push(1);
      pageNumbers.push("...");
      for (let i = currentPage - 1; i <= currentPage + 1; i++) {
        pageNumbers.push(i);
      }
      pageNumbers.push("...");
      pageNumbers.push(totalPages);
    }
    return pageNumbers;
  };

  if (totalPages <= 1) {
    return null;
  }

  const buttonVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.025,
        duration: 0.2,
        ease: "easeOut",
      },
    }),
  };

  return (
    <nav aria-label="Pagination Navigation" className="flex items-center gap-2 justify-center mt-4">
      <motion.button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className="flex items-center justify-center w-9 h-9 rounded-full bg-slate-700/50 hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 text-slate-300 hover:text-white hover:scale-105 active:scale-95"
        aria-label="Previous Page"
        whileTap={{ scale: 0.95 }}
      >
        <ChevronLeft size={18} />
      </motion.button>

      <AnimatePresence mode="popLayout">
        {getPageNumbers().map((page, idx) =>
          typeof page === "number" ? (
            <motion.button
              key={`${currentPage}-${page}`}
              onClick={() => onPageChange(page)}
              className={`flex items-center justify-center w-9 h-9 rounded-full transition-all duration-200 text-sm font-semibold hover:scale-105 active:scale-95 ${
                currentPage === page
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/30"
                  : "bg-slate-700/50 hover:bg-slate-700 text-slate-300"
              }`}
              aria-current={currentPage === page ? "page" : undefined}
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              custom={idx}
            >
              {page}
            </motion.button>
          ) : (
            <span key={`ellipsis-${idx}`} className="w-9 h-9 flex items-center justify-center text-slate-400 select-none">...</span>
          )
        )}
      </AnimatePresence>

      <motion.button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="flex items-center justify-center w-9 h-9 rounded-full bg-slate-700/50 hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 text-slate-300 hover:text-white hover:scale-105 active:scale-95"
        aria-label="Next Page"
        whileTap={{ scale: 0.95 }}
      >
        <ChevronRight size={18} />
      </motion.button>
    </nav>
  );
};

export default Pagination;
