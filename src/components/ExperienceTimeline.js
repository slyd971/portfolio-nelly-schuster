"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

function ExperienceCard({ exp }) {
  const [open, setOpen] = useState(false);

  return (
    <article className="relative rounded-[1.6rem] border border-midnight/10 bg-midnight/[0.03] p-5 sm:rounded-[2rem] sm:p-7 md:pl-16">
      <span className="absolute left-[14px] top-10 hidden h-4 w-4 rounded-full border border-accent/40 bg-accent shadow-[0_0_0_6px_rgba(31,36,233,0.10)] md:block" />

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full flex-col gap-3 text-left md:flex-row md:items-start md:justify-between md:pointer-events-none"
      >
        <div>
          <p className="text-[11px] uppercase tracking-[0.22em] text-midnight/65 sm:text-xs">{exp.period}</p>
          <h3 className="mt-2 font-display text-2xl font-semibold text-midnight sm:text-3xl">{exp.company}</h3>
          <p className="mt-2 text-sm font-medium text-midnight/70 sm:text-base">
            {exp.role} — {exp.badge}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-fit rounded-full border border-accent/25 bg-accent/10 px-3 py-2 text-xs text-accent sm:px-4 sm:text-sm">
            {exp.badge}
          </div>
          <ChevronDown
            size={18}
            className={`shrink-0 text-midnight/50 transition-transform md:hidden ${open ? "rotate-180" : ""}`}
          />
        </div>
      </button>

      <div
        className={`grid transition-all duration-300 md:mt-6 md:grid-rows-[1fr] md:opacity-100 ${
          open ? "mt-6 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="border-t border-midnight/10 pt-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Challenge</p>
              <p className="mt-2 text-sm leading-7 text-midnight/72">{exp.challenge}</p>
            </div>
            <div className="border-t border-midnight/10 pt-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Mon rôle</p>
              <ul className="mt-2 space-y-2 text-sm leading-7 text-midnight/72">
                {exp.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-t border-midnight/10 pt-4 lg:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Impact</p>
              <p className="mt-2 text-sm leading-7 text-midnight/72">{exp.impact}</p>
              {exp.tags && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-midnight/10 bg-white px-3 py-1.5 text-xs text-midnight/68"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function ExperienceTimeline({ experiences, olderExperiences }) {
  const [showOlder, setShowOlder] = useState(false);

  return (
    <div className="relative space-y-4 sm:space-y-6">
      <div className="absolute left-[21px] top-6 hidden h-[calc(100%-3rem)] w-px bg-gradient-to-b from-accent/50 via-midnight/15 to-transparent md:block" />

      {experiences.map((exp) => (
        <ExperienceCard key={`${exp.company}-${exp.role}`} exp={exp} />
      ))}

      {showOlder &&
        olderExperiences.map((exp) => (
          <ExperienceCard key={`${exp.company}-${exp.role}`} exp={exp} />
        ))}

      {olderExperiences.length > 0 && (
        <div className="flex justify-center pt-2">
          <button
            type="button"
            onClick={() => setShowOlder((v) => !v)}
            className="inline-flex items-center gap-2 rounded-full border border-midnight/15 bg-midnight/[0.03] px-5 py-3 text-sm font-medium text-midnight/80 transition hover:border-accent/40 hover:bg-accent/5 hover:text-midnight"
          >
            {showOlder ? "Voir moins" : "Voir plus d’expériences"}
            <ChevronDown size={16} className={showOlder ? "rotate-180 transition" : "transition"} />
          </button>
        </div>
      )}
    </div>
  );
}
