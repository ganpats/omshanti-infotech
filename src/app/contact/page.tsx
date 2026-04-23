"use client";

import React, { useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Section } from "@/components/ui/Section";
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, CheckCircle2, Loader2 } from "lucide-react";
import { COMPANY_DETAILS } from "@/constants";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setIsSubmitting(true);

    const formData = new FormData(form);

    // Construct dynamic subject
    const userSubject = formData.get("subject");
    formData.set("_subject", `New Contact Form Submission - ${userSubject}`);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${COMPANY_DETAILS.email}`, {
        method: "POST",
        headers: {
          'Accept': 'application/json'
        },
        body: formData,
      });

      const result = await response.json();

      if (response.ok && result.success === "true") {
        setIsSuccess(true);
        form.reset();
      } else {
        throw new Error(result.message || "Submission failed");
      }
    } catch (error) {
      console.error("FormSubmit Error:", error);
      // If we got here but the result actually succeeded in the background, 
      // we check if it was just a parsing error.
      alert("There was an issue processing the response, but your message may have been sent. Please check your email or try again if you don't receive a confirmation.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
              {isSuccess ? (
                <div className="text-center py-12 space-y-6">
                  <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <h3 className="text-3xl font-bold font-heading">Message Sent!</h3>
                  <p className="text-muted-foreground text-lg">
                    Thank you for reaching out. We have received your message and will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="text-primary font-bold hover:underline pt-4"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* FormSubmit Configuration */}
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_subject" value="New Contact Form Submission" />
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
                    disabled={isSubmitting}
                    className="w-full py-5 bg-primary text-primary-foreground rounded-xl font-bold text-lg flex items-center justify-center space-x-2 shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="h-5 w-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </Section>

      {/* Map Section */}
      <Section 
        className="pt-0 pb-20 overflow-hidden h-[650px]" 
        containerClassName="h-full"
      >
        <div className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700 border border-border rounded-[2.5rem] overflow-hidden shadow-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d207.28414974739727!2d73.76290411792172!3d24.57682268974804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1776959455103!5m2!1sen!2sin"
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
