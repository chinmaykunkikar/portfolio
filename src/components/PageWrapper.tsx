"use client";

import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

export const PageWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
    className={twMerge("tracking-tight", className)}
  >
    {children}
  </motion.div>
);
