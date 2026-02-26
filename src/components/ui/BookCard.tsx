import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Book, Release } from "@/types";

type BookCardProps =
    | { variant: "book"; item: Book; index?: number }
    | { variant: "release"; item: Release; index?: number };

// Soft gradient backgrounds for placeholder covers — cycling through brand colors
const COVER_GRADIENTS = [
    "from-[#e8e4ff] via-[#f0eaff] to-[#fde8f5]",   // purple-pink
    "from-[#dce8ff] via-[#e8f0ff] to-[#e8e4ff]",   // blue-lavender
    "from-[#ffe8d8] via-[#fff0e8] to-[#fde8f5]",   // orange-pink
    "from-[#e4f0ff] via-[#e8f5ff] to-[#e8e4ff]",   // sky-lavender
    "from-[#fde8ff] via-[#f5e8ff] to-[#dce8ff]",   // pink-blue
];

export default function BookCard(props: BookCardProps) {
    const { variant, item, index = 0 } = props;

    const isNewBook = variant === "book" && (item as Book).isNew;
    const badgeLabel = variant === "book" ? (item as Book).genre : "Novo";
    const gradient = COVER_GRADIENTS[index % COVER_GRADIENTS.length];
    const displayNumber = index + 1;

    const hasRealCover = !!item.coverImage && item.coverImage.startsWith("/") && !item.coverImage.endsWith(".svg");

    return (
        <article className="group bg-white rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-out overflow-hidden flex flex-col cursor-pointer">
            {/* Clickable cover area */}
            <Link
                href={`/livro/${item.id}`}
                className={`block relative aspect-[2/3] overflow-hidden ${hasRealCover ? "bg-slate-100" : `bg-gradient-to-br ${gradient} flex items-center justify-center`
                    }`}
            >
                {hasRealCover ? (
                    <Image
                        src={item.coverImage}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    />
                ) : (
                    /* Large number placeholder */
                    <span
                        className="select-none font-display font-bold text-brand-gold/20 leading-none"
                        style={{ fontSize: "clamp(4rem, 8vw, 6rem)" }}
                        aria-hidden="true"
                    >
                        {displayNumber}
                    </span>
                )}

                {/* Genre / Novo badge */}
                <div className="absolute top-3 left-3 flex flex-col gap-1">
                    {isNewBook && (
                        <Badge className="text-[10px] font-bold bg-green-500 text-white border-0 shadow-sm">
                            Novidade
                        </Badge>
                    )}
                    <Badge className="text-[10px] font-semibold bg-white/80 text-brand-gold-dark border-0 shadow-sm backdrop-blur-sm">
                        {badgeLabel}
                    </Badge>
                </div>
            </Link>

            {/* Content — below the fold, clean and minimal */}
            <div className="flex flex-col gap-1.5 px-3 py-3 flex-1">
                <h3 className="font-display font-semibold text-brand-dark text-sm leading-snug line-clamp-2 group-hover:text-brand-gold-dark transition-colors duration-200">
                    {item.title}
                </h3>
                <p className="text-xs text-brand-gold-dark/70 font-medium">{item.author}</p>

                {/* Rating row */}
                <div className="flex items-center justify-between mt-auto pt-1">
                    <div className="flex items-center gap-1">
                        <Star size={11} className="text-sky-400 fill-sky-400" />
                        <span className="text-xs font-semibold text-slate-600">
                            {item.rating.toFixed(1)}
                        </span>
                    </div>
                    <Button
                        asChild
                        variant="ghost"
                        size="sm"
                        className="h-6 px-2 text-[10px] text-brand-gold-dark hover:bg-brand-gold/10 font-semibold"
                    >
                        <Link href={`/livro/${item.id}`}>Ver mais</Link>
                    </Button>
                </div>
            </div>
        </article>
    );
}
