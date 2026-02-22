import { CalendarDays, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import BookCard from "@/components/ui/BookCard";
import { releases } from "@/data/mockData";

// Format a date string like "2024-11-01" → "1 de novembro de 2024"
function formatDatePtBR(iso: string): string {
    const months = [
        "janeiro", "fevereiro", "março", "abril", "maio", "junho",
        "julho", "agosto", "setembro", "outubro", "novembro", "dezembro",
    ] as const;
    const [year, month, day] = iso.split("-").map(Number);
    return `${day} de ${months[month - 1]} de ${year}`;
}

export default function LancamentosPage() {
    return (
        <div className="flex flex-col">
            {/* ── Page Header ───────────────────────────────────────────── */}
            <section className="relative overflow-hidden bg-gradient-to-br from-brand-purple via-brand-purple to-brand-blue py-16">
                {/* Background blobs */}
                <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-brand-blue/20 blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-brand-orange/10 blur-2xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-orange/20 border border-brand-orange/30 text-brand-orange text-sm font-semibold mb-5">
                        <Sparkles size={13} />
                        Chegando às livrarias
                    </div>
                    <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
                        Próximos Lançamentos
                    </h1>
                    <p className="text-blue-200 text-lg max-w-xl mx-auto leading-relaxed">
                        Fique por dentro das nossas novidades e seja o primeiro a descobrir
                        as histórias que chegarão em breve.
                    </p>
                </div>
            </section>

            {/* ── Timeline strip ────────────────────────────────────────── */}
            <section className="bg-white border-b border-slate-100 py-5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-3 text-sm text-slate-500">
                        <CalendarDays size={16} className="text-brand-purple" />
                        <span>
                            <span className="font-semibold text-brand-purple">
                                {releases.length}
                            </span>{" "}
                            novos títulos disponíveis
                        </span>
                        <span className="ml-auto hidden sm:inline-flex items-center gap-1.5 text-brand-orange font-semibold hover:text-brand-blue transition-colors cursor-pointer group">
                            <Link href="/catalogo" className="flex items-center gap-1.5">
                                Ver catálogo completo
                                <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                            </Link>
                        </span>
                    </div>
                </div>
            </section>

            {/* ── Releases Grid ─────────────────────────────────────────── */}
            <section className="flex-1 py-12 bg-brand-bg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {releases.map((release) => (
                            <div key={release.id} className="flex flex-col gap-2">
                                <BookCard variant="release" item={release} />
                                {/* Publication date below card */}
                                <div className="flex items-center gap-1.5 px-1 text-xs text-slate-400">
                                    <CalendarDays size={11} className="text-brand-purple/60" />
                                    {formatDatePtBR(release.publishedAt)}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Bottom CTA ────────────────────────────────────────────── */}
            <section className="py-14 bg-white border-t border-slate-100">
                <div className="max-w-2xl mx-auto px-4 text-center">
                    <h2 className="font-display text-2xl font-bold text-brand-blue mb-3">
                        Não perca nenhum lançamento
                    </h2>
                    <p className="text-gray-500 text-sm mb-7 leading-relaxed">
                        Entre em contato conosco para saber mais sobre nossos próximos
                        títulos e novidades editoriais.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Link
                            href="/contato"
                            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-brand-orange text-white text-sm font-semibold hover:bg-brand-orange/90 transition-colors shadow-md hover:shadow-brand-orange/30"
                        >
                            Falar com a editora
                            <ArrowRight size={14} />
                        </Link>
                        <Link
                            href="/catalogo"
                            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl border border-brand-blue/30 text-brand-blue text-sm font-semibold hover:bg-brand-blue hover:text-white transition-all"
                        >
                            Ver catálogo completo
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
