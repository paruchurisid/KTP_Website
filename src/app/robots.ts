import type { MetadataRoute } from "next";
import { chapter } from "@/data/chapter";
export const dynamic="force-static";
export default function robots():MetadataRoute.Robots{return {rules:{userAgent:"*",allow:"/"},sitemap:`${chapter.siteUrl}/sitemap.xml`}}
