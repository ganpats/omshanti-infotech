import Link from "next/link";
import { Mail, Phone, MapPin, MessageSquare, ArrowUpRight } from "lucide-react";
import { COMPANY_DETAILS, SERVICES } from "@/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 dark:bg-slate-900/50 border-t border-border mt-auto">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold font-heading text-gradient">
                {COMPANY_DETAILS.name}
              </span>
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              Empowering businesses through innovative software solutions. Specializing in high-performance mobile and web applications.
            </p>
            <div className="flex items-center space-x-4">
              <Link href="#" className="p-2 bg-background rounded-full border border-border hover:border-primary transition-colors">
                <ArrowUpRight className="h-5 w-5" />
              </Link>
              {/* Add social icons here if needed */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold font-heading mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {["Home", "About", "Services", "Portfolio", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 transition-all duration-300 opacity-0 group-hover:opacity-100 mr-0 group-hover:mr-2 h-0.5 bg-primary"></span>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold font-heading mb-6">Services</h3>
            <ul className="space-y-4">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    href="/services"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-lg font-bold font-heading mb-6">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 group">
                <Mail className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <a
                  href={`mailto:${COMPANY_DETAILS.email}`}
                  className="text-muted-foreground group-hover:text-primary transition-colors break-all"
                >
                  {COMPANY_DETAILS.email}
                </a>
              </li>
              <li className="flex items-start space-x-3 group">
                <Phone className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <a
                  href={`tel:${COMPANY_DETAILS.phone}`}
                  className="text-muted-foreground group-hover:text-primary transition-colors"
                >
                  {COMPANY_DETAILS.phone}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span className="text-muted-foreground">
                  {COMPANY_DETAILS.address}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-16 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {currentYear} {COMPANY_DETAILS.name}. All rights reserved.
          </p>
          <div className="flex space-x-8 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
