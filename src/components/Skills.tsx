"use client";

import { SectionHeader } from './SectionHeader';
import { SkillBadge } from './SkillBadge';
import {
    Code2,
    Database,
    GitBranch,
    Smartphone,
    Layout,
    Server,
    Terminal,
    Palette,
    Box,
    Zap,
    FileType2,
    Sparkles,
    KeyRound,
    CreditCard,
} from 'lucide-react';

const skillCategories = [
    {
        category: 'Frontend',
        skills: [
            { name: 'HTML', icon: Code2, level: 'Advanced' as const },
            { name: 'CSS', icon: Palette, level: 'Advanced' as const },
            { name: 'TypeScript', icon: FileType2, level: 'Advanced' as const },
            { name: 'React', icon: Code2, level: 'Advanced' as const },
            { name: 'Next.js', icon: Layout, level: 'Advanced' as const },
            { name: 'React Native', icon: Smartphone, level: 'Beginner' as const },
            { name: 'Tailwind CSS', icon: Palette, level: 'Advanced' as const },
            { name: 'Framer Motion', icon: Sparkles, level: 'Advanced' as const },
        ],
    },
    {
        category: 'Backend',
        skills: [
            { name: 'Node.js', icon: Server, level: 'Advanced' as const },
            { name: 'NestJS', icon: Zap, level: 'Beginner' as const },
            { name: 'Prisma', icon: Box, level: 'Advanced' as const },
            { name: 'MySQL', icon: Database, level: 'Advanced' as const },
            { name: 'PostgreSQL', icon: Database, level: 'Advanced' as const },
            { name: 'NextAuth / JWT', icon: KeyRound, level: 'Intermediate' as const },
        ],
    },
    {
        category: 'Tools & Integrations',
        skills: [
            { name: 'Git', icon: GitBranch, level: 'Advanced' as const },
            { name: 'GitHub', icon: GitBranch, level: 'Advanced' as const },
            { name: 'VS Code', icon: Terminal, level: 'Advanced' as const },
            { name: 'Stripe', icon: CreditCard, level: 'Intermediate' as const },
        ],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 px-6 relative">
            <div className="max-w-6xl mx-auto">
                <SectionHeader
                    label="Tech Stack"
                    title="Skills & Technologies"
                    subtitle="Tools and technologies I work with to bring ideas to life"
                />

                <div className="grid md:grid-cols-3 gap-8">
                    {skillCategories.map((category, categoryIndex) => (
                        <div key={category.category} className="space-y-4">
                            {/* Category Header */}
                            <div className="flex items-center gap-3 mb-6">
                                <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent"></div>
                                <h3 className="text-xl font-bold text-primary uppercase tracking-widest">{category.category}</h3>
                                <div className="h-px flex-1 bg-gradient-to-l from-primary/50 to-transparent"></div>
                            </div>

                            {/* Skills */}
                            <div className="space-y-3">
                                {category.skills.map((skill, index) => (
                                    <SkillBadge
                                        key={skill.name}
                                        {...skill}
                                        index={categoryIndex * 6 + index}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
