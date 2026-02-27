"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search } from "lucide-react";
import MobileNav from "./MobileNav";

const navLinks = [
    { label: "Início", href: "/" },
    { label: "Catálogo", href: "/catalogo" },
    { label: "Lançamentos", href: "/lancamentos" },
    { label: "Sobre", href: "/sobre" },
    { label: "Contato", href: "/contato" },
];

export default function Header() {
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-100 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    {/* Official Image Logo */}
                    <Link
                        href="/"
                        className="flex items-center hover:opacity-80 transition-opacity duration-300"
                    >
                        <Image
                            src="/logo.jpeg"
                            alt="Logo Axion Editora"
                            width={250}
                            height={80}
                            priority
                            className="h-8 sm:h-10 md:h-12 w-auto object-contain"
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8" aria-label="Navegação principal">
                        {navLinks.map(({ label, href }) => {
                            const isActive =
                                href === "/" ? pathname === "/" : pathname.startsWith(href);
                            return (
                                <Link
                                    key={href}
                                    href={href}
                                    className={`
                    text-sm font-medium transition-colors duration-200 relative group
                    ${isActive
                                            ? "text-brand-gold-dark"
                                            : "text-slate-500 hover:text-brand-gold-dark"
                                        }
                  `}
                                >
                                    {label}
                                    {/* Animated underline */}
                                    <span
                                        className={`
                      absolute -bottom-[22px] left-0 h-0.5 bg-brand-gold rounded-full transition-all duration-200
                      ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                    `}
                                    />
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Right side: search icon + mobile trigger */}
                    <div className="flex items-center gap-3">
                        <button
                            aria-label="Buscar"
                            className="hidden md:flex p-2 rounded-lg text-slate-400 hover:text-brand-gold-dark hover:bg-brand-gold/10 transition-all duration-200"
                        >
                            <Search size={18} />
                        </button>
                        <div className="md:hidden">
                            <MobileNav navLinks={navLinks} />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
