"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "OC-Swim",
        description: "A full-stack Next.js swimming school SaaS platform featuring intelligent scheduling, Stripe integration, and role-based dashboards.",
        tech: ["Next.js", "Stripe", "MySQL", "Tailwind", "JWT"],
        github: "https://github.com/Muaz-007",
        demo: "https://www.ocswimorganization.com",
        image: "/ocswim.png",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 px-6 bg-background-secondary overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-sm uppercase tracking-[0.3em] text-primary mb-4">Portfolio</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Selected Work</h3>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A collection of projects exploring the boundaries of web technology and design.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="group relative glass rounded-3xl overflow-hidden"
                        >
                            {/* Image Container */}
                            <div className="aspect-[16/10] overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:blur-sm grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100"
                                />
                            </div>

                            {/* Overlay Content */}
                            <div className="absolute inset-0 bg-gradient-to-t from-background-accent via-background-accent/40 to-transparent p-8 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <div className="flex flex-wrap gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                    {project.tech.map((t) => (
                                        <span key={t} className="text-[10px] font-bold uppercase tracking-widest bg-primary/20 text-primary px-2 py-1 rounded border border-primary/20">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <h4 className="text-2xl font-bold text-white mb-2">{project.title}</h4>
                                <p className="text-gray-400 text-sm mb-6 line-clamp-2">{project.description}</p>

                                <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-bold text-white hover:text-primary transition-colors">
                                        <ExternalLink size={16} /> LIVE DEMO
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
