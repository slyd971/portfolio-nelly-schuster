import { nellyPortfolio as portfolio } from "@/data/portfolio";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${portfolio.siteUrl}/sitemap.xml`,
  };
}
