"use client";

import React from "react";
import { Section } from "@/components/ui/Section";

const TECHS = [
  { name: "Next.js", color: "text-white bg-black dark:border-white/20" },
  { name: "TypeScript", color: "text-white bg-blue-600" },
  { name: "React Native", color: "text-[#61DAFB] bg-slate-900" },
  { name: "Flutter", color: "text-[#02569B] bg-slate-100" },
  { name: "Node.js", color: "text-[#339933] bg-slate-100" },
  { name: "MongoDB", color: "text-[#47A248] bg-slate-100" },
  { name: "Tailwind CSS", color: "text-[#06B6D4] bg-slate-900" },
  { name: "Framer Motion", color: "text-[#ff0055] bg-slate-900" },
];

export function TechStack() {
  return (
    <Section className="py-16 md:py-24">
      <div className="flex flex-col items-center">
        <h3 className="text-xl font-bold font-heading mb-12 text-muted-foreground opacity-60 uppercase tracking-[0.3em]">
          Technologies We Master
        </h3>
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 opacity-70 hover:opacity-100 transition-opacity duration-500">
          {TECHS.map((tech) => (
            <div
              key={tech.name}
              className={`px-6 py-3 rounded-xl font-bold text-lg border border-transparent hover:border-border transition-all hover:scale-110 cursor-default ${tech.color} shadow-sm`}
            >
              {tech.name}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
