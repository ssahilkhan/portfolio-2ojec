import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/layouts/Navigation"
import Footer from "@/components/layouts/Footer"
import QuantumBackground from "@/components/effects/QuantumBackground"
import CustomCursor from "@/components/effects/CustomCursor"
import PageTransition from "@/components/effects/PageTransition"
import Providers from "@/components/layouts/Providers"
import { portfolioData } from "@/data/portfolio"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: `${portfolioData.personal_info.name} | ${portfolioData.branding_hint.tagline}`,
  description: portfolioData.summary,
  keywords: ["quantum computing", "AI", "machine learning", "portfolio", "full-stack developer", portfolioData.personal_info.name],
  authors: [{ name: portfolioData.personal_info.name }],
  openGraph: {
    title: `${portfolioData.personal_info.name} | Portfolio`,
    description: portfolioData.branding.headlines[0],
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}>
      <body className="relative min-h-full bg-background font-sans text-foreground">
        <Providers>
          <QuantumBackground />
          <CustomCursor />
          <Navigation />
          <main className="min-h-screen">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
