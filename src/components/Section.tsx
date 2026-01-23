"use client";

import { motion } from "framer-motion";

export default function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="py-20 space-y-8"
    >
      <h2 className="text-2xl font-semibold">{title}</h2>
      {children}
    </motion.section>
  );
}
