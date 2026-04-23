import { MainLayout } from "@/components/layout/MainLayout";
import { Hero } from "@/components/sections/Hero";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { TechStack } from "@/components/sections/TechStack";
import { Section } from "@/components/ui/Section";
import Link from "next/link";
import { Quote } from "lucide-react";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <TechStack />
      <ServicesOverview />
      
      {/* 
      <Section className="bg-primary/5">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-3">Testimonials</h2>
          <h3 className="text-3xl md:text-5xl font-bold font-heading mb-6">What Our Clients Say</h3>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-background p-8 rounded-3xl border border-border relative">
              <Quote className="h-10 w-10 text-primary/10 absolute top-8 right-8" />
              <div className="flex space-x-1 mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <span key={s} className="text-yellow-500 text-xl">★</span>
                ))}
              </div>
              <p className="text-muted-foreground italic mb-8 leading-relaxed">
                &quot;OmShanti Infotech delivered our mobile application ahead of schedule. Their attention to detail and technical expertise is unmatched. Highly recommended!&quot;
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-800" />
                <div>
                  <h4 className="font-bold">Client Name {i}</h4>
                  <p className="text-xs text-muted-foreground">CEO, Tech Ventures</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
      */}

      {/* CTA Section */}
      <Section containerClassName="max-w-5xl">
        <div className="relative bg-primary rounded-[3rem] p-8 md:p-20 overflow-hidden shadow-2xl shadow-primary/20">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/10 to-transparent pointer-events-none" />
          <div className="relative z-10 text-center space-y-8">
            <h2 className="text-3xl md:text-6xl font-bold text-white font-heading">
              Ready to transform your <br /> digital presence?
            </h2>
            <p className="text-primary-foreground/80 text-xl max-w-2xl mx-auto">
              Let&apos;s discuss your project and see how our expertise can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link
                href="/contact"
                className="bg-white text-primary px-10 py-5 rounded-full font-bold text-lg hover:bg-slate-100 transition-colors shadow-lg"
              >
                Contact Us Now
              </Link>
              <Link
                href="/portfolio"
                className="bg-primary-foreground/10 text-white border border-white/20 backdrop-blur-md px-10 py-5 rounded-full font-bold text-lg hover:bg-primary-foreground/20 transition-colors"
              >
                Explore Portfolio
              </Link>
            </div>
          </div>
          
          {/* Animated decorative circles */}
          <div className="absolute -bottom-20 -left-20 w-64 h-64 border border-white/10 rounded-full" />
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
        </div>
      </Section>
    </MainLayout>
  );
}
