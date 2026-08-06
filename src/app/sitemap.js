import { nellyPortfolio as portfolio } from "@/data/portfolio";

export default function sitemap() {
  return [
    {
      url: portfolio.siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${portfolio.siteUrl}${portfolio.cvPath}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];
}
