import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const display = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-display", weight: ["500", "600", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://ktp-ohio-state.pages.dev"),
  title: { default: "Kappa Theta Pi — Ohio State", template: "%s · KTP Ohio State" },
  description: "Ohio State's co-ed professional technology fraternity.",
  openGraph: { title: "Kappa Theta Pi at Ohio State", description: "Technology is better built together.", type: "website", images:[{url:"/og.png",width:900,height:473,alt:"Kappa Theta Pi at Ohio State — Technology is better built together"}] },
  twitter: { card: "summary_large_image", title: "Kappa Theta Pi at Ohio State", description: "Technology is better built together.", images:["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd={"@context":"https://schema.org","@type":"Organization",name:"Kappa Theta Pi at The Ohio State University",url:"https://ktp-ohio-state.pages.dev",email:"hello@ktposu.org",sameAs:["https://www.instagram.com","https://www.linkedin.com","https://github.com"]};
  return <html lang="en"><body className={`${inter.variable} ${display.variable}`}><a className="skip-link" href="#main">Skip to content</a><Header/>{children}<Footer/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd)}}/></body></html>;
}
