"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

interface ExperienceItem {
    id: number;
    role: string;
    company: string;
    period: string;
    description: string[];
    skills: string[];
}

const experiences: ExperienceItem[] = [
    {
        id: 2,
        role: "Full-Stack Developer",
        company: "Hive of Solutions",
        period: "present",
        description: [
            "Architecting and maintaining full-stack applications with Next.js and NestJS, optimizing for high scalability and seamless user experiences.",
            "Developing complex data-driven dashboards and high-fidelity UIs using Tailwind CSS and TypeScript, following modern design systems.",
            "Engineering robust RESTful APIs and optimizing relational database schemas with Node.js and PostgreSQL for real-time performance.",
        ],
        skills: ["Node.js", "Nextjs", "Tailwind", "Nestjs", "TypeScript", "Postgres"],
    },
    {
        id: 3,
        role: "Junior Web Developer",
        company: "Hive of Solutions",
        period: "2024 - 2025",
        description: [
            "Developed and maintained high-quality client websites using HTML5, CSS3, and modern JavaScript, ensuring pixel-perfect responsiveness.",
            "Implemented interactive features and dynamic frontend components with Bootstrap and vanilla JS to enhance user engagement.",
            "Collaborated within Agile teams, participating in sprint planning and technical reviews while managing data with MySQL.",
        ],
        skills: ["JavaScript", "HTML", "CSS", "Bootstrap", "MySQL"],
    },
];

export default function Experience() {
    return (
        <section id="experience" className="py-24 px-6 bg-background relative">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-sm uppercase tracking-[0.3em] text-primary mb-4">My Path</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-white">Experience</h3>
                </motion.div>

                <div className="relative border-l border-white/10 ml-4 md:ml-0">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="mb-12 ml-8 relative"
                        >
                            {/* Timeline Node */}
                            <div className="absolute -left-[41px] top-1 w-6 h-6 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            </div>

                            <div className="glass p-6 md:p-8 rounded-2xl group transition-all duration-300 hover:border-primary/30">
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
                                    <div>
                                        <h4 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                                            {exp.role}
                                        </h4>
                                        <p className="text-primary/80 font-medium">{exp.company}</p>
                                    </div>
                                    <span className="text-xs font-mono text-gray-500 uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full border border-white/10">
                                        {exp.period}
                                    </span>
                                </div>

                                <ul className="space-y-3 mb-6">
                                    {exp.description.map((item, i) => (
                                        <li key={i} className="text-gray-400 text-sm flex gap-3">
                                            <span className="text-primary mt-1">•</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-2">
                                    {exp.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="text-[10px] uppercase font-bold tracking-tight px-2 py-1 rounded bg-primary/10 text-primary border border-primary/20"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
