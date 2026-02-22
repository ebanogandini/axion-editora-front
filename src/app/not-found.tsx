import Link from "next/link";
import { BookX, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 bg-brand-bg">
            {/* Decorative blobs */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-brand-purple/5 blur-3xl" />
                <div className="absolute bottom-1/4 left-1/3 w-64 h-64 rounded-full bg-brand-orange/5 blur-3xl" />
            </div>

            {/* Icon */}
            <div className="relative mb-8">
                {/* Soft glow ring behind the icon */}
                <div className="absolute inset-0 rounded-full bg-brand-purple/10 scale-150 blur-2xl" />
                <div className="relative p-8 rounded-full bg-white shadow-lg">
                    <BookX
                        size={80}
                        className="text-brand-purple/50"
                        strokeWidth={1.2}
                    />
                </div>
            </div>

            {/* 404 label */}
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-brand-orange mb-4">
                Erro 404 · Página não encontrada
            </p>

            {/* Heading */}
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-brand-blue mb-4 leading-tight max-w-sm">
                Oops! Nos perdemos na história.
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-gray-500 max-w-md mb-10 leading-relaxed">
                A página que você está procurando não existe, foi movida ou o livro
                saiu de catálogo.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                    asChild
                    size="lg"
                    className="bg-brand-orange hover:bg-brand-orange/90 text-white font-bold px-8 rounded-xl shadow-md hover:shadow-brand-orange/30 transition-all duration-200 group"
                >
                    <Link href="/" className="flex items-center gap-2">
                        <ArrowLeft
                            size={16}
                            className="group-hover:-translate-x-0.5 transition-transform duration-200"
                        />
                        Voltar para o Início
                    </Link>
                </Button>

                <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-brand-blue/30 text-brand-blue hover:bg-brand-blue hover:text-white transition-all duration-200 font-semibold px-8 rounded-xl group"
                >
                    <Link href="/catalogo" className="flex items-center gap-2">
                        Explorar Catálogo
                        <ArrowRight
                            size={16}
                            className="group-hover:translate-x-0.5 transition-transform duration-200"
                        />
                    </Link>
                </Button>
            </div>

            {/* Decoration strip */}
            <p className="mt-16 text-xs text-slate-300 font-medium tracking-widest uppercase">
                Axion Editora · Histórias que encantam gerações
            </p>
        </section>
    );
}
