import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { COMPANY_DETAILS } from "@/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: {
    default: `${COMPANY_DETAILS.name} | Premium Software Development Services`,
    template: `%s | ${COMPANY_DETAILS.name}`,
  },
  description: "OmShanti Infotech provides high-quality mobile app and web development services. We build scalable, modern digital solutions for businesses worldwide.",
  keywords: ["Software Development", "Mobile Apps", "Web Development", "Next.js", "React Native", "Flutter", "Udaipur", "Rajasthan"],
  authors: [{ name: "OmShanti Infotech" }],
  creator: "OmShanti Infotech",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://omshantiinfotech.com",
    title: COMPANY_DETAILS.name,
    description: "Premium Software Development Services",
    siteName: COMPANY_DETAILS.name,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
