"use client";

import { Check, Copy, Instagram, Linkedin, Link as LinkIcon, Mail } from "lucide-react";
import { useState } from "react";
import { chapter, externalLinkProps } from "@/data/chapter";

export function ContactChannels() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    await navigator.clipboard.writeText(chapter.email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return <div className="channel-grid">
    <article className="channel-card featured-channel">
      <Mail aria-hidden="true" />
      <span>Email the chapter</span>
      <a href={chapter.links.email}>{chapter.email}</a>
      <button type="button" onClick={copyEmail} aria-live="polite">
        {copied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
        {copied ? "Copied" : "Copy email"}
      </button>
    </article>
    <a className="channel-card" href={chapter.links.instagram} {...externalLinkProps} aria-label={`Instagram ${chapter.handles.instagram} (opens in new tab)`}>
      <Instagram aria-hidden="true" /><span>Instagram</span><strong>{chapter.handles.instagram}</strong><small>Rush updates and chapter life ↗</small>
    </a>
    <a className="channel-card" href={chapter.links.linkedin} {...externalLinkProps} aria-label="KTP at The Ohio State University on LinkedIn (opens in new tab)">
      <Linkedin aria-hidden="true" /><span>LinkedIn</span><strong>KTP at The Ohio State University</strong><small>Professional news and alumni ↗</small>
    </a>
    <a className="channel-card" href={chapter.links.linktree} {...externalLinkProps} aria-label="All KTP links on Linktree (opens in new tab)">
      <LinkIcon aria-hidden="true" /><span>All our links</span><strong>{chapter.handles.linktree}</strong><small>Forms, events, and current updates ↗</small>
    </a>
  </div>;
}
