"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Code2, Palette, Zap } from "lucide-react";

const highlights = [
    {
        icon: Code2,
        title: "Full-Stack Dev",
        description: "Expertise in both frontend and backend architectures.",
    },
    {
        icon: Palette,
        title: "Design Driven",
        description: "Focusing on pixel-perfect details and aesthetics.",
    },
    {
        icon: Zap,
        title: "Performant",
        description: "Optimized code for the best user experience.",
    },
];

export default function About() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section id="about" className="py-24 px-6 bg-background-secondary relative overflow-hidden">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                {/* Visual Element */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative aspect-square"
                >
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl" />
                    <div
                        className="relative w-full h-full glass rounded-2xl flex items-center justify-center p-8 overflow-hidden group"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        {/* Abstract geometric placeholder */}
                        <motion.div
                            className="w-64 h-64 border-2 border-primary/20"
                            animate={isHovered ? { scale: 1, rotate: 45 } : {
                                rotate: [45, 90, 45],
                                scale: [1, 1.1, 1],
                            }}
                            transition={{
                                duration: 12,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                        <motion.div
                            className="absolute w-48 h-48 border-2 border-secondary/20"
                            animate={isHovered ? { scale: 1, rotate: -45 } : {
                                rotate: [-45, -135, -45],
                                scale: [1, 0.9, 1],
                            }}
                            transition={{
                                duration: 10,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />

                        <div className="absolute bottom-8 left-8 text-left">
                            <span className="text-4xl font-bold text-white block">2+</span>
                            <span className="text-xs text-gray-400 uppercase tracking-widest">Years Experience</span>
                        </div>
                    </div>
                </motion.div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-sm uppercase tracking-[0.3em] text-primary mb-4">About Me</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">
                        Building digital <span className="text-gradient">excellence</span> with passion.
                    </h3>
                    <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                        I&apos;m a full-stack engineer dedicated to crafting high-quality web experiences.
                        My journey in tech is driven by a curiosity to solve complex problems through
                        clean code and intuitive design.
                    </p>
                    <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                        Whether it&apos;s architecting a scalable backend or polishing a micro-interaction,
                        I bring a holistic approach to every project I touch.
                    </p>
                    <p className="text-gray-400 text-lg mb-12 leading-relaxed">
                        Currently expanding into mobile with <span className="text-primary">React Native</span>,
                        contributing to a finance teaching app to put what I&apos;m learning into practice.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {highlights.map((item, i) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-4 glass rounded-xl border border-transparent hover:border-primary/50 hover:shadow-[0_0_15px_rgba(0,217,255,0.3)] transition-all duration-300"
                            >
                                <item.icon className="text-primary mb-3" size={24} />
                                <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                                <p className="text-xs text-gray-500">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="mt-12"
                    >
                        <a
                            href="https://drive.google.com/file/d/1AgLg6OwFRxzMtrnJCV_pY3bUBQDYZWrA/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary hover:shadow-[0_0_15px_rgba(0,217,255,0.3)] transition-all duration-300 inline-block"
                        >
                            Download Resume
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
