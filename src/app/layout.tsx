import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ThemeProvider } from "@/theme/ThemeProvider";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mohammed Zacki - Digital Marketing Enthusiast",
  description:
    "Digital Marketing professional specializing in SEO, Social Media Marketing, and Content Strategy. Based in Udaipur, Rajasthan.",
  keywords:
    "digital marketing, SEO, social media marketing, content writing, lead generation, Udaipur",
  authors: [{ name: "Mohammed Zacki" }],
  openGraph: {
    title: "Mohammed Zacki - Digital Marketing Portfolio",
    description:
      "Helping brands grow with SEO, Social Media & Content Strategy",
    url: "https://zacki-portfolio.vercel.app",
    siteName: "Mohammed Zacki Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
