// ─────────────────────────────────────────────
// Domain Types — Axion Editora
// ─────────────────────────────────────────────

export interface Category {
    id: string;
    name: string;
    slug: string;
}

export interface AgeRange {
    id: string;
    label: string;
    slug: string;
}

export interface Book {
    id: string;
    title: string;
    author: string;
    description: string;
    /** Relative path under /public or an external URL */
    coverImage: string;
    genre: string;
    ageRange: string;
    /** 0–5 star rating */
    rating: number;
    /** Shown in the Home "Destaques" carousel */
    isHighlight: boolean;
    /** Shown in the Lançamentos page */
    isNew: boolean;
    tags: string[];
    // ── Optional enrichment fields (used in book details page) ──
    pages?: number;
    publicationYear?: string;
    isbn?: string;
    authorBio?: string;
}

export interface Release {
    id: string;
    title: string;
    author: string;
    description: string;
    coverImage: string;
    genre: string;
    ageRange: string;
    tags: string[];
    publishedAt: string; // ISO date string e.g. "2024-01-15"
    /** 0–5 star rating */
    rating: number;
    isNew: boolean;
    // ── Optional enrichment fields (used in book details page) ──
    pages?: number;
    publicationYear?: string;
    isbn?: string;
    authorBio?: string;
}

export interface WhyAxionFeature {
    iconKey: "sparkles" | "star" | "heart";
    title: string;
    description: string;
}

export interface ContactInfo {
    email: string;
    phone: string;
    address: string;
}

export interface AboutValue {
    iconKey: "lightbulb" | "award" | "users";
    title: string;
    description: string;
}
