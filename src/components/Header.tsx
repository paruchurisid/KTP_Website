"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false); const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname(); const panel = useRef<HTMLDivElement>(null); const trigger = useRef<HTMLButtonElement>(null);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 40); onScroll(); window.addEventListener("scroll", onScroll, { passive: true }); return () => window.removeEventListener("scroll", onScroll); }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const focusable = panel.current?.querySelectorAll<HTMLElement>("a,button"); focusable?.[0]?.focus();
    const key = (event: KeyboardEvent) => { if (event.key === "Escape") { setOpen(false); trigger.current?.focus(); } if (event.key === "Tab" && focusable?.length) { const first=focusable[0], last=focusable[focusable.length-1]; if(event.shiftKey && document.activeElement===first){event.preventDefault();last.focus();} else if(!event.shiftKey && document.activeElement===last){event.preventDefault();first.focus();} } };
    document.addEventListener("keydown", key); return () => { document.removeEventListener("keydown", key); document.body.style.overflow=""; };
  }, [open]);
  return <header className={`site-header ${scrolled || pathname !== "/" ? "scrolled" : ""}`}>
    <div className="header-inner"><Link href="/" className="wordmark" aria-label="Kappa Theta Pi at The Ohio State University home"><span>KΘΠ</span><small>The Ohio State University</small></Link>
      <nav className="desktop-nav" aria-label="Primary">{nav.map(item=><Link className={pathname===item.href?"active":""} href={item.href} key={item.href}>{item.label}</Link>)}</nav>
      <button ref={trigger} className="menu-button" onClick={()=>setOpen(true)} aria-label="Open menu" aria-expanded={open}><Menu /></button>
    </div>
    <div ref={panel} className={`mobile-menu ${open?"open":""}`} aria-hidden={!open}><button className="menu-close" onClick={()=>setOpen(false)} aria-label="Close menu"><X /></button><p className="eyebrow">Explore KTP</p>{nav.map((item,index)=><Link onClick={()=>setOpen(false)} href={item.href} key={item.href}><span>0{index+1}</span>{item.label}</Link>)}<p className="menu-note">The Ohio State University<br/>Columbus, Ohio</p></div>
  </header>;
}
