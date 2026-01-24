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
    <section className="py-10 md:py-12">
      <h2 className="mb-5 text-2xl md:text-3xl font-semibold tracking-tight">
        {title}
      </h2>
      {children}
    </section>
  );
}
