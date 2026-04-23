"use client";

import React, { useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Section } from "@/components/ui/Section";
import { PROJECTS } from "@/constants";
import { ExternalLink, Code } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const CATEGORIES = ["All", "Mobile", "Web"];

export default function PortfolioPage() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = PROJECTS.filter(
    (p) => filter === "All" || p.category === filter
  );

  return (
    <MainLayout>
      <Section className="bg-slate-50 dark:bg-slate-900/50 pt-32 pb-20">
        <div className="max-w-3xl text-center mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold font-heading mb-8">Our <span className="text-gradient">Work</span></h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A showcase of our recent projects, from enterprise web platforms to innovative mobile applications.
          </p>
        </div>
      </Section>

      <Section>
        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-slate-100 dark:bg-slate-800 p-1 rounded-2xl">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
                  filter === cat
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid md:grid-cols-2 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-background rounded-[2.5rem] border border-border overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                <div className="aspect-video bg-slate-100 dark:bg-slate-900 overflow-hidden relative">
                   <Image 
                     src={project.image} 
                     alt={project.title}
                     fill
                     className="object-cover transition-transform duration-700 group-hover:scale-110"
                     unoptimized={project.image.includes('googleusercontent')}
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                   
                    <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center space-x-6">
                      {project.link && (
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-4 bg-white text-primary rounded-full hover:scale-110 transition-transform"
                        >
                          <ExternalLink className="h-6 w-6" />
                        </a>
                      )}
                      <button className="p-4 bg-white text-primary rounded-full hover:scale-110 transition-transform">
                        <Code className="h-6 w-6" />
                      </button>
                   </div>
                </div>
                
                <div className="p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span key={t} className="px-3 py-1 bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-wider rounded-full border border-primary/10">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold font-heading mb-3">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Section>
      
      {/* Call to Action */}
      <Section className="bg-slate-50 dark:bg-slate-900/50">
         <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold font-heading">Have a project in mind?</h2>
            <p className="text-xl text-muted-foreground italic">
              &quot;We don&apos;t just build apps, we build businesses.&quot;
            </p>
            <div className="pt-4">
               <button className="px-10 py-4 bg-primary text-primary-foreground rounded-full font-bold text-lg hover:shadow-xl hover:shadow-primary/20 transition-all">
                  Let&apos;s Build It Together
               </button>
            </div>
         </div>
      </Section>
    </MainLayout>
  );
}
