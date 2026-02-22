"use client";

import { useState, useMemo } from "react";
import { SearchX, SlidersHorizontal, BookOpen } from "lucide-react";
import BookCard from "@/components/ui/BookCard";
import { books, categories } from "@/data/mockData";

const ALL = "all";

export default function CatalogoPage() {
    const [activeCategory, setActiveCategory] = useState<string>(ALL);
    const [activeAge, setActiveAge] = useState<string>(ALL);

    const ageOptions = [
        { id: "a1", label: "0–3 anos", slug: "0-3" },
        { id: "a2", label: "4–6 anos", slug: "4-6" },
        { id: "a3", label: "7–10 anos", slug: "7-10" },
        { id: "a4", label: "11–14 anos", slug: "11-14" },
    ];

    const filteredBooks = useMemo(() => {
        return books.filter((book) => {
            const matchesCategory =
                activeCategory === ALL || book.genre === activeCategory;
            const matchesAge =
                activeAge === ALL || book.ageRange === activeAge;
            return matchesCategory && matchesAge;
        });
    }, [activeCategory, activeAge]);

    const hasActiveFilter = activeCategory !== ALL || activeAge !== ALL;

    const clearFilters = () => {
        setActiveCategory(ALL);
        setActiveAge(ALL);
    };

    return (
        <div className="flex flex-col">
            {/* ── Page Header ───────────────────────────────────────────── */}
            <section className="bg-gradient-to-br from-brand-blue to-brand-purple py-14">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 text-sm font-medium mb-5">
                        <BookOpen size={14} />
                        {books.length} títulos disponíveis
                    </div>
                    <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
                        Nosso Catálogo
                    </h1>
                    <p className="text-blue-200 text-lg max-w-xl mx-auto">
                        Explore nossa coleção completa de histórias mágicas para crianças
                        e jovens de todas as idades.
                    </p>
                </div>
            </section>

            {/* ── Filters ───────────────────────────────────────────────── */}
            <section className="sticky top-16 z-40 bg-white border-b border-slate-200 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                        {/* Filter icon label */}
                        <div className="flex items-center gap-2 text-sm font-semibold text-slate-500 shrink-0">
                            <SlidersHorizontal size={15} />
                            Filtrar por:
                        </div>

                        <div className="flex flex-wrap gap-2 flex-1">
                            {/* Category pills */}
                            <div className="flex flex-wrap gap-2 items-center">
                                <span className="text-xs text-slate-400 font-medium pr-1">Gênero</span>
                                <button
                                    onClick={() => setActiveCategory(ALL)}
                                    className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 ${activeCategory === ALL
                                            ? "bg-brand-blue text-white border-brand-blue shadow-sm"
                                            : "bg-white text-slate-600 border-slate-200 hover:border-brand-blue hover:text-brand-blue"
                                        }`}
                                >
                                    Todos
                                </button>
                                {categories.map((cat) => (
                                    <button
                                        key={cat.id}
                                        onClick={() => setActiveCategory(cat.name)}
                                        className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 ${activeCategory === cat.name
                                                ? "bg-brand-purple text-white border-brand-purple shadow-sm"
                                                : "bg-white text-slate-600 border-slate-200 hover:border-brand-purple hover:text-brand-purple"
                                            }`}
                                    >
                                        {cat.name}
                                    </button>
                                ))}
                            </div>

                            {/* Divider */}
                            <div className="hidden sm:block w-px bg-slate-200 self-stretch mx-1" />

                            {/* Age pills */}
                            <div className="flex flex-wrap gap-2 items-center">
                                <span className="text-xs text-slate-400 font-medium pr-1">Idade</span>
                                <button
                                    onClick={() => setActiveAge(ALL)}
                                    className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 ${activeAge === ALL
                                            ? "bg-brand-blue text-white border-brand-blue shadow-sm"
                                            : "bg-white text-slate-600 border-slate-200 hover:border-brand-blue hover:text-brand-blue"
                                        }`}
                                >
                                    Todas
                                </button>
                                {ageOptions.map((age) => (
                                    <button
                                        key={age.id}
                                        onClick={() => setActiveAge(age.label)}
                                        className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 ${activeAge === age.label
                                                ? "bg-brand-orange text-white border-brand-orange shadow-sm"
                                                : "bg-white text-slate-600 border-slate-200 hover:border-brand-orange hover:text-brand-orange"
                                            }`}
                                    >
                                        {age.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Clear filters */}
                        {hasActiveFilter && (
                            <button
                                onClick={clearFilters}
                                className="text-xs font-semibold text-brand-orange hover:text-brand-blue transition-colors duration-200 shrink-0 underline underline-offset-2"
                            >
                                Limpar filtros
                            </button>
                        )}
                    </div>
                </div>
            </section>

            {/* ── Grid / Empty State ────────────────────────────────────── */}
            <section className="flex-1 py-10 bg-brand-bg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Results count */}
                    <div className="flex items-center justify-between mb-6">
                        <p className="text-sm text-slate-500">
                            {filteredBooks.length === 0 ? (
                                "Nenhum livro encontrado"
                            ) : (
                                <>
                                    <span className="font-semibold text-brand-blue">
                                        {filteredBooks.length}
                                    </span>{" "}
                                    {filteredBooks.length === 1 ? "livro encontrado" : "livros encontrados"}
                                </>
                            )}
                        </p>
                        {hasActiveFilter && (
                            <span className="text-xs text-slate-400 italic">
                                Filtros ativos
                            </span>
                        )}
                    </div>

                    {filteredBooks.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {filteredBooks.map((book) => (
                                <BookCard key={book.id} variant="book" item={book} />
                            ))}
                        </div>
                    ) : (
                        /* Empty State */
                        <div className="flex flex-col items-center justify-center py-24 text-center">
                            <div className="p-6 rounded-full bg-brand-purple/10 mb-6">
                                <SearchX size={40} className="text-brand-purple/50" />
                            </div>
                            <h3 className="font-display text-xl font-bold text-brand-blue mb-2">
                                Nenhum livro encontrado
                            </h3>
                            <p className="text-gray-400 text-sm max-w-xs">
                                Nenhum título corresponde aos filtros selecionados. Que tal
                                explorar outra categoria?
                            </p>
                            <button
                                onClick={clearFilters}
                                className="mt-6 px-6 py-2.5 rounded-xl bg-brand-orange text-white text-sm font-semibold hover:bg-brand-orange/90 transition-colors duration-200"
                            >
                                Mostrar todos os livros
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
