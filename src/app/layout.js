import { Space_Grotesk, IBM_Plex_Sans } from "next/font/google";
import "../styles/globals.css";
import { nellyPortfolio as portfolio } from "@/data/portfolio";

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  weight: ["500", "600", "700"],
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-plex",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(portfolio.siteUrl),
  title: portfolio.siteTitle,
  description: portfolio.siteDescription,
  keywords: portfolio.siteKeywords,
  authors: [{ name: portfolio.owner.name, url: "/" }],
  creator: portfolio.owner.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${grotesk.variable} ${plexSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
