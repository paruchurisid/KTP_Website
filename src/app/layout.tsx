import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { chapter } from "@/data/chapter";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const display = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-display", weight: ["500", "600", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL(chapter.siteUrl),
  title: { default: chapter.name, template: `%s · ${chapter.shortName}` },
  description: `The co-ed professional technology fraternity at ${chapter.university}.`,
  openGraph: { title: chapter.name, description: `The co-ed professional technology fraternity at ${chapter.university}.`, type: "website", images:[{url:chapter.socialImage,width:900,height:473,alt:chapter.name}] },
  twitter: { card: "summary_large_image", title: chapter.name, description: `The co-ed professional technology fraternity at ${chapter.university}.`, images:[chapter.socialImage] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd={"@context":"https://schema.org","@type":"Organization",name:chapter.name,url:chapter.siteUrl,email:chapter.email,sameAs:[chapter.links.instagram,chapter.links.linkedin,chapter.links.linktree]};
  return <html lang="en"><body className={`${inter.variable} ${display.variable}`}><a className="skip-link" href="#main">Skip to content</a><Header/>{children}<Footer/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd)}}/></body></html>;
}
