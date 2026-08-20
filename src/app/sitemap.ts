import type { MetadataRoute } from "next";
import { chapter } from "@/data/chapter";
export const dynamic="force-static";
export default function sitemap():MetadataRoute.Sitemap{return ["","/about","/rush","/members","/events","/contact"].map(route=>({url:`${chapter.siteUrl}${route}`,lastModified:new Date(),changeFrequency:route==="/rush"?"weekly":"monthly",priority:route===""?1:route==="/rush"?.9:.7}))}
