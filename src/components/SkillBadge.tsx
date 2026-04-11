"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface SkillBadgeProps {
    name: string;
    icon: LucideIcon;
    level: "Advanced" | "Intermediate" | "Beginner";
    index: number;
}

export function SkillBadge({ name, icon: Icon, level, index }: SkillBadgeProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            className="flex items-center justify-between p-4 glass rounded-xl group hover:border-primary/50 transition-all duration-300"
        >
            <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-colors">
                    <Icon size={20} />
                </div>
                <div>
                    <h4 className="text-white font-semibold">{name}</h4>
                    <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">
                        {level}
                    </span>
                </div>
            </div>

            <div className="flex gap-1">
                {[...Array(3)].map((_, i) => (
                    <div
                        key={i}
                        className={`w-1.5 h-1.5 rounded-full ${i < (level === "Advanced" ? 3 : level === "Intermediate" ? 2 : 1)
                                ? "bg-primary shadow-[0_0_8px_rgba(0,217,255,0.6)]"
                                : "bg-white/10"
                            }`}
                    />
                ))}
            </div>
        </motion.div>
    );
}
