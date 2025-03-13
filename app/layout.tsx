import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import ThemeProvider, { ThemeToggle } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "25 Hours AI",
  description: "See how much it costs to let AI work tirelessly while you enjoy your life. No coffee breaks, no complaints, just pure digital dedication.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased
        bg-gradient-to-b dark:from-neutral-800 dark:to-neutral-900 from-neutral-100 to-white/70`}
      >
        <ThemeProvider>
          <div className="absolute top-4 right-4 z-50">
            <ThemeToggle />
          </div>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
