import Link from "next/link";
import { ArrowDownRight } from "lucide-react";
import { companies, pillars } from "@/data/site";
import { getMembers } from "@/data/members";
import { chapter, externalLinkProps } from "@/data/chapter";
import { StatBand } from "@/components/StatBand";

export default async function Home() {
  const members=await getMembers();
  return (
    <main id="main">
      <section className="hero">
        <div className="wrap">
          <p className="eyebrow">The Ohio State University · Kappa Theta Pi</p>
          <h1 className="display">A chapter for <span className="terminal words"><span>engineers.</span><span>designers.</span><span>founders.</span><span>analysts.</span><i className="cursor" /></span></h1>
          <div className="hero-bottom"><p className="hero-copy">A co-ed professional technology fraternity for people building what comes next in Columbus and beyond.</p>
          <div className="actions"><Link className="button" href="/rush">Rush KTP</Link><Link className="button secondary" href="/about">Meet the chapter</Link></div>
          </div>
        </div>
      </section>
      <StatBand activeMembers={members.filter(m=>m.role!=="alumni").length}/>
      <section className="section pillars-section"><div className="wrap"><div className="section-heading"><p className="eyebrow dark">Our foundation</p><h2 className="display">More than a network.<br/>A place to belong.</h2></div><div className="pillar-grid">{pillars.map((p,i)=><article key={p.title}><span>{String(i+1).padStart(2,"0")}</span><i>{p.icon}</i><h3>{p.title}</h3><p>{p.text}</p></article>)}</div></div></section>
      <section className="network-section"><div className="wrap network-heading"><p className="eyebrow">Where members work</p><h2 className="display">From Columbus<br/>to everywhere.</h2></div><div className="marquee"><div>{[...companies,...companies].map((name,i)=><span key={`${name}-${i}`}>{name}</span>)}</div></div></section>
      <section className="rush-band"><div className="wrap"><div><p className="eyebrow dark">Autumn 2026 recruitment</p><h2 className="display">Find your people.<br/>Build your future.</h2><a className="text-link" href={chapter.links.linktree} {...externalLinkProps} aria-label="Current KTP forms and links on Linktree (opens in new tab)">Current forms on Linktree ↗</a></div><Link href="/rush" className="circle-link" aria-label="Explore Autumn rush"><ArrowDownRight/><span>Explore rush</span></Link></div></section>
    </main>
  );
}
