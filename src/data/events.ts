import type { ChapterEvent, Faq, RushEvent } from "@/types";

const rushEvents: RushEvent[] = [
  { id: "meet-ktp", title: "Meet KTP", startsAt: "2026-09-01T18:30:00-04:00", location: "Ohio Union · Great Hall Meeting Room", description: "Start here. Meet members, hear what we build, and get a feel for the chapter.", rsvpUrl: "https://forms.gle/example", isOpen: true },
  { id: "tech-night", title: "Build Night", startsAt: "2026-09-03T19:00:00-04:00", location: "Dreese Labs · Room 113", description: "A low-pressure team challenge—no coding experience required.", rsvpUrl: "https://forms.gle/example", isOpen: true },
  { id: "professional", title: "Professional Night", startsAt: "2026-09-08T18:30:00-04:00", location: "Baker Systems · Room 180", description: "Practice the real skills that make internships, interviews, and careers click.", isOpen: true },
  { id: "coffee", title: "Coffee Chats", startsAt: "2026-09-10T17:30:00-04:00", location: "18th Avenue Library", description: "Small conversations with members across majors and pledge classes.", isOpen: true },
  { id: "invite", title: "Chapter Night", startsAt: "2026-09-13T18:00:00-04:00", location: "The Oval", description: "A final chance to see how our chapter works together.", isOpen: false },
];
const chapterEvents: ChapterEvent[] = [
  { id: "hack", title: "Buckeye Build Weekend", date: "2026-10-18", category: "tech", blurb: "Teams prototyped campus tools in 36 hours.", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80" },
  { id: "chase", title: "Inside Fintech with Chase", date: "2026-10-04", category: "professional", blurb: "Engineers and product leaders unpacked the systems behind modern banking.", image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80" },
  { id: "service", title: "Code for Columbus", date: "2026-09-27", category: "service", blurb: "A volunteer workshop introducing middle-school students to creative coding.", image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80" },
  { id: "formal", title: "Autumn Chapter Retreat", date: "2026-09-19", category: "social", blurb: "A screen-free day for new friendships, traditions, and a little friendly competition.", image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1200&q=80" },
  { id: "design", title: "Design Systems Studio", date: "2026-11-06", category: "tech", blurb: "Designers and developers paired up to build accessible component systems.", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80" },
  { id: "alumni", title: "Midwest Alumni Night", date: "2026-11-14", category: "professional", blurb: "Candid career conversations with alumni across Columbus and the Midwest.", image: "https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=1200&q=80" },
];
const faqs: Faq[] = [
  { id: "who", question: "Who can rush?", answer: "Any Ohio State undergraduate who is curious about technology can rush, regardless of major or prior technical experience." },
  { id: "look", question: "What does KTP look for?", answer: "Curiosity, follow-through, kindness, and a willingness to teach and learn. We care more about how you think and collaborate than what is already on your résumé." },
  { id: "majors", question: "What majors are represented?", answer: "Our chapter spans CSE, Data Analytics, Information Systems, ISE, Computer Engineering, Marketing, Design, Finance, and more." },
  { id: "time", question: "What is the time commitment?", answer: "The pledge process typically requires two chapter commitments plus one team or social activity each week. We publish the full calendar before bids are accepted." },
  { id: "dues", question: "How much are dues?", answer: "Dues are shared transparently before bids are accepted. Payment plans and confidential financial support are available so cost is not the deciding factor." },
  { id: "conflicts", question: "Can I join other organizations?", answer: "Absolutely. Members participate in student government, design clubs, consulting groups, cultural organizations, research labs, and athletics." },
];
export async function getRushEvents(): Promise<RushEvent[]> { return [...rushEvents].sort((a,b) => a.startsAt.localeCompare(b.startsAt)); }
export async function getUpcomingEvents(): Promise<RushEvent[]> { return getRushEvents(); }
export async function getChapterEvents(): Promise<ChapterEvent[]> { return chapterEvents; }
export async function getFaqs(): Promise<Faq[]> { return faqs; }
