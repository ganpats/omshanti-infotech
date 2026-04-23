"use client";

import React from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Section } from "@/components/ui/Section";
import { SERVICES } from "@/constants";
import { Smartphone, Globe, Layers, Zap, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const ICON_MAP = {
  Smartphone,
  Globe,
  Layers,
  Zap,
};

export default function ServicesPage() {
  return (
    <MainLayout>
      <Section className="bg-slate-50 dark:bg-slate-900/50 pt-32 pb-20">
        <div className="max-w-3xl text-center mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold font-heading mb-8">Our <span className="text-gradient">Services</span></h1>
          <p className="text-xl text-muted-foreground italic mb-4">
            &quot;We don&apos;t just build apps, we build businesses.&quot;
          </p>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We provide a comprehensive range of software development services to help you build, launch, and scale your digital products.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid gap-20">
          {SERVICES.map((service, index) => {
            const Icon = ICON_MAP[service.icon as keyof typeof ICON_MAP];
            const isEven = index % 2 === 0;
            return (
              <div
                key={service.id}
                className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 lg:gap-24 items-center`}
              >
                <div className="flex-1 space-y-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold font-heading">{service.title}</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center space-x-3 group">
                        <CheckCircle2 className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-full font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform"
                    >
                      Inquire About {service.id === 'mobile' ? 'App' : 'Web'} Development
                    </Link>
                  </div>
                </div>
                <div className="flex-1 w-full aspect-video bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 rounded-[2.5rem] border border-border overflow-hidden relative group">
                  {/* Decorative background for the service card image placeholder */}
                  <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                     <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--primary)_0%,_transparent_70%)]" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon className="h-32 w-32 text-primary opacity-10 group-hover:scale-110 transition-transform duration-700" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      <Section className="bg-slate-950 text-white">
         <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
               <h2 className="text-4xl md:text-6xl font-bold font-heading">The OmShanti <br /> Advantage</h2>
               <p className="text-slate-400 text-lg">
                 Choosing us means partnering with a team that values your success as much as you do.
               </p>
            </div>
            <div className="grid gap-6">
               {[
                 { title: "Fast Delivery", desc: "Optimized workflows to get you to market faster." },
                 { title: "Clean Code", desc: "Maintainable, scalable, and well-documented source code." },
                 { title: "Expert Support", desc: "Post-launch support and continuous improvement." },
                 { title: "Global Standard", desc: "Code quality that meets international standards." }
               ].map((item, i) => (
                 <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors">
                    <h4 className="font-bold text-xl mb-2">{item.title}</h4>
                    <p className="text-slate-400">{item.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </Section>
    </MainLayout>
  );
}
