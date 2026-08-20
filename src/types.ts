export type MemberRole = "active" | "eboard" | "director" | "alumni";
export interface Member { id: string; firstName: string; lastName: string; pledgeClass: string; gradYear: number; major: string; headshot?: string; linkedin: string; role: MemberRole; position?: string; company?: string; }
export interface RushEvent { id: string; title: string; startsAt: string; location: string; description: string; rsvpUrl?: string; isOpen: boolean; }
export interface ChapterEvent { id: string; title: string; date: string; category: "professional" | "social" | "service" | "tech"; blurb: string; image?: string; }
export interface Faq { id: string; question: string; answer: string; }
