"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import Sheet from './Sheet';
import { Menu } from 'lucide-react';

const ThemeToggle = dynamic(() => import('./ThemeToggle'), {
    ssr: false,
});

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Careers', href: '/careers' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <header className="sticky top-0 z-50 bg-[#6a486f]/95 dark:bg-[#4f3555]/95 backdrop-blur-xl border-b border-[#e7a99a]/20 dark:border-[#e7a99a]/15 shadow-lg dark:shadow-xl shadow-black/10 dark:shadow-black/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-2 sm:py-3">
                    {/* Logo + text */}
                    <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group hover:opacity-80 transition-opacity duration-200 min-w-0">
                        <div className="relative">
                            <Image
                                src="/logonew.png"
                                alt="Gurkha Health logo"
                                width={68}
                                height={68}
                                className="h-11 sm:h-14 w-auto object-contain shrink-0"
                                priority
                            />
                        </div>
                        <div className="flex flex-col leading-tight min-w-0">
                            <span className="text-sm xs:text-base sm:text-xl font-semibold tracking-tight text-[rgba(238,162,143,1)] truncate">
                                Gurkha Health
                            </span>
                            <span className="text-[10px] xs:text-[11px] sm:text-xs font-semibold tracking-wide text-white leading-snug break-words">
                                Here when you need us most
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-2">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`relative px-6 py-3 rounded-xl font-bold text-base lg:text-lg tracking-wide transition-all duration-300 overflow-hidden group ${
                                        isActive
                                            ? 'text-white bg-gradient-to-r from-[#e7a99a] to-[#f7a655] shadow-lg shadow-[#e7a99a]/30'
                                            : 'text-[#f5ddd4] hover:text-white'
                                    }`}
                                >
                                    {!isActive && (
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#e7a99a] to-[#f7a655] group-hover:w-full transition-all duration-300" />
                                    )}
                                    {link.name}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Desktop Right Section */}
                    <div className="hidden md:flex items-center gap-3">
                        <ThemeToggle className="p-2.5 rounded-lg bg-white/15 hover:bg-white/25 text-[#f5ddd4] hover:text-white transition-all duration-200 border border-white/10 hover:border-white/20" />
                    </div>

                    {/* Mobile Menu & Theme Toggle */}
                    <div className="md:hidden flex items-center gap-2">
                        <ThemeToggle className="p-2.5 rounded-lg bg-white/15 hover:bg-white/25 text-[#f5ddd4] hover:text-white transition-all duration-200 border border-white/10 hover:border-white/20" />
                        <button
                            onClick={() => setIsMenuOpen(true)}
                            className="p-2.5 text-[#f5ddd4] hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 border border-white/10 hover:border-white/20"
                            aria-label="Open menu"
                        >
                            <Menu className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Mobile Sheet */}
                <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                    <div className="flex flex-col items-center justify-center w-full h-full px-6 py-8 space-y-8">
                        {/* Mobile Navigation */}
                        <nav className="w-full space-y-3">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className={`block w-full text-center font-bold tracking-wide rounded-xl py-4 px-4 border transition-all duration-200 text-lg ${
                                            isActive
                                                ? 'bg-gradient-to-r from-[#e7a99a] to-[#f7a655] text-white border-[#e7a99a] shadow-lg shadow-[#e7a99a]/30'
                                                : 'bg-slate-200 dark:bg-white/5 text-slate-900 dark:text-[#f5ddd4] border-slate-300 dark:border-white/10 hover:bg-slate-300 dark:hover:bg-white/15 hover:text-slate-900 dark:hover:text-white hover:border-[#e7a99a]/40'
                                        }`}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                );
                            })}
                        </nav>
                    </div>
                </Sheet>
            </div>
        </header>
    );
};

export default Header;
