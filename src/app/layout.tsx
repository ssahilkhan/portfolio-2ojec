import type { Metadata } from "next"
import { Geist, Geist_Mono, Bricolage_Grotesque } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/layouts/Navigation"
import Footer from "@/components/layouts/Footer"
import Providers from "@/components/layouts/Providers"
import ThemeProvider from "@/lib/theme-provider"
import { portfolioData } from "@/data/portfolio"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: `${portfolioData.personal_info.name} | ${portfolioData.branding_hint.tagline}`,
  description: portfolioData.summary,
  keywords: ["machine learning engineer", "generative AI", "speech AI", "AI agents", "portfolio", portfolioData.personal_info.name],
  authors: [{ name: portfolioData.personal_info.name }],
  openGraph: {
    title: `${portfolioData.personal_info.name} | Portfolio`,
    description: portfolioData.branding_hint.tagline,
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${display.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="relative min-h-full overflow-x-hidden bg-background font-sans text-foreground">
        <ThemeProvider>
          <Providers>
            <Navigation />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  )
}
