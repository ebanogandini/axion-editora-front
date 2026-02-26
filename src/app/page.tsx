import Image from "next/image";
import Link from "next/link";
import { BookOpen, Star, Sparkles, ArrowRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import BookCard from "@/components/ui/BookCard";
import BookCarousel from "@/components/ui/BookCarousel";
import { books, releases, whyAxionFeatures } from "@/data/mockData";

// ── Feature icon map — keys match WhyAxionFeature.iconKey values ─────────────
const FEATURE_ICONS: Record<string, React.ReactNode> = {
  sparkles: <BookOpen size={22} strokeWidth={1.5} />,
  star: <Star size={22} strokeWidth={1.5} />,
  heart: <Heart size={22} strokeWidth={1.5} />,
};

// Icon bg color per index
const FEATURE_ICON_COLORS = [
  "bg-brand-gold/10 text-brand-gold-dark",
  "bg-brand-gold/10 text-brand-gold-dark",
  "bg-sky-100 text-sky-600",
];

const highlights = books.filter((b) => b.isHighlight);
const novidades = releases.filter((r) => r.isNew);

export default function HomePage() {
  return (
    <div className="flex flex-col bg-white">

      {/* ══════════════════════════════════════════════════════════════
          HERO — 50/50 split, light background
      ══════════════════════════════════════════════════════════════ */}
      <section className="relative bg-slate-50 overflow-hidden min-h-[calc(100vh-64px)] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6 items-center">

            {/* ── Left: Content ───────────────────────────────── */}
            <div className="flex flex-col items-center lg:items-start gap-6 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-slate-500 text-sm font-medium mx-auto md:mx-0">
                <Sparkles size={13} className="text-brand-gold" />
                Novas histórias toda semana
              </div>

              {/* Heading */}
              <h1 className="font-display font-bold text-brand-dark leading-none">
                <span className="text-5xl sm:text-6xl lg:text-7xl block">
                  Histórias que
                </span>
                <span className="text-5xl sm:text-6xl lg:text-7xl block">
                  encantam{" "}
                  <span className="text-brand-gold-dark">gerações</span>
                </span>
              </h1>

              {/* Description */}
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-md">
                Descubra o mundo mágico da leitura com os livros da{" "}
                <strong className="text-brand-dark font-semibold">Axion Editora</strong>.
                Histórias que inspiram, educam e{" "}
                <strong className="text-brand-gold-dark font-semibold">transformam vidas</strong>.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap items-center gap-3 justify-center lg:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="bg-brand-blue hover:bg-brand-blue/90 text-white font-semibold px-7 rounded-xl shadow-md group"
                >
                  <Link href="/catalogo" className="flex items-center gap-2">
                    <BookOpen size={16} />
                    Explorar Catálogo
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-slate-300 text-slate-600 hover:border-brand-gold hover:text-brand-gold-dark font-semibold px-7 rounded-xl"
                >
                  <Link href="/lancamentos">Ver Lançamentos</Link>
                </Button>
              </div>

              {/* Stats row */}
              <div className="flex items-center gap-4 sm:gap-8 pt-2 justify-center lg:justify-start">
                <div>
                  <p className="font-display font-bold text-2xl text-brand-gold-dark leading-none">
                    100+
                  </p>
                  <p className="text-xs text-slate-400 mt-1">Títulos Publicados</p>
                </div>
                <div className="h-8 w-px bg-slate-200" />
                <div>
                  <p className="font-display font-bold text-2xl text-brand-gold-dark leading-none">
                    1M+
                  </p>
                  <p className="text-xs text-slate-400 mt-1">Leitores Felizes</p>
                </div>
                <div className="h-8 w-px bg-slate-200" />
                <div className="flex items-center gap-1">
                  <p className="font-display font-bold text-2xl text-sky-500 leading-none">
                    4.9
                  </p>
                  <Star size={16} className="text-sky-400 fill-sky-400 mb-0.5" />
                  <p className="text-xs text-slate-400 mt-1 ml-0.5">Avaliação Média</p>
                </div>
              </div>
            </div>

            {/* ── Right: Logo Jewel ──────────────────────────── */}
            {/* The Outer Wrapper - Handles layout positioning and entrance animation */}
            <div className="relative z-10 flex justify-center lg:justify-end animate-fade-in-up">

              {/* Subtle Background Depth Element behind logo (Desktop only) */}
              <div className="hidden lg:block absolute -inset-10 bg-gradient-radial from-brand-gold/20 to-transparent blur-3xl -z-10 animate-glow-pulse"></div>

              {/* The Floater Wrapper - Handles the continuous levitation */}
              <div className="animate-floating relative">

                {/* The Magical Logo Image */}
                <Image
                  src="/logo.jpeg"
                  alt="Axion Editora Logo"
                  width={600}
                  height={600}
                  priority
                  className="w-56 sm:w-72 md:w-[450px] lg:w-[550px] h-auto mix-blend-multiply drop-shadow-[0_10px_30px_rgba(212,175,55,0.5)] hover:drop-shadow-[0_15px_40px_rgba(212,175,55,0.7)] transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          DESTAQUES — Books grid, left-aligned header
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Left-aligned section header + right "Ver todos" */}
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-dark leading-tight">
                Destaques
              </h2>
              <p className="text-brand-gold-dark/70 text-sm mt-1">
                Os livros mais amados pelos nossos leitores
              </p>
            </div>
            <Link
              href="/catalogo"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 hover:text-brand-gold-dark transition-colors group"
            >
              Ver todos
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          <BookCarousel items={highlights} />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          POR QUE ESCOLHER A AXION?
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Centered heading */}
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-dark text-center mb-12 leading-tight">
            Por que escolher a Axion?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyAxionFeatures.map((feature, i) => (
              <div
                key={feature.title}
                className="group bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 ease-out"
              >
                {/* Icon in colored circle */}
                <div
                  className={`w-11 h-11 rounded-full flex items-center justify-center mb-5 ${FEATURE_ICON_COLORS[i % FEATURE_ICON_COLORS.length]}`}
                >
                  {FEATURE_ICONS[feature.iconKey] ?? <BookOpen size={22} strokeWidth={1.5} />}
                </div>
                <h3 className="font-display font-semibold text-lg text-brand-dark mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          NOVIDADES — Releases grid, left-aligned header
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-dark leading-tight">
                Novidades
              </h2>
              <p className="text-brand-gold-dark/70 text-sm mt-1">
                Chegando às livrarias em breve
              </p>
            </div>
            <Link
              href="/lancamentos"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 hover:text-brand-gold-dark transition-colors group"
            >
              Ver todos
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          <BookCarousel items={novidades} />
        </div>
      </section>
    </div>
  );
}
