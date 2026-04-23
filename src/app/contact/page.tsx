"use client";

import React from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Section } from "@/components/ui/Section";
import { Mail, Phone, MapPin, Send, MessageCircle, Clock } from "lucide-react";
import { COMPANY_DETAILS } from "@/constants";

export default function ContactPage() {
  return (
    <MainLayout>
      <Section className="bg-slate-50 dark:bg-slate-900/50 pt-32 pb-20">
        <div className="max-w-3xl text-center mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold font-heading mb-8">Get in <span className="text-gradient">Touch</span></h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Have a project or a question? We&apos;d love to hear from you. Let&apos;s start a conversation.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-20">
          {/* Contact Information */}
          <div className="space-y-12">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold font-heading">Contact Information</h2>
              <p className="text-muted-foreground">
                Reach out to us via any of these channels. Our team is ready to assist you.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-border group hover:border-primary transition-colors">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1 uppercase tracking-wider font-bold">Email Us</p>
                  <a href={`mailto:${COMPANY_DETAILS.email}`} className="text-lg font-bold break-all">{COMPANY_DETAILS.email}</a>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-border group hover:border-primary transition-colors">
                <div className="w-12 h-12 bg-[#25D366]/10 rounded-xl flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1 uppercase tracking-wider font-bold">WhatsApp / Call</p>
                  <a href={`tel:${COMPANY_DETAILS.phone}`} className="text-lg font-bold">{COMPANY_DETAILS.phone}</a>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-border group hover:border-primary transition-colors">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1 uppercase tracking-wider font-bold">Visit Us</p>
                  <p className="text-lg font-bold leading-tight">{COMPANY_DETAILS.address}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-border group hover:border-primary transition-colors">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1 uppercase tracking-wider font-bold">Business Hours</p>
                  <p className="text-lg font-bold">Mon - Sat: 10:00 AM - 7:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[2.5rem] border border-border shadow-2xl shadow-primary/5">
              <form action={`https://formsubmit.co/${COMPANY_DETAILS.email}`} method="POST" className="space-y-6">
                {/* FormSubmit Configuration */}
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_subject" value="New Contact Form Submission - OmShanti Infotech" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="text" name="_honey" style={{ display: 'none' }} />

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-bold ml-1">Your Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="John Doe"
                      className="w-full px-6 py-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold ml-1">Email Address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="w-full px-6 py-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-bold ml-1">Subject</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    placeholder="Project Inquiry"
                    className="w-full px-6 py-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold ml-1">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Tell us about your project goals and requirements..."
                    className="w-full px-6 py-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-5 bg-primary text-primary-foreground rounded-xl font-bold text-lg flex items-center justify-center space-x-2 shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <span>Send Message</span>
                  <Send className="h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </Section>

      {/* Map Section */}
      <Section className="py-0 overflow-hidden h-[500px]">
        <div className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700 border-y border-border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.718617565451!2d73.74312067536166!3d24.564478178120613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e55590c4273d%3A0xc47e44c278e9b60b!2s236%2C%20Shri%20Laxmi%20Nagar%2C%20Bedwas%2C%20Udaipur%2C%20Rajasthan%20313001!5e0!3m2!1sen!2sin!4v1713876000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </Section>
    </MainLayout>
  );
}
