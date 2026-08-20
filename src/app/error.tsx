"use client";
export default function Error({reset}:{reset:()=>void}){return <main id="main" className="status-page"><p className="eyebrow">Something broke</p><h1 className="display">A temporary<br/>glitch.</h1><p>Give the page another try.</p><button className="button" onClick={reset}>Try again</button></main>}
