"use client";

import Link from "next/link";
import { Github, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 px-6 border-t border-white/5 bg-background overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="text-center md:text-left">
                    <Link href="/" className="text-xl font-bold tracking-tighter text-white">
                        007<span className="text-primary">.</span>
                    </Link>
                    <p className="text-gray-500 text-xs mt-2 uppercase tracking-widest">
                        Crafting the digital future.
                    </p>
                </div>

                <div className="flex gap-8">
                    <Link href="https://github.com/Muaz-007" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                        <Github size={20} />
                    </Link>
                    <Link href="https://www.linkedin.com/in/muaz-ali-483279380" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                        <Linkedin size={20} />
                    </Link>
                    <Link href="https://www.instagram.com/007m_az/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                        <Instagram size={20} />
                    </Link>
                </div>

                <div className="text-center md:text-right">
                    <p className="text-gray-500 text-[10px] uppercase tracking-widest">
                        © {currentYear} Muaz Ali. All rights reserved.
                    </p>
                </div>
            </div>

            {/* Decorative line */}
            <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent mt-12" />
        </footer>
    );
}
