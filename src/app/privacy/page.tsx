import { MainLayout } from "@/components/layout/MainLayout";
import { Section } from "@/components/ui/Section";
import { COMPANY_DETAILS } from "@/constants";

export const metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${COMPANY_DETAILS.name}`,
};

export default function PrivacyPolicy() {
  return (
    <MainLayout>
      <Section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-slate-50/50 dark:bg-slate-900/20 min-h-screen">
        <div className="max-w-4xl mx-auto bg-background p-8 md:p-12 rounded-3xl shadow-sm border border-border">
          <h1 className="text-3xl md:text-5xl font-bold font-heading mb-8">Privacy Policy</h1>
          
          <div className="text-foreground/80 max-w-none space-y-6 text-lg leading-relaxed">
            <p><strong>Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</strong></p>
            
            <p>
              At {COMPANY_DETAILS.name}, accessible from our website, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by {COMPANY_DETAILS.name} and how we use it.
            </p>
            
            <h2 className="text-2xl font-bold font-heading mt-8 mb-4">1. Information We Collect</h2>
            <p>
              The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
            </p>
            <p>
              If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
            </p>
            
            <h2 className="text-2xl font-bold font-heading mt-8 mb-4">2. How We Use Your Information</h2>
            <p>We use the information we collect in various ways, including to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, operate, and maintain our website and services</li>
              <li>Improve, personalize, and expand our website and services</li>
              <li>Understand and analyze how you use our website</li>
              <li>Develop new products, services, features, and functionality</li>
              <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
              <li>Send you emails</li>
              <li>Find and prevent fraud</li>
            </ul>
            
            <h2 className="text-2xl font-bold font-heading mt-8 mb-4">3. Log Files</h2>
            <p>
              {COMPANY_DETAILS.name} follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services&apos; analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users&apos; movement on the website, and gathering demographic information.
            </p>

            <h2 className="text-2xl font-bold font-heading mt-8 mb-4">4. Contact Us</h2>
            <p>
              If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at {COMPANY_DETAILS.email}.
            </p>
          </div>
        </div>
      </Section>
    </MainLayout>
  );
}
