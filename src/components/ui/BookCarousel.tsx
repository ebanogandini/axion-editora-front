"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BookCard from "@/components/ui/BookCard";
import type { Book, Release } from "@/types";

interface BookCarouselProps {
    items: (Book | Release)[];
}

function isRelease(item: Book | Release): item is Release {
    return "publishedAt" in item;
}

export default function BookCarousel({ items }: BookCarouselProps) {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        scrollRef.current?.scrollBy({
            left: direction === "left" ? -420 : 420,
            behavior: "smooth",
        });
    };

    return (
        <div className="relative group">
            {/* ── Left arrow (only when overflow is possible) ─────── */}
            {items.length > 4 && (
                <button
                    onClick={() => scroll("left")}
                    aria-label="Rolar para a esquerda"
                    className="hidden md:flex absolute top-1/2 -translate-y-1/2 -left-5 z-10
                           items-center justify-center
                           bg-white/80 backdrop-blur-md text-brand-blue
                           p-3 rounded-full shadow-lg
                           hover:bg-white hover:scale-110
                           transition-all duration-300
                           opacity-0 group-hover:opacity-100
                           cursor-pointer"
                >
                    <ChevronLeft size={24} strokeWidth={2} />
                </button>
            )}

            {/* ── Scrollable track ─────────────────────────────────── */}
            <div
                ref={scrollRef}
                className={`flex overflow-x-auto gap-6 pb-8 pt-4
                            snap-x snap-mandatory scroll-smooth
                            [&::-webkit-scrollbar]:hidden
                            [-ms-overflow-style:none]
                            [scrollbar-width:none]
                            ${items.length <= 4 ? "md:justify-center" : ""}`}
            >
                {items.map((item, i) => (
                    <div
                        key={item.id}
                        className="snap-start shrink-0 w-[85%] sm:w-[45%] md:w-[30%] lg:w-[22%]"
                    >
                        {isRelease(item) ? (
                            <BookCard variant="release" item={item} index={i} />
                        ) : (
                            <BookCard variant="book" item={item} index={i} />
                        )}
                    </div>
                ))}
            </div>

            {/* ── Right arrow (only when overflow is possible) ────── */}
            {items.length > 4 && (
                <button
                    onClick={() => scroll("right")}
                    aria-label="Rolar para a direita"
                    className="hidden md:flex absolute top-1/2 -translate-y-1/2 -right-5 z-10
                           items-center justify-center
                           bg-white/80 backdrop-blur-md text-brand-blue
                           p-3 rounded-full shadow-lg
                           hover:bg-white hover:scale-110
                           transition-all duration-300
                           opacity-0 group-hover:opacity-100
                           cursor-pointer"
                >
                    <ChevronRight size={24} strokeWidth={2} />
                </button>
            )}
        </div>
    );
}
