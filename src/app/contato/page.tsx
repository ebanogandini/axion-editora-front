"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, MessageCircle, CheckCircle2, Sparkles, BookOpen, Star } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactInfo } from "@/data/mockData";

interface FormState {
    nome: string;
    email: string;
    assunto: string;
    mensagem: string;
}

const EMPTY_FORM: FormState = {
    nome: "",
    email: "",
    assunto: "",
    mensagem: "",
};

export default function ContatoPage() {
    const [form, setForm] = useState<FormState>(EMPTY_FORM);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    /** Validates all fields and email format. */
    const isValid = () =>
        form.nome.trim() !== "" &&
        form.email.trim() !== "" &&
        form.assunto.trim() !== "" &&
        form.mensagem.trim() !== "";

    const isEmailValid = (email: string) =>
        email.includes("@") && email.includes(".");

    const handleSendEmail = () => {
        if (!isValid()) return;
        if (!isEmailValid(form.email)) {
            alert("Por favor, insira um endereço de e-mail válido.");
            return;
        }
        const subject = encodeURIComponent(form.assunto);
        const body = encodeURIComponent(
            `Nome: ${form.nome}\nE-mail: ${form.email}\n\n${form.mensagem}`
        );
        window.location.href = `mailto:contato@axioneditora.com.br?subject=${subject}&body=${body}`;
    };

    const handleSendWhatsApp = () => {
        if (!isValid()) return;
        if (!isEmailValid(form.email)) {
            alert("Por favor, insira um endereço de e-mail válido.");
            return;
        }
        const text = encodeURIComponent(
            `Olá! Meu nome é ${form.nome} (${form.email}).\n\n*Assunto:* ${form.assunto}\n\n${form.mensagem}`
        );
        window.open(`https://wa.me/5511974911974?text=${text}`, "_blank");
    };

    const handleReset = () => setSubmitted(false);

    return (
        <div className="flex flex-col">
            {/* ── Page Hero — premium glassmorphism ─────────────────────── */}
            <section className="relative overflow-hidden bg-brand-blue py-28 md:py-36">

                {/* ── Layer 1: Volumetric light orbs ── */}
                {/* Orange hotspot — top-left */}
                <div className="pointer-events-none absolute -top-32 -left-32 size-[500px] rounded-full bg-sky-300/20 blur-[120px]" />
                {/* Purple hotspot — bottom-right */}
                <div className="pointer-events-none absolute -bottom-32 -right-16 size-[480px] rounded-full bg-brand-gold/40 blur-[120px]" />
                {/* Cool white fill — top-right */}
                <div className="pointer-events-none absolute -top-20 right-0 size-72 rounded-full bg-white/8 blur-[80px]" />

                {/* ── Layer 2: Floating decorative icons ── */}
                <BookOpen
                    size={80}
                    strokeWidth={0.8}
                    className="pointer-events-none absolute top-10 left-[8%] rotate-[-18deg] text-white opacity-20 animate-pulse"
                />
                <Sparkles
                    size={36}
                    className="pointer-events-none absolute top-16 right-[12%] rotate-12 text-sky-300 opacity-30 animate-pulse"
                />
                <Star
                    size={28}
                    strokeWidth={1}
                    className="pointer-events-none absolute bottom-12 left-[14%] rotate-6 text-white opacity-25"
                    fill="currentColor"
                />
                <Mail
                    size={56}
                    strokeWidth={0.7}
                    className="pointer-events-none absolute bottom-8 right-[9%] rotate-[12deg] text-white opacity-15 animate-pulse"
                />
                <Star
                    size={16}
                    strokeWidth={1}
                    className="pointer-events-none absolute top-1/2 left-[5%] text-sky-300 opacity-40"
                    fill="currentColor"
                />

                {/* ── Layer 3: Glassmorphism content card ── */}
                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-[2.5rem] shadow-2xl shadow-brand-blue/50 p-8 sm:p-12 md:p-16 flex flex-col items-center text-center">

                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 border border-white/25 text-white text-sm font-medium mb-8">
                            <Sparkles size={15} className="text-sky-300" />
                            Atendimento Personalizado
                        </div>

                        {/* Main title */}
                        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-brand-gold-dark leading-tight mb-6 drop-shadow-lg">
                            Fale Conosco
                        </h1>

                        {/* Subtitle */}
                        <p className="text-blue-100/90 text-lg max-w-2xl leading-relaxed">
                            Quer levar a magia da Axion para sua casa, escola ou livraria? Seja
                            para adquirir nossos títulos, propor parcerias de sucesso ou enviar
                            seu manuscrito, nossa equipe está pronta para te atender!
                        </p>
                    </div>
                </div>
            </section>

            {/* ── Two-Column Layout ─────────────────────────────────────── */}
            <section className="flex-1 py-14 bg-brand-bg">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">

                        {/* ── Left: Contact Info (2 cols) ───────────────────── */}
                        <aside className="lg:col-span-2 flex flex-col gap-8">
                            <div>
                                <span className="inline-block text-sky-500 text-xs font-bold uppercase tracking-widest mb-2">
                                    Informações
                                </span>
                                <h2 className="font-display text-2xl font-bold text-brand-gold-dark mb-1 leading-tight">
                                    Nosso Contato
                                </h2>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    Estamos sempre disponíveis para responder suas perguntas e ouvir
                                    suas ideias.
                                </p>
                            </div>

                            <ul className="flex flex-col gap-5">
                                {/* Email */}
                                <li className="flex items-start gap-4 group">
                                    <div className="p-3 rounded-xl bg-brand-gold/10 group-hover:bg-brand-gold transition-colors duration-300 shrink-0">
                                        <Mail
                                            size={18}
                                            className="text-brand-gold-dark group-hover:text-white transition-colors duration-300"
                                        />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-0.5">
                                            E-mail
                                        </p>
                                        <a
                                            href={`mailto:${contactInfo.email}`}
                                            className="text-sm font-medium text-brand-gold-dark hover:text-sky-500 transition-colors duration-200 break-all"
                                        >
                                            {contactInfo.email}
                                        </a>
                                    </div>
                                </li>

                                {/* Phone */}
                                <li className="flex items-start gap-4 group">
                                    <div className="p-3 rounded-xl bg-brand-gold/10 group-hover:bg-brand-gold transition-colors duration-300 shrink-0">
                                        <Phone
                                            size={18}
                                            className="text-brand-gold-dark group-hover:text-white transition-colors duration-300"
                                        />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-0.5">
                                            Telefone
                                        </p>
                                        <a
                                            href={`tel:${contactInfo.phone.replace(/\D/g, "")}`}
                                            className="text-sm font-medium text-brand-gold-dark hover:text-sky-500 transition-colors duration-200"
                                        >
                                            {contactInfo.phone}
                                        </a>
                                    </div>
                                </li>

                                {/* Address */}
                                <li className="flex items-start gap-4 group">
                                    <div className="p-3 rounded-xl bg-sky-100 group-hover:bg-sky-500 transition-colors duration-300 shrink-0">
                                        <MapPin
                                            size={18}
                                            className="text-sky-600 group-hover:text-white transition-colors duration-300"
                                        />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-0.5">
                                            Endereço
                                        </p>
                                        <p className="text-sm font-medium text-brand-gold-dark leading-snug">
                                            {contactInfo.address}
                                        </p>
                                    </div>
                                </li>
                            </ul>

                            {/* Decorative card */}
                            <div className="mt-2 p-6 rounded-2xl bg-gradient-to-br from-brand-blue to-brand-gold-dark text-white">
                                <p className="font-display text-lg font-bold mb-2">
                                    Quer publicar conosco?
                                </p>
                                <p className="text-white/70 text-sm leading-relaxed">
                                    Aceitamos manuscritos de autores brasileiros. Envie seu texto
                                    pelo formulário ao lado com o assunto "Manuscrito".
                                </p>
                            </div>
                        </aside>

                        {/* ── Right: Contact Form (3 cols) ──────────────────── */}
                        <div className="lg:col-span-3 flex flex-col">
                            <div className="bg-white rounded-2xl shadow-md border border-slate-100 p-8 h-full flex flex-col">
                                {submitted ? (
                                    /* ── Success State ─────────────────────────── */
                                    <div className="flex flex-col items-center justify-center py-12 text-center gap-5">
                                        <div className="p-5 rounded-full bg-green-50">
                                            <CheckCircle2
                                                size={44}
                                                className="text-green-500"
                                                strokeWidth={1.5}
                                            />
                                        </div>
                                        <div>
                                            <h3 className="font-display text-2xl font-bold text-brand-gold-dark mb-2">
                                                Mensagem enviada!
                                            </h3>
                                            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                                                Sua mensagem foi enviada com sucesso. Nossa equipe
                                                retornará em até 2 dias úteis.
                                            </p>
                                        </div>
                                        <button
                                            onClick={handleReset}
                                            className="mt-2 px-6 py-2.5 rounded-xl border border-brand-gold/30 text-brand-gold-dark text-sm font-semibold hover:bg-brand-gold hover:text-white transition-all duration-200"
                                        >
                                            Enviar outra mensagem
                                        </button>
                                    </div>
                                ) : (
                                    /* ── Contact Form ──────────────────────────── */
                                    <form noValidate className="flex flex-col gap-5 flex-1">
                                        <div>
                                            <h2 className="font-display text-xl font-bold text-brand-gold-dark mb-1">
                                                Como podemos te ajudar?
                                            </h2>
                                            <p className="text-gray-400 text-xs">
                                                Preencha os campos e escolha como prefere entrar em contato.
                                            </p>
                                        </div>

                                        {/* Nome + Email */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div className="flex flex-col gap-1.5">
                                                <label
                                                    htmlFor="nome"
                                                    className="text-xs font-semibold text-slate-600 uppercase tracking-wide"
                                                >
                                                    Nome
                                                </label>
                                                <Input
                                                    id="nome"
                                                    name="nome"
                                                    type="text"
                                                    placeholder="Seu nome completo"
                                                    value={form.nome}
                                                    onChange={handleChange}
                                                    required
                                                    className="border-slate-200 focus:border-brand-blue focus:ring-brand-blue/20 text-sm"
                                                />
                                            </div>
                                            <div className="flex flex-col gap-1.5">
                                                <label
                                                    htmlFor="email"
                                                    className="text-xs font-semibold text-slate-600 uppercase tracking-wide"
                                                >
                                                    E-mail
                                                </label>
                                                <Input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    placeholder="seu@email.com"
                                                    value={form.email}
                                                    onChange={handleChange}
                                                    required
                                                    className="border-slate-200 focus:border-brand-blue focus:ring-brand-blue/20 text-sm"
                                                />
                                            </div>
                                        </div>

                                        {/* Assunto */}
                                        <div className="flex flex-col gap-1.5">
                                            <label
                                                htmlFor="assunto"
                                                className="text-xs font-semibold text-slate-600 uppercase tracking-wide"
                                            >
                                                Assunto
                                            </label>
                                            <Input
                                                id="assunto"
                                                name="assunto"
                                                type="text"
                                                placeholder="Ex: Dúvida sobre um livro, Manuscrito..."
                                                value={form.assunto}
                                                onChange={handleChange}
                                                required
                                                className="border-slate-200 focus:border-brand-blue focus:ring-brand-blue/20 text-sm"
                                            />
                                        </div>

                                        {/* Mensagem */}
                                        <div className="flex flex-col gap-1.5 flex-1">
                                            <label
                                                htmlFor="mensagem"
                                                className="text-xs font-semibold text-slate-600 uppercase tracking-wide"
                                            >
                                                Mensagem
                                            </label>
                                            <Textarea
                                                id="mensagem"
                                                name="mensagem"
                                                placeholder="Escreva sua mensagem aqui..."
                                                value={form.mensagem}
                                                onChange={handleChange}
                                                required
                                                rows={7}
                                                className="border-slate-200 focus:border-brand-blue focus:ring-brand-blue/20 text-sm resize-none flex-1 min-h-[160px]"
                                            />
                                        </div>

                                        {/* ── Split CTA buttons ── */}
                                        <div className="flex flex-col sm:flex-row gap-3 mt-1">
                                            {/* Email */}
                                            <button
                                                type="button"
                                                onClick={handleSendEmail}
                                                disabled={!isValid()}
                                                className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-brand-blue hover:bg-brand-blue/90 text-white font-bold text-sm shadow-md hover:scale-[1.02] transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
                                            >
                                                <Mail size={16} />
                                                Enviar por E-mail
                                            </button>

                                            {/* WhatsApp */}
                                            <button
                                                type="button"
                                                onClick={handleSendWhatsApp}
                                                disabled={!isValid()}
                                                className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold text-sm shadow-md hover:scale-[1.02] transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
                                            >
                                                <MessageCircle size={16} />
                                                Enviar pelo WhatsApp
                                            </button>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
