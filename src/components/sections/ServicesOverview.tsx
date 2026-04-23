"use client";

import React from "react";
import Link from "next/link";
import { Smartphone, Globe, Layers, Zap, ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SERVICES } from "@/constants";

const ICON_MAP = {
  Smartphone,
  Globe,
  Layers,
  Zap,
};

export function ServicesOverview() {
  return (
    <Section className="bg-slate-50/50 dark:bg-slate-900/20">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-3">Our Expertise</h2>
        <h3 className="text-3xl md:text-5xl font-bold font-heading mb-6">Innovative Solutions for Every Business Need</h3>
        <p className="text-muted-foreground text-lg">
          From concept to deployment, we provide end-to-end development services that help businesses scale in the digital era.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {SERVICES.map((service, index) => {
          const Icon = ICON_MAP[service.icon as keyof typeof ICON_MAP];
          return (
            <div
              key={service.id}
              className="group p-8 rounded-3xl bg-background border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 relative overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />
              
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <Icon className="h-7 w-7" />
              </div>
              
              <h4 className="text-xl font-bold font-heading mb-4">{service.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              
              <Link
                href="/services"
                className="flex items-center text-sm font-bold text-primary group-hover:gap-2 transition-all"
              >
                Learn More <ArrowRight className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transition-all" />
              </Link>
            </div>
          );
        })}
      </div>

      <div className="mt-16 text-center">
        <Link
          href="/services"
          className="inline-flex items-center space-x-2 text-muted-foreground hover:text-primary font-medium transition-colors"
        >
          <span>View all our specialized services</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Section>
  );
}
