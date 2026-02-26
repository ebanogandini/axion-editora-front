"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, BookOpen, Star } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

interface NavLink {
    label: string;
    href: string;
}

interface MobileNavProps {
    navLinks: NavLink[];
}

export default function MobileNav({ navLinks }: MobileNavProps) {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <button
                    aria-label="Abrir menu de navegação"
                    className="p-2 rounded-md text-brand-gold-dark hover:text-brand-gold hover:bg-brand-gold/5 transition-colors"
                >
                    {open ? <X size={22} /> : <Menu size={22} />}
                </button>
            </SheetTrigger>

            {/* ── Drawer ─────────────────────────────────────────── */}
            <SheetContent side="right" className="w-72 bg-white p-0">

                {/* Header — brand identity */}
                <SheetHeader className="px-6 pt-6 pb-4 border-b border-brand-gold/20 bg-gradient-to-br from-brand-gold-light/60 to-white">
                    <SheetTitle className="flex items-center gap-2 font-display text-lg font-bold text-brand-gold-dark text-left">
                        <BookOpen size={20} className="text-sky-500" />
                        Axion Editora
                    </SheetTitle>
                    <p className="text-xs text-slate-400 font-normal mt-0.5 tracking-wide">
                        Literatura infantojuvenil brasileira
                    </p>
                </SheetHeader>

                {/* Nav links */}
                <nav
                    className="flex flex-col px-4 py-6 gap-1"
                    aria-label="Navegação mobile"
                >
                    {navLinks.map(({ label, href }) => {
                        const isActive =
                            href === "/" ? pathname === "/" : pathname.startsWith(href);
                        return (
                            <Link
                                key={href}
                                href={href}
                                onClick={() => setOpen(false)}
                                className={`
                  flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-150
                  ${isActive
                                        ? "bg-brand-gold/10 text-brand-gold-dark font-semibold border border-brand-gold/20"
                                        : "text-slate-600 hover:bg-sky-50 hover:text-sky-600"
                                    }
                `}
                            >
                                {isActive && (
                                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold flex-shrink-0" />
                                )}
                                {label}
                            </Link>
                        );
                    })}
                </nav>

                {/* Decorative star accent */}
                <div className="px-6 py-4 border-t border-slate-100">
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                        <Star size={11} className="text-brand-gold fill-brand-gold" />
                        <span>Histórias que encantam gerações</span>
                        <Star size={11} className="text-brand-gold fill-brand-gold" />
                    </div>
                </div>

                {/* Footer */}
                <div className="absolute bottom-6 left-0 right-0 px-6">
                    <p className="text-xs text-slate-400 text-center">
                        © 2025 Axion Editora
                    </p>
                </div>
            </SheetContent>
        </Sheet>
    );
}
