import Image from "next/image";
import { Mail, Phone, ArrowUpRight, Briefcase, Download } from "lucide-react";
import Reveal from "@/components/Reveal";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import { nellyPortfolio as portfolio } from "@/data/portfolio";

export const metadata = {
  title: {
    absolute: portfolio.siteTitle,
  },
  description: portfolio.siteDescription,
  keywords: portfolio.siteKeywords,
  authors: [{ name: portfolio.owner.name, url: portfolio.basePath }],
  creator: portfolio.owner.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: portfolio.siteTitle,
    description: portfolio.siteDescription,
    url: "/",
    siteName: portfolio.siteName,
    locale: "fr_FR",
    type: "profile",
    images: [
      {
        url: `${portfolio.basePath}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: `${portfolio.owner.name} — ${portfolio.owner.jobTitle}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: portfolio.siteTitle,
    description: portfolio.siteDescription,
    images: ["/opengraph-image"],
  },
};

function SectionHeading({ eyebrow, title, tone = "dark" }) {
  const eyebrowClass = tone === "light" ? "text-accent-light" : "text-accent";
  const titleClass = tone === "light" ? "text-white" : "text-midnight";

  return (
    <Reveal as="div" className="mb-8 sm:mb-10">
      <p className={`text-xs uppercase tracking-[0.24em] sm:text-sm ${eyebrowClass}`}>{eyebrow}</p>
      <h2 className={`font-display mt-3 max-w-2xl text-2xl font-semibold leading-[1.05] sm:text-3xl md:text-4xl ${titleClass}`}>
        {title}
      </h2>
    </Reveal>
  );
}

export default function NellySchusterPage() {
  const { owner } = portfolio;
  const featuredExperiences = portfolio.experiences.slice(0, 4);
  const olderExperiences = portfolio.experiences.slice(4);
  const heroStats = [
    { value: "15+", label: "années en droit, conformité et contentieux" },
    { value: "3 ans", label: "environnement professionnel anglophone" },
  ];
  const heroLabels = [
    { value: "Compliance", label: "LCB-FT, KYC, contrôle et sécurité financière" },
    { value: "Contrats", label: "leasing IT-digital, partenariats, clauses spécifiques" },
    { value: "Public", label: "commande publique et support juridique opérationnel" },
  ];
  const navLinks = [
    ["Domaines", "#domaines"],
    ["Expériences", "#experiences"],
    ["Formation", "#formation"],
    ["Contributions", "#contributions"],
    ["Outils", "#outils"],
    ["Contact", "#contact"],
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: owner.name,
    jobTitle: owner.jobTitle,
    url: `${portfolio.siteUrl}${portfolio.basePath}`,
    image: `${portfolio.siteUrl}${portfolio.profileImage}`,
    email: owner.email,
    telephone: owner.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "35 rue Gilbert de Chambertrand",
      postalCode: "97110",
      addressLocality: "Pointe-à-Pitre",
      addressCountry: "FR",
    },
    knowsAbout: [
      "Droit des affaires",
      "Compliance",
      "LCB-FT",
      "KYC",
      "Droit de la commande publique",
      "Contrats",
      "Contentieux",
    ],
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-surface text-midnight">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-midnight/90 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-10 lg:py-4">
          <a href="#top" className="flex min-w-0 items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sm font-semibold text-accent-light">
              {owner.initials}
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold tracking-wide text-white">{owner.name}</p>
              <p className="truncate text-[11px] text-white/50">{owner.headline}</p>
            </div>
          </a>

          <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 p-2 lg:flex">
            {navLinks.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="rounded-full px-3 py-2 text-sm text-white/70 transition hover:bg-accent-light/15 hover:text-white"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="hidden h-10 w-10 sm:block" aria-hidden="true" />
        </div>
      </header>

      <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden bg-midnight pb-8 pt-28 text-white sm:pb-16 sm:pt-32">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="hero-motif absolute left-1/2 top-1/2 h-[140vmax] w-[140vmax] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[conic-gradient(from_0deg,rgba(109,165,255,0.18),transparent_25%,rgba(31,36,233,0.16),transparent_60%,rgba(109,165,255,0.14))] blur-3xl" />
        </div>
        <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.05]">
          <filter id="nelly-grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#nelly-grain)" />
        </svg>

        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="grid items-start gap-5 sm:gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-8">
            <div className="order-2 lg:order-1 lg:pt-6">
              <h1 className="sr-only font-display max-w-5xl text-4xl font-semibold leading-[1.02] tracking-tight sm:not-sr-only sm:text-5xl md:text-6xl xl:text-[4.5rem]">
                {owner.name}
              </h1>

              <p className="mt-3 max-w-3xl text-center text-lg font-semibold leading-8 text-white sm:mt-7 sm:text-left sm:text-xl">
                {owner.headline}
              </p>

              <p className="mt-8 max-w-2xl text-justify text-sm leading-7 text-white/72 sm:text-left sm:text-base md:text-lg md:leading-8">
                {portfolio.summary}
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                <a
                  href={`mailto:${owner.email}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-light px-5 py-3 text-sm font-semibold text-midnight transition hover:scale-[1.02]"
                >
                  <Mail size={18} />
                  Me contacter
                </a>
                <a
                  href={`tel:${owner.phone.replaceAll(" ", "")}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-accent-light hover:bg-white/5"
                >
                  <Phone size={18} />
                  Appeler
                </a>
                <a
                  href={portfolio.cvPath}
                  download
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:scale-[1.02] hover:border-accent-light/60 hover:bg-accent-light/15"
                >
                  <Download size={18} />
                  Télécharger le CV
                </a>
              </div>

              <div className="mt-12 flex flex-wrap items-end justify-center gap-7 text-center sm:justify-start sm:gap-9 sm:text-left">
                <div className="grid w-full grid-cols-2 justify-items-center gap-4 sm:flex sm:w-auto sm:flex-wrap sm:justify-items-start sm:gap-7">
                  {heroStats.map((stat) => (
                    <div key={stat.label} className="min-w-0 sm:max-w-[12rem]">
                      <div className="font-display text-4xl font-semibold text-accent-light sm:text-5xl">
                        {stat.value}
                      </div>
                      <div className="mt-1 text-xs leading-5 text-white/60 sm:text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <div className="grid w-full gap-2 border-t border-white/10 pt-5 sm:flex sm:w-auto sm:flex-wrap sm:gap-3 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0">
                  {heroLabels.map((item) => (
                    <span
                      key={item.value}
                      className="grid min-h-[4.75rem] w-full content-center rounded-[1.25rem] border border-white/10 bg-white/5 px-4 py-3 text-center text-xs leading-5 text-white/70 sm:inline-flex sm:min-h-0 sm:w-auto sm:max-w-none sm:items-center sm:justify-start sm:rounded-full sm:px-3 sm:py-2 sm:text-left sm:text-sm"
                    >
                      <span className="block font-semibold text-white sm:inline">{item.value}</span>
                      <span className="block sm:inline"> {item.label}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="absolute -inset-3 rounded-[2.2rem] bg-gradient-to-br from-accent-light/20 via-transparent to-accent/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/5 shadow-2xl shadow-black/40 backdrop-blur-2xl sm:rounded-[2.2rem]">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src={portfolio.profileImage}
                    alt="Portrait de Nelly Schuster"
                    fill
                    priority
                    sizes="(min-width: 1024px) 40vw, 90vw"
                    className="object-cover object-center"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <p className="text-xl font-semibold leading-tight text-white sm:text-2xl">{owner.name}</p>
                  <p className="mt-1 text-sm font-semibold text-white">{owner.headline}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="domaines" className="section-transition scroll-mt-24 border-y border-white/10 bg-midnight py-5 text-white">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:px-6 lg:grid-cols-[0.24fr_0.76fr] lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-light">
            Domaines clés
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {portfolio.highlights.map((item) => (
              <p key={item} className="border-l border-white/15 pl-4 text-sm font-semibold leading-6 text-white/78">
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section id="experiences" className="section-transition section-transition-light scroll-mt-24 bg-surface py-14 text-midnight sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <SectionHeading
            eyebrow="Expériences professionnelles"
            title="Droit des affaires, conformité et gestion des contentieux"
          />

          <ExperienceTimeline experiences={featuredExperiences} olderExperiences={olderExperiences} />
        </div>
      </section>

      <section id="formation" className="section-transition scroll-mt-24 bg-midnight py-14 text-white sm:py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.45fr_0.55fr] lg:px-10">
          <div>
            <SectionHeading
              eyebrow="Formation"
              title="Droit des affaires, compliance et commande publique"
              tone="light"
            />
            <div className="border-t border-white/10">
              {portfolio.education.map((item) => (
                <article key={`${item.year}-${item.diploma}`} className="border-b border-white/10 py-5">
                  <p className="font-display text-sm font-semibold text-accent-light">{item.year}</p>
                  <h3 className="mt-2 text-base font-semibold text-white">{item.school}</h3>
                  <p className="mt-1 text-sm leading-6 text-white/68">{item.diploma}</p>
                </article>
              ))}
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="Compétences"
              title="Des compétences juridiques orientées terrain"
              tone="light"
            />
            <div className="grid gap-3 sm:grid-cols-2">
              {portfolio.skills.map((skill) => (
                <div key={skill} className="rounded-[1.2rem] border border-white/10 bg-white/5 p-4">
                  <p className="text-sm leading-6 text-white/72">{skill}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contributions" className="section-transition section-transition-light scroll-mt-24 bg-surface py-14 text-midnight sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <SectionHeading
            eyebrow="Projets significatifs"
            title="Quelques contributions clés"
          />

          <Reveal as="div" className="grid gap-4 lg:grid-cols-3">
            {portfolio.significantProjects.map((project, index) => (
              <article
                key={project}
                className="group relative overflow-hidden rounded-[1.4rem] border border-midnight/10 bg-white p-6 shadow-sm shadow-midnight/0 transition duration-300 hover:-translate-y-2 hover:border-accent/35 hover:bg-accent/[0.03] hover:shadow-2xl hover:shadow-accent/10"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-accent-light/0 to-transparent transition duration-300 group-hover:via-accent-light/70" />
                <div className="flex items-start justify-between gap-4">
                  <p className="font-display text-sm font-semibold text-accent transition duration-300 group-hover:text-midnight">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <ArrowUpRight
                    size={16}
                    className="text-midnight/25 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent"
                  />
                </div>
                <p className="mt-4 text-sm leading-7 text-midnight/72 transition duration-300 group-hover:text-midnight/82">
                  {project}
                </p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <section id="outils" className="section-transition scroll-mt-24 bg-midnight py-14 text-white sm:py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-3 lg:px-10">
          <div className="lg:col-span-2">
            <SectionHeading eyebrow="Informatique" title="Outils et environnements" tone="light" />
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {portfolio.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/72"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div>
            <SectionHeading eyebrow="Langues" title="Niveaux de langue" tone="light" />
            <div className="space-y-4">
              {portfolio.languages.map((language) => (
                <article key={language.name} className="border-t border-white/10 pt-4">
                  <p className="font-display text-xl font-semibold text-white">{language.name}</p>
                  <p className="mt-1 text-sm font-semibold text-accent-light">{language.level}</p>
                  {language.detail && (
                    <p className="mt-1 text-sm leading-6 text-white/68">{language.detail}</p>
                  )}
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section-transition section-transition-light scroll-mt-24 border-t-4 border-accent bg-surface py-16 text-midnight sm:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-10">
          <p className="text-xs uppercase tracking-[0.24em] text-accent sm:text-sm">Contact</p>
          <h2 className="font-display mt-4 text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
            Discuter d’une opportunité avec {owner.name}
          </h2>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <a
              href={`mailto:${owner.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.02] hover:bg-midnight"
            >
              <Mail size={18} />
              Envoyer un email
            </a>
            <a
              href={`tel:${owner.phone.replaceAll(" ", "")}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-midnight/15 px-6 py-3 text-sm font-semibold text-midnight transition hover:border-accent hover:bg-accent/5"
            >
              <Briefcase size={18} />
              Appeler
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-midnight text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 text-sm text-white/50 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-10">
          <p>© 2026 {owner.name}. Portfolio professionnel.</p>
          <div className="flex flex-wrap gap-4">
            <a href={`mailto:${owner.email}`} className="transition hover:text-accent-light">
              {owner.email}
            </a>
            <a href={portfolio.cvPath} download className="transition hover:text-accent-light">
              Télécharger le CV
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
