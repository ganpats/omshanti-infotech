import { MainLayout } from "@/components/layout/MainLayout";
import { Section } from "@/components/ui/Section";
import { COMPANY_DETAILS } from "@/constants";

export const metadata = {
  title: "Terms of Service",
  description: `Terms of Service for ${COMPANY_DETAILS.name}`,
};

export default function TermsOfService() {
  return (
    <MainLayout>
      <Section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-slate-50/50 dark:bg-slate-900/20 min-h-screen">
        <div className="max-w-4xl mx-auto bg-background p-8 md:p-12 rounded-3xl shadow-sm border border-border">
          <h1 className="text-3xl md:text-5xl font-bold font-heading mb-8">Terms of Service</h1>
          
          <div className="text-foreground/80 max-w-none space-y-6 text-lg leading-relaxed">
            <p><strong>Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</strong></p>
            
            <p>
              Welcome to {COMPANY_DETAILS.name}! These terms and conditions outline the rules and regulations for the use of {COMPANY_DETAILS.name}&apos;s Website and Services.
            </p>
            
            <p>
              By accessing this website, we assume you accept these terms and conditions. Do not continue to use {COMPANY_DETAILS.name} if you do not agree to take all of the terms and conditions stated on this page.
            </p>

            <h2 className="text-2xl font-bold font-heading mt-8 mb-4">1. License</h2>
            <p>
              Unless otherwise stated, {COMPANY_DETAILS.name} and/or its licensors own the intellectual property rights for all material on {COMPANY_DETAILS.name}. All intellectual property rights are reserved. You may access this from {COMPANY_DETAILS.name} for your own personal use subjected to restrictions set in these terms and conditions.
            </p>
            <p>You must not:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Republish material from {COMPANY_DETAILS.name}</li>
              <li>Sell, rent or sub-license material from {COMPANY_DETAILS.name}</li>
              <li>Reproduce, duplicate or copy material from {COMPANY_DETAILS.name}</li>
              <li>Redistribute content from {COMPANY_DETAILS.name}</li>
            </ul>

            <h2 className="text-2xl font-bold font-heading mt-8 mb-4">2. Services and Deliverables</h2>
            <p>
              {COMPANY_DETAILS.name} provides software development, mobile application development, web development, and related services. Specific terms regarding project deliverables, timelines, and payment structures will be defined in a separate Statement of Work (SOW) or Service Agreement signed between the client and {COMPANY_DETAILS.name}.
            </p>

            <h2 className="text-2xl font-bold font-heading mt-8 mb-4">3. Limitation of Liability</h2>
            <p>
              In no event shall {COMPANY_DETAILS.name}, nor any of its officers, directors and employees, be held liable for anything arising out of or in any way connected with your use of this website or our services, whether such liability is under contract. {COMPANY_DETAILS.name}, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this website.
            </p>

            <h2 className="text-2xl font-bold font-heading mt-8 mb-4">4. Governing Law & Jurisdiction</h2>
            <p>
              These Terms will be governed by and interpreted in accordance with the laws of India, and you submit to the non-exclusive jurisdiction of the state and federal courts located in Rajasthan, India for the resolution of any disputes.
            </p>

            <h2 className="text-2xl font-bold font-heading mt-8 mb-4">5. Contact Information</h2>
            <p>
              If you have any questions or queries regarding our Terms of Service, please contact us at {COMPANY_DETAILS.email} or call us at {COMPANY_DETAILS.phone}.
            </p>
          </div>
        </div>
      </Section>
    </MainLayout>
  );
}
