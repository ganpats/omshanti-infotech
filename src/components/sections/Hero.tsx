"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Smartphone, Globe, Code } from "lucide-react";
import { Section } from "@/components/ui/Section";

export function Hero() {
  return (
    <Section className="pt-32 pb-20 md:pt-48 md:pb-32 overflow-visible">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary dark:text-blue-400 text-sm font-semibold"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span>Now accepting new projects</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold font-heading leading-tight"
          >
            Building <span className="text-gradient">Scalable</span> <br />
            Digital Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-xl text-muted-foreground max-w-xl leading-relaxed"
          >
            We transform your ideas into powerful, high-performance mobile apps and web platforms. Experience innovation with OmShanti Infotech.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/contact"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-primary/30 flex items-center justify-center space-x-2 group hover:scale-105 transition-transform"
            >
              <span>Get Started</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/portfolio"
              className="px-8 py-4 rounded-full font-bold text-lg border border-border bg-background hover:bg-accent transition-colors flex items-center justify-center"
            >
              View Our Work
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex items-center space-x-8 pt-8 border-t border-border/50"
          >
            <div className="flex flex-col">
              <span className="text-2xl font-bold font-heading">50+</span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Projects Delivered</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold font-heading">98%</span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Client Satisfaction</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold font-heading">5+</span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Years Excellence</span>
            </div>
          </motion.div>
        </div>

        <div className="relative hidden lg:block">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative z-10 w-full h-[400px] xl:h-[500px] rounded-[3rem] border border-border/50 overflow-hidden shadow-2xl"
          >
            <Image
              src="/banner.png"
              alt="OmShanti Infotech"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Decorative Elements */}
          <div className="absolute -top-10 -left-10 w-40 h-40 border border-primary/20 rounded-full animate-[spin_20s_linear_infinite]" />
          <div className="absolute top-1/2 -right-20 w-80 h-80 border-2 border-secondary/10 rounded-3xl rotate-45 animate-bounce-slow" />
        </div>
      </div>
    </Section>
  );
}
