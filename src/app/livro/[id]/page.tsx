import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
    ArrowLeft,
    BookOpen,
    Star,
    StarHalf,
    Calendar,
    Sparkles,
    ArrowRight,
    User,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import BookCard from "@/components/ui/BookCard";
import { books, releases } from "@/data/mockData";
import type { Book, Release } from "@/types";

// ── Params type for Next.js 16 / React 19 (params is a Promise) ──────────────
type PageProps = {
    params: Promise<{ id: string }>;
};

export default async function LivroPage({ params }: PageProps) {
    const { id } = await params;

    // Search both catalogs
    const book = books.find((b) => b.id === id) as Book | undefined;
    const release = !book
        ? (releases.find((r) => r.id === id) as Release | undefined)
        : undefined;

    const item = book ?? release;
    if (!item) notFound();

    const isBook = !!book;

    // Related books: 3 others from the same source array, excluding current
    const related = (isBook ? books : releases)
        .filter((b) => b.id !== id)
        .slice(0, 3);

    const genre = isBook ? book.genre : "Lançamento";
    const ageRange = isBook ? book.ageRange : null;

    const hasRealCover = !!item.coverImage && item.coverImage.startsWith("/") && !item.coverImage.endsWith(".svg");

    return (
        <div className="flex flex-col bg-brand-bg">
            {/* ── Breadcrumb bar ─────────────────────────────────────────── */}
            <div className="bg-white border-b border-slate-100">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
                    <nav className="flex items-center gap-2 text-sm text-slate-500" aria-label="Breadcrumb">
                        <Link
                            href={isBook ? "/catalogo" : "/lancamentos"}
                            className="inline-flex items-center gap-1.5 font-medium text-brand-blue hover:text-brand-orange transition-colors duration-200 group"
                        >
                            <ArrowLeft
                                size={15}
                                className="group-hover:-translate-x-0.5 transition-transform duration-200"
                            />
                            {isBook ? "Voltar para o Catálogo" : "Voltar para Lançamentos"}
                        </Link>
                        <span className="text-slate-300">/</span>
                        <span className="text-slate-400 line-clamp-1">{item.title}</span>
                    </nav>
                </div>
            </div>

            {/* ── Main Content ───────────────────────────────────────────── */}
            <section className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
                {/* Two-column grid */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">

                    {/* ── Left: Large Cover (2 cols) ───────────────────────── */}
                    <div className="lg:col-span-2">
                        {/* Sticky cover on desktop */}
                        <div className="lg:sticky lg:top-24">
                            <div className="relative aspect-[2/3] w-full max-w-sm mx-auto lg:max-w-none rounded-2xl shadow-xl overflow-hidden bg-gradient-to-br from-brand-purple/15 via-brand-blue/10 to-brand-orange/5 flex items-center justify-center">
                                {hasRealCover ? (
                                    <Image
                                        src={item.coverImage}
                                        alt={item.title}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 1024px) 80vw, 40vw"
                                        priority
                                    />
                                ) : (
                                    <>
                                        {/* Decorative rings */}
                                        <div className="absolute inset-0 flex items-center justify-center opacity-5">
                                            <div className="w-72 h-72 rounded-full border-[36px] border-brand-purple" />
                                        </div>
                                        <div className="absolute top-6 right-8 w-20 h-20 rounded-full bg-brand-orange/10 blur-2xl" />
                                        <div className="absolute bottom-8 left-4 w-28 h-28 rounded-full bg-brand-blue/10 blur-2xl" />

                                        <div className="relative z-10 flex flex-col items-center gap-5 px-8 text-center">
                                            <div className="p-6 rounded-full bg-white/70 backdrop-blur-sm shadow-md">
                                                <BookOpen
                                                    size={56}
                                                    className="text-brand-blue"
                                                    strokeWidth={1.2}
                                                />
                                            </div>
                                            <div>
                                                <p className="font-display text-lg font-bold text-brand-blue/80 leading-snug">
                                                    {item.title}
                                                </p>
                                                <p className="text-sm text-brand-purple/60 mt-1">
                                                    {item.author}
                                                </p>
                                            </div>
                                        </div>
                                    </>
                                )}

                                {/* Genre badge on cover — always visible */}
                                <div className="absolute top-4 left-4 z-10">
                                    <Badge className="bg-brand-purple text-white border-0 shadow-md text-xs font-semibold">
                                        {genre}
                                    </Badge>
                                </div>
                            </div>

                            {/* CTA below cover on desktop */}
                            <div className="mt-6 hidden lg:flex flex-col gap-3">
                                <Button
                                    asChild
                                    size="lg"
                                    className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white font-bold rounded-xl shadow-md hover:shadow-brand-orange/30 transition-all duration-200 group"
                                >
                                    <Link href="/contato" className="flex items-center justify-center gap-2">
                                        <Sparkles size={16} />
                                        Tenho Interesse
                                        <ArrowRight
                                            size={15}
                                            className="group-hover:translate-x-0.5 transition-transform"
                                        />
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    variant="outline"
                                    size="lg"
                                    className="w-full border-brand-blue/30 text-brand-blue hover:bg-brand-blue hover:text-white transition-all rounded-xl"
                                >
                                    <Link href={isBook ? "/catalogo" : "/lancamentos"}>
                                        Ver mais títulos
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* ── Right: Book Info (3 cols) ──────────────────────────── */}
                    <div className="lg:col-span-3 flex flex-col gap-8">

                        {/* Badges */}
                        <div className="flex flex-wrap gap-2">
                            <Badge className="bg-brand-purple/10 text-brand-purple border-brand-purple/20 font-semibold text-xs">
                                {genre}
                            </Badge>
                            {ageRange && (
                                <Badge className="bg-brand-orange/10 text-brand-orange border-brand-orange/20 font-semibold text-xs">
                                    {ageRange}
                                </Badge>
                            )}
                            {!isBook && (
                                <Badge className="bg-green-100 text-green-700 border-green-200 font-semibold text-xs">
                                    Novo Lançamento
                                </Badge>
                            )}
                        </div>

                        {/* Title + Author */}
                        <div>
                            <h1 className="font-display text-3xl sm:text-4xl font-bold text-brand-blue leading-tight mb-3">
                                {item.title}
                            </h1>
                            <p className="flex items-center gap-2 text-xl text-gray-500">
                                <User size={18} className="text-brand-purple/50" />
                                por{" "}
                                <span className="font-semibold text-gray-600">{item.author}</span>
                            </p>

                            {/* ── Star Rating ──────────────────────────────── */}
                            <div className="flex items-center gap-1 mt-4">
                                {Array.from({ length: 5 }, (_, i) => {
                                    const pos = i + 1; // 1-based position
                                    const full = Math.floor(item.rating);
                                    const hasHalf = item.rating % 1 >= 0.25 && item.rating % 1 < 0.75;
                                    if (pos <= full) {
                                        // Full star
                                        return (
                                            <Star
                                                key={i}
                                                size={20}
                                                className="text-brand-orange"
                                                fill="currentColor"
                                            />
                                        );
                                    }
                                    if (pos === full + 1 && hasHalf) {
                                        // Half star
                                        return (
                                            <StarHalf
                                                key={i}
                                                size={20}
                                                className="text-brand-orange"
                                                fill="currentColor"
                                            />
                                        );
                                    }
                                    // Empty star
                                    return (
                                        <Star
                                            key={i}
                                            size={20}
                                            className="text-slate-300"
                                        />
                                    );
                                })}
                                {/* Numeric score */}
                                <span className="font-display font-bold text-xl text-brand-blue ml-2">
                                    {item.rating.toFixed(1)}
                                </span>
                                {/* Divider + review count */}
                                <span className="border-l border-slate-200 ml-4 pl-4 text-sm text-slate-400">
                                    127 avaliações
                                </span>
                            </div>
                        </div>

                        {/* Sinopse */}
                        <div>
                            <h2 className="text-xs font-bold uppercase tracking-widest text-brand-orange mb-3">
                                Sinopse
                            </h2>
                            <p className="text-gray-700 leading-relaxed text-base">
                                {item.description}
                            </p>
                            {/* Extended synopsis flavour text */}
                            <p className="text-gray-600 leading-relaxed text-base mt-4">
                                Uma história cuidadosamente elaborada pela Axion Editora para
                                encantar leitores de todas as idades. Com uma narrativa envolvente
                                e personagens memoráveis, este livro promete despertar a imaginação
                                e criar momentos especiais entre pais e filhos, professores e alunos.
                            </p>
                        </div>

                        {/* ── Informações Técnicas ─ card redesign ── */}
                        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                            <h2 className="font-display font-bold text-brand-blue text-xl mb-6">
                                Informações Técnicas
                            </h2>

                            {/* 2-column icon grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                                {/* Páginas */}
                                <div className="flex items-center gap-4">
                                    <div className="size-12 rounded-full bg-brand-purple/10 text-brand-purple flex items-center justify-center shrink-0">
                                        <BookOpen size={20} strokeWidth={1.6} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500">Páginas</p>
                                        <p className="font-bold text-brand-blue text-lg leading-tight">
                                            {item.pages ?? "N/D"}
                                        </p>
                                    </div>
                                </div>

                                {/* Faixa Etária */}
                                <div className="flex items-center gap-4">
                                    <div className="size-12 rounded-full bg-brand-purple/10 text-brand-purple flex items-center justify-center shrink-0">
                                        <User size={20} strokeWidth={1.6} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500">Faixa Etária</p>
                                        <p className="font-bold text-brand-blue text-lg leading-tight">
                                            {ageRange ?? "Todas as idades"}
                                        </p>
                                    </div>
                                </div>

                                {/* Lançamento */}
                                <div className="flex items-center gap-4">
                                    <div className="size-12 rounded-full bg-brand-orange/10 text-brand-orange flex items-center justify-center shrink-0">
                                        <Calendar size={20} strokeWidth={1.6} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500">Lançamento</p>
                                        <p className="font-bold text-brand-blue text-lg leading-tight">
                                            {item.publicationYear ??
                                                ("publishedAt" in item
                                                    ? new Date(item.publishedAt).getFullYear().toString()
                                                    : "N/D")}
                                        </p>
                                    </div>
                                </div>

                            </div>

                            {/* ISBN — full width */}
                            <div className="mt-6 pt-5 border-t border-slate-100">
                                <p className="text-sm text-brand-purple font-semibold mb-0.5">ISBN</p>
                                <p className="font-bold text-brand-blue text-base tracking-wide">
                                    {item.isbn ?? "N/D"}
                                </p>
                            </div>
                        </div>

                        {/* Mobile CTA */}
                        <div className="flex flex-col sm:flex-row gap-3 lg:hidden">
                            <Button
                                asChild
                                size="lg"
                                className="flex-1 bg-brand-orange hover:bg-brand-orange/90 text-white font-bold rounded-xl shadow-md group"
                            >
                                <Link href="/contato" className="flex items-center justify-center gap-2">
                                    <Sparkles size={15} />
                                    Tenho Interesse
                                    <ArrowRight
                                        size={14}
                                        className="group-hover:translate-x-0.5 transition-transform"
                                    />
                                </Link>
                            </Button>
                            <Button
                                asChild
                                variant="outline"
                                size="lg"
                                className="flex-1 border-brand-blue/30 text-brand-blue hover:bg-brand-blue hover:text-white transition-all rounded-xl"
                            >
                                <Link href={isBook ? "/catalogo" : "/lancamentos"}>
                                    Ver mais títulos
                                </Link>
                            </Button>
                        </div>

                        {/* Sobre o Autor */}
                        <div className="p-6 rounded-2xl bg-gradient-to-br from-brand-blue/5 to-brand-purple/5 border border-brand-blue/10">
                            <h2 className="text-xs font-bold uppercase tracking-widest text-brand-orange mb-3">
                                Sobre o Autor
                            </h2>
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-white shadow-sm shrink-0">
                                    <User size={20} className="text-brand-purple" />
                                </div>
                                <div>
                                    <p className="font-bold text-brand-blue text-sm mb-1">
                                        {item.author}
                                    </p>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {item.authorBio ??
                                            `${item.author} é escritor(a) e educador(a) com experiência em literatura infantojuvenil, dedicado(a) a criar histórias que inspiram crianças e jovens em todo o Brasil.`}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Related Books ─────────────────────────────────────────── */}
            {related.length > 0 && (
                <section className="bg-white border-t border-slate-100 py-12">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-end justify-between mb-8">
                            <div>
                                <p className="text-brand-orange text-xs font-bold uppercase tracking-widest mb-1">
                                    Descubra mais
                                </p>
                                <h2 className="font-display text-2xl font-bold text-brand-blue">
                                    Você também pode gostar
                                </h2>
                            </div>
                            <Link
                                href={isBook ? "/catalogo" : "/lancamentos"}
                                className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-brand-orange hover:text-brand-blue transition-colors group"
                            >
                                Ver todos
                                <ArrowRight
                                    size={13}
                                    className="group-hover:translate-x-0.5 transition-transform"
                                />
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            {related.map((rel) =>
                                isBook ? (
                                    <BookCard key={rel.id} variant="book" item={rel as Book} />
                                ) : (
                                    <BookCard key={rel.id} variant="release" item={rel as Release} />
                                )
                            )}
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}
