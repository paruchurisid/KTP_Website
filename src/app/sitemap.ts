import type { MetadataRoute } from "next";
export const dynamic="force-static";
export default function sitemap():MetadataRoute.Sitemap{const base="https://ktp-ohio-state.pages.dev";return ["","/about","/rush","/members","/events","/contact"].map(route=>({url:`${base}${route}`,lastModified:new Date(),changeFrequency:route==="/rush"?"weekly":"monthly",priority:route===""?1:route==="/rush"?.9:.7}))}
