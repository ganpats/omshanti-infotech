"use client";

import React from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Section } from "@/components/ui/Section";
import { CheckCircle2, Award, Users, Rocket } from "lucide-react";
import { TechStack } from "@/components/sections/TechStack";

const VALUES = [
  {
    icon: Rocket,
    title: "Innovation",
    description: "We constantly explore new technologies to deliver cutting-edge solutions."
  },
  {
    icon: Award,
    title: "Quality",
    description: "Our rigorous testing and code reviews ensure robust and bug-free applications."
  },
  {
    icon: Users,
    title: "Client-Centric",
    description: "We work closely with our clients to understand their vision and deliver beyond expectations."
  }
];

export default function AboutPage() {
  return (
    <MainLayout>
      {/* Header */}
      <Section className="bg-slate-50 dark:bg-slate-900/50 py-32">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold font-heading mb-8">
            Pioneering the <br />
            <span className="text-gradient">Future of Tech</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
            OmShanti Infotech is a leading software development company dedicated to crafting high-performance digital experiences. Based in Udaipur, we serve clients globally with excellence and integrity.
          </p>
        </div>
      </Section>

      {/* Story */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-[3rem] overflow-hidden border border-border">
             <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[10rem] font-bold opacity-10 font-heading">OSI</span>
             </div>
             {/* Abstract image or illustration placeholder */}
          </div>
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold font-heading">Our Mission & Vision</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Founded by <strong>Ganpat Lakhara</strong> with a passion for technology, OmShanti Infotech has grown into a powerhouse of full-stack development. We specialize in React Native, Flutter, Next.js, and Node.js, delivering scalable architectures that drive business growth.
            </p>
            <div className="space-y-4">
              {[
                "Deliver high-quality software that solves real-world problems.",
                "Stay at the forefront of mobile and web technology trends.",
                "Build long-term partnerships based on trust and results.",
                "Provide exceptional UI/UX that delights users."
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                  <span className="text-lg font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section className="bg-slate-50 dark:bg-slate-900/50">
        <div className="grid md:grid-cols-3 gap-12">
          {VALUES.map((val, i) => (
            <div key={i} className="space-y-6 text-center md:text-left">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto md:mx-0">
                <val.icon className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold font-heading">{val.title}</h3>
              <p className="text-muted-foreground leading-relaxed italic">
                &quot;{val.description}&quot;
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Experience Section */}
      <Section className="bg-slate-50 dark:bg-slate-900/20">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">Our Journey & Experience</h2>
          <p className="text-xl text-muted-foreground">
            With over a decade of experience in software development, we have worked with some of the most innovative companies across the globe.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { company: "Arena Two", role: "Full Stack Developer", link: "https://arenatwo.com" },
            { company: "Vibeground", role: "Full Stack Developer", link: "https://vibeground.com" },
            { company: "The Pao App", role: "Software Developer", link: "https://thepaoapp.com" },
            { company: "Wooden Street", role: "iOS Developer", link: "https://woodenstreet.com" },
            { company: "Ebizz Infotech", role: "iOS Developer", link: "https://ebizzinfotech.com" },
            { company: "Sahajanand Technologies", role: "Software Developer", link: "https://stpl.com" }
          ].map((exp, i) => (
            <div key={i} className="p-8 bg-background border border-border rounded-3xl hover:border-primary/50 transition-all group">
              <h4 className="text-xs font-bold text-primary uppercase tracking-widest mb-2">{exp.role}</h4>
              <h3 className="text-2xl font-bold font-heading mb-4 group-hover:text-primary transition-colors">{exp.company}</h3>
              <a 
                href={exp.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-bold text-muted-foreground hover:text-primary transition-colors"
              >
                Visit Website <Award className="h-4 w-4 ml-2" />
              </a>
            </div>
          ))}
        </div>
      </Section>

      <TechStack />
    </MainLayout>
  );
}
