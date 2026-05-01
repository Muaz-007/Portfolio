"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";

const socialLinks = [
    { icon: Github, href: "https://github.com/Muaz-007", name: "GitHub", active: true },
    { icon: Linkedin, href: "https://www.linkedin.com/in/muaz-ali-483279380", name: "LinkedIn", active: true },
    { icon: Instagram, href: "https://www.instagram.com/007m_az/", name: "Instagram", active: true },
    { icon: Mail, href: "mailto:muaz.developments@gmail.com", name: "Email", active: true },
];

export default function Hero() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden pt-20">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        rotate: [0, -90, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
                />
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 text-center px-4 max-w-5xl"
            >
                <motion.span
                    variants={itemVariants}
                    className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-6 block"
                >
                    Welcome to my universe
                </motion.span>

                <motion.h1
                    variants={itemVariants}
                    className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter"
                >
                    M. <span className="text-primary">Muaz</span> Ali
                </motion.h1>

                <motion.h2
                    variants={itemVariants}
                    className="text-2xl md:text-3xl font-light text-gray-400 mb-8"
                >
                    <span className="text-white font-medium">Full-Stack Web Developer</span>
                </motion.h2>

                <motion.p
                    variants={itemVariants}
                    className="text-lg text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed"
                >
                    Building elegant, performant web experiences with modern technologies.
                    Focusing on design-driven engineering and sophisticated interactions.
                </motion.p>

                <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-6 mb-16">
                    <Link href="#projects" className="btn-primary">
                        View Projects
                    </Link>
                    <Link href="#contact" className="btn-secondary">
                        Contact Me
                    </Link>
                </motion.div>

                <motion.div variants={itemVariants} className="flex justify-center gap-8">
                    {socialLinks.map((social) => {
                        const IconComponent = social.icon;
                        const content = (
                            <>
                                <IconComponent size={24} />
                                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                                    {social.name}
                                </span>
                            </>
                        );

                        if (social.active) {
                            const isExternal = social.href.startsWith("http");
                            return (
                                <Link
                                    key={social.name}
                                    href={social.href}
                                    target={isExternal ? "_blank" : undefined}
                                    rel={isExternal ? "noopener noreferrer" : undefined}
                                    className="group relative text-gray-400 hover:text-primary transition-colors duration-300"
                                    aria-label={social.name}
                                >
                                    {content}
                                </Link>
                            );
                        }

                        return (
                            <div
                                key={social.name}
                                className="group relative text-gray-600 cursor-not-allowed"
                                aria-label={`${social.name} (Not available)`}
                            >
                                {content}
                            </div>
                        );
                    })}
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                {/* <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500">Scroll</span> */}
                <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
            </motion.div>
        </section>
    );
}
