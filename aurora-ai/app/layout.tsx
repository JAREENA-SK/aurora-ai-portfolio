import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
        {children}
      </body>
    </html>
  );
}