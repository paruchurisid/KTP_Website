import Link from "next/link";
import { ArrowDownRight } from "lucide-react";
import { companies, pillars } from "@/data/site";
import { getMembers } from "@/data/members";

export default async function Home() {
  const members=await getMembers();
  return (
    <main id="main">
      <section className="hero">
        <div className="wrap">
          <p className="eyebrow">The Ohio State University · Kappa Theta Pi</p>
          <h1 className="display">Technology is better built <span className="terminal words"><span>together</span><span>by engineers</span><span>by designers</span><span>by founders</span><span>by analysts</span><i className="cursor" /></span></h1>
          <div className="hero-bottom"><p className="hero-copy">A co-ed professional fraternity for people building what comes next in Columbus and beyond.</p>
          <div className="actions"><Link className="button" href="/rush">Rush KTP</Link><Link className="button secondary" href="/about">Meet the chapter</Link></div>
          </div>
        </div>
      </section>
      <section className="stat-band" aria-label="Chapter statistics"><div className="wrap stats"><div><strong>{members.filter(m=>m.role!=="alumni").length}+</strong><span>active members</span></div><div><strong>6</strong><span>pledge classes</span></div><div><strong>5</strong><span>grad years</span></div><div><strong>17+</strong><span>companies represented</span></div></div></section>
      <section className="section pillars-section"><div className="wrap"><div className="section-heading"><p className="eyebrow dark">Our foundation</p><h2 className="display">More than a network.<br/>A place to belong.</h2></div><div className="pillar-grid">{pillars.map((p,i)=><article key={p.title}><span>{String(i+1).padStart(2,"0")}</span><i>{p.icon}</i><h3>{p.title}</h3><p>{p.text}</p></article>)}</div></div></section>
      <section className="network-section"><div className="wrap network-heading"><p className="eyebrow">Where members work</p><h2 className="display">From Columbus<br/>to everywhere.</h2></div><div className="marquee"><div>{[...companies,...companies].map((name,i)=><span key={`${name}-${i}`}>{name}</span>)}</div></div></section>
      <section className="rush-band"><div className="wrap"><div><p className="eyebrow dark">Autumn 2026 recruitment</p><h2 className="display">Find your people.<br/>Build your future.</h2></div><Link href="/rush" className="circle-link" aria-label="Explore Autumn rush"><ArrowDownRight/><span>Explore rush</span></Link></div></section>
    </main>
  );
}
