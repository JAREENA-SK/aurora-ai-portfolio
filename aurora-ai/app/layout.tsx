import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import PWARegister from "../components/PWARegister";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shaik Jareena | Senior Software Engineer",
  description:
    "Portfolio of Shaik Jareena, a Senior Software Engineer with experience in software development, project leadership, automation, technical mentoring, and operations management.",
  manifest: "/manifest.webmanifest",
  keywords: [
    "Shaik Jareena",
    "Senior Software Engineer",
    "Project Manager",
    "Operations Manager",
    "Python",
    "Next.js",
    "React",
    "Technical Support",
  ],
  authors: [
    {
      name: "Shaik Jareena",
    },
  ],
  creator: "Shaik Jareena",
  applicationName: "SJ Portfolio",
  appleWebApp: {
    capable: true,
    title: "SJ Portfolio",
    statusBarStyle: "black-translucent",
  },
  icons: {
    icon: "/icons/sj-app-icon.svg",
    apple: "/icons/sj-app-icon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0B1020",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-screen overflow-x-hidden bg-[#0B1020] text-white">
        <PWARegister />
        {children}
      </body>
    </html>
  );
}
