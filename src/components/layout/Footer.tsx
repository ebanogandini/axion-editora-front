import Link from "next/link";
import { contactInfo } from "@/data/mockData";

export default function Footer() {
    return (
        <footer className="bg-white border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

                    {/* ── Col 1: Brand ── */}
                    <div className="flex flex-col gap-3 sm:col-span-2 md:col-span-1">
                        <Link
                            href="/"
                            className="font-display text-xl font-bold tracking-tight hover:opacity-80 transition-opacity w-fit"
                        >
                            <span className="text-brand-blue">Axion</span>
                            <span className="text-brand-gold-dark"> Editora</span>
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-[200px]">
                            Histórias que encantam gerações.
                        </p>
                    </div>

                    {/* ── Col 2: Navegação ── */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">
                            Navegação
                        </h3>
                        <ul className="flex flex-col gap-2">
                            {[
                                { label: "Início", href: "/" },
                                { label: "Catálogo", href: "/catalogo" },
                                { label: "Lançamentos", href: "/lancamentos" },
                            ].map(({ label, href }) => (
                                <li key={href}>
                                    <Link
                                        href={href}
                                        className="text-sm text-slate-500 hover:text-brand-gold-dark transition-colors duration-150"
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* ── Col 3: Sobre ── */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">
                            Sobre
                        </h3>
                        <ul className="flex flex-col gap-2">
                            {[
                                { label: "Sobre Nós", href: "/sobre" },
                                { label: "Contato", href: "/contato" },
                            ].map(({ label, href }) => (
                                <li key={href}>
                                    <Link
                                        href={href}
                                        className="text-sm text-slate-500 hover:text-brand-gold-dark transition-colors duration-150"
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* ── Col 4: Contato ── */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">
                            Contato
                        </h3>
                        <ul className="flex flex-col gap-2">
                            <li>
                                <a
                                    href={`mailto:${contactInfo.email}`}
                                    className="text-sm text-slate-500 hover:text-brand-gold-dark transition-colors duration-150 break-all"
                                >
                                    {contactInfo.email}
                                </a>
                            </li>
                            <li>
                                <a
                                    href={`tel:${contactInfo.phone.replace(/\D/g, "")}`}
                                    className="text-sm text-brand-gold-dark hover:text-brand-blue transition-colors duration-150 font-medium"
                                >
                                    {contactInfo.phone}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* ── Bottom bar ── */}
                <div className="mt-10 pt-6 border-t border-slate-100 text-center text-xs text-slate-400">
                    © 2026 Axion Editora. Todos os{" "}
                    <span className="text-brand-gold font-medium">direitos</span>{" "}
                    reservados.
                </div>
            </div>
        </footer>
    );
}
