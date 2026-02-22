import { BookOpen, Award, Heart, Quote, MapPin, Star, Sparkles } from "lucide-react";
import Link from "next/link";
import { aboutValues } from "@/data/mockData";
import Image from "next/image";
import type { AboutValue } from "@/types";

// Per-card icon + color config — matches prototype exactly
const VALUE_CONFIG: Record<
    AboutValue["iconKey"],
    { icon: React.ReactNode; bg: string; color: string }
> = {
    lightbulb: {
        icon: <BookOpen size={22} strokeWidth={1.6} />,
        bg: "bg-brand-blue/10",
        color: "text-brand-blue",
    },
    award: {
        icon: <Award size={22} strokeWidth={1.6} />,
        bg: "bg-brand-purple/10",
        color: "text-brand-purple",
    },
    users: {
        icon: <Heart size={22} strokeWidth={1.6} />,
        bg: "bg-brand-orange/10",
        color: "text-brand-orange",
    },
};

export default function SobrePage() {
    return (
        <div className="flex flex-col">
            {/* ── Page Header ───────────────────────────────────────────── */}
            <section className="bg-gradient-to-br from-brand-blue to-brand-purple py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
                        Sobre a Axion Editora
                    </h1>
                    <p className="text-blue-200 text-lg max-w-xl mx-auto leading-relaxed">
                        Conheça a história, a missão e os valores de quem coloca amor em
                        cada página.
                    </p>
                </div>
            </section>

            {/* ── Main Content ──────────────────────────────────────────── */}
            <section className="flex-1 py-16 bg-brand-bg">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Hero card — brand logo */}
                    <div className="relative aspect-[21/9] rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-brand-blue/10 via-brand-purple/10 to-brand-orange/5 mb-14 flex items-center justify-center">
                        {/* Decorative rings */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-5">
                            <div className="w-96 h-96 rounded-full border-[40px] border-brand-purple" />
                        </div>
                        <div className="absolute top-4 right-8 w-20 h-20 rounded-full bg-brand-orange/10 blur-xl" />
                        <div className="absolute bottom-4 left-8 w-32 h-32 rounded-full bg-brand-blue/10 blur-xl" />

                        <div className="relative z-10 flex flex-col items-center justify-center text-center p-6 sm:p-10 w-full">
                            <Image
                                src="/logo.jpeg"
                                alt="Axion Editora"
                                width={600}
                                height={600}
                                className="w-48 sm:w-64 md:w-[450px] lg:w-[550px] h-auto object-contain mx-auto mb-8 mix-blend-multiply"
                                priority
                            />
                            <p className="text-sm text-brand-purple/60 font-medium">
                                Fundada em 2019 · São Paulo, Brasil
                            </p>
                        </div>
                    </div>

                    {/* Nossa História */}
                    <article className="prose-article mb-14">
                        <span className="inline-block text-brand-orange text-xs font-bold uppercase tracking-widest mb-2">
                            Nossa trajetória
                        </span>
                        <h2 className="font-display text-3xl font-bold text-brand-blue mb-5 leading-tight">
                            Quem Somos
                        </h2>
                        <div className="space-y-4 text-gray-700 leading-relaxed text-base">
                            <p>
                                Fundada em 2019, a{" "}
                                <strong className="text-brand-blue">Axion Editora</strong>{" "}
                                nasceu do sonho de criar histórias que tocam o coração de
                                crianças e jovens brasileiros. O que começou como um pequeno
                                projeto editorial em São Paulo rapidamente cresceu para se
                                tornar uma das referências em literatura infantojuvenil no
                                Brasil.
                            </p>
                            <p>
                                Com mais de{" "}
                                <strong className="text-brand-blue">100 títulos publicados</strong>{" "}
                                e uma rede de autores e ilustradores espalhados por todo o
                                país, cultivamos histórias que refletem a riqueza cultural
                                brasileira — suas festas, paisagens, sotaques e personagens.
                            </p>
                            <p>
                                Nosso time é formado por autores, ilustradores e educadores
                                apaixonados que acreditam no poder transformador da leitura.
                                Cada livro é cuidadosamente pensado para estimular a
                                imaginação, a empatia e o amor pelo conhecimento.
                            </p>
                        </div>
                    </article>

                    {/* Pull Quote — redesigned magical card */}
                    <figure className="relative my-14 rounded-3xl overflow-hidden p-10 md:p-16 bg-gradient-to-br from-brand-blue via-brand-purple to-brand-orange/90 shadow-2xl shadow-brand-purple/30">

                        {/* Giant background Quote icon */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                            <Quote size={260} strokeWidth={0.8} className="text-white" />
                        </div>

                        {/* Corner Sparkles */}
                        <Sparkles size={20} className="absolute top-6 left-8 text-white/40" />
                        <Star size={14} className="absolute top-8 right-10 text-brand-orange/70" fill="currentColor" />
                        <Sparkles size={16} className="absolute bottom-8 right-12 text-white/30" />
                        <Star size={18} className="absolute bottom-6 left-10 text-white/20" fill="currentColor" />

                        {/* Quote text */}
                        <blockquote className="relative z-10 font-display text-3xl md:text-4xl font-bold leading-tight text-white text-center">
                            &ldquo;Ler é sonhar de olhos abertos.&rdquo;
                        </blockquote>
                        <figcaption className="relative z-10 mt-6 text-center text-white/60 text-sm font-medium tracking-widest uppercase">
                            &mdash; Lema da Axion Editora
                        </figcaption>
                    </figure>

                    {/* Nossa Missão */}
                    <article className="mb-14">
                        <span className="inline-block text-brand-orange text-xs font-bold uppercase tracking-widest mb-2">
                            O que nos move
                        </span>
                        <h2 className="font-display text-3xl font-bold text-brand-blue mb-5 leading-tight">
                            Nossa Missão
                        </h2>
                        <div className="space-y-4 text-gray-700 leading-relaxed text-base">
                            <p>
                                Acreditamos que a leitura é uma das ferramentas mais poderosas
                                de transformação social. Por isso, nossa missão vai além de
                                simplesmente publicar livros: queremos criar experiências que
                                aproximem pais e filhos, que abram janelas para mundos
                                desconhecidos e que plantem a semente do pensamento crítico
                                desde a mais tenra idade.
                            </p>
                            <p>
                                Trabalhamos em parceria com escolas e bibliotecas públicas para
                                garantir que as histórias da Axion cheguem a crianças de todas
                                as regiões do Brasil — do interior do Nordeste às grandes
                                metrópoles do Sul e Sudeste.
                            </p>
                        </div>
                    </article>

                </div>
            </section>

            {/* ── Stats Row ──────────────────────────────────────────────── */}
            <section className="bg-white py-16 border-y border-slate-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { value: "100+", label: "Títulos publicados", color: "text-brand-blue" },
                            { value: "1M+", label: "Leitores felizes", color: "text-brand-purple" },
                            { value: "50+", label: "Autores parceiros", color: "text-brand-orange" },
                            { value: "10+", label: "Prêmios literários", color: "text-brand-blue" },
                        ].map(({ value, label, color }) => (
                            <div key={label}>
                                <p className={`font-display font-bold text-4xl sm:text-5xl ${color} leading-none`}>
                                    {value}
                                </p>
                                <p className="text-sm text-slate-500 mt-2">{label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Nossos Valores ─────────────────────────────────────────── */}
            <section className="bg-slate-50 py-20">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-display font-bold text-3xl text-brand-blue text-center mb-12">
                        Nossos Valores
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {aboutValues.map((value) => {
                            const cfg = VALUE_CONFIG[value.iconKey];
                            return (
                                <div
                                    key={value.title}
                                    className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                                >
                                    {/* Circular colored icon */}
                                    <div className={`size-12 rounded-full flex items-center justify-center mb-6 ${cfg.bg} ${cfg.color}`}>
                                        {cfg.icon}
                                    </div>
                                    <h3 className="font-bold text-brand-blue text-xl mb-3">
                                        {value.title}
                                    </h3>
                                    <p className="text-slate-500 leading-relaxed text-sm">
                                        {value.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>


            {/* ── Onde Estamos ────────────────────────────────────────── */}
            <section className="bg-white py-16 border-t border-slate-100">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Heading */}
                    <h2 className="font-display font-bold text-3xl text-brand-blue text-center mb-4">
                        Onde Estamos
                    </h2>
                    <p className="text-slate-500 text-center mb-10 text-sm">
                        Venha nos fazer uma visita ou tomar um café conosco!
                    </p>

                    {/* Map iframe */}
                    <div className="w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden shadow-md border border-slate-100 relative">
                        <iframe
                            src="https://maps.google.com/maps?q=Rua%20Domingos%20de%20Morais,%202132,%20Vila%20Mariana,%20Sao%20Paulo&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            title="Localização da Axion Editora no Google Maps"
                            className="w-full h-full absolute inset-0 border-0"
                            loading="lazy"
                            allowFullScreen
                        />
                    </div>

                    {/* Address card */}
                    <div className="mt-6 flex items-start gap-3 bg-slate-50 rounded-2xl border border-slate-100 px-6 py-5 shadow-sm">
                        <div className="size-10 rounded-full bg-brand-orange/10 text-brand-orange flex items-center justify-center shrink-0 mt-0.5">
                            <MapPin size={18} strokeWidth={1.8} />
                        </div>
                        <div>
                            <p className="font-bold text-brand-blue text-base leading-snug">
                                Rua Domingos de Morais, nº 2.132, Sala 42
                            </p>
                            <p className="text-sm text-slate-500 mt-0.5">
                                Vila Mariana, São Paulo – SP · CEP: 04036-000
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA ────────────────────────────────────────────────────── */}
            <section className="bg-white py-12 border-t border-slate-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-gray-500 text-sm mb-6">
                        Quer conhecer nossos livros ou falar com nossa equipe?
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Link
                            href="/catalogo"
                            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-brand-orange text-white text-sm font-semibold hover:bg-brand-orange/90 transition-colors shadow-md"
                        >
                            Explorar Catálogo
                        </Link>
                        <Link
                            href="/contato"
                            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl border border-brand-blue/30 text-brand-blue text-sm font-semibold hover:bg-brand-blue hover:text-white transition-all"
                        >
                            Entrar em Contato
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
