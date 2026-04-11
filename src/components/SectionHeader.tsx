"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
    label: string;
    title: string;
    subtitle?: string;
}

export function SectionHeader({ label, title, subtitle }: SectionHeaderProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16 space-y-4"
        >
            <span className="text-sm uppercase tracking-[0.3em] text-primary font-bold">
                {label}
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                {title}
            </h2>
            {subtitle && (
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                    {subtitle}
                </p>
            )}
        </motion.div>
    );
}
