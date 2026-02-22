"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, BookOpen } from "lucide-react";
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
                    className="p-2 rounded-md text-slate-600 hover:text-brand-orange hover:bg-slate-100 transition-colors"
                >
                    {open ? <X size={22} /> : <Menu size={22} />}
                </button>
            </SheetTrigger>

            <SheetContent side="right" className="w-72 bg-white p-0">
                <SheetHeader className="px-6 pt-6 pb-4 border-b border-slate-200">
                    <SheetTitle className="flex items-center gap-2 font-display text-lg font-bold text-brand-blue text-left">
                        <BookOpen size={20} className="text-brand-orange" />
                        Axion Editora
                    </SheetTitle>
                </SheetHeader>

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
                  flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-150
                  ${isActive
                                        ? "bg-brand-orange/10 text-brand-orange font-semibold"
                                        : "text-slate-700 hover:bg-slate-100 hover:text-brand-orange"
                                    }
                `}
                            >
                                {isActive && (
                                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0" />
                                )}
                                {label}
                            </Link>
                        );
                    })}
                </nav>

                <div className="absolute bottom-6 left-0 right-0 px-6">
                    <p className="text-xs text-slate-400 text-center">
                        © 2024 Axion Editora
                    </p>
                </div>
            </SheetContent>
        </Sheet>
    );
}
