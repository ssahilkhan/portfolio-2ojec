import type { Metadata, Viewport } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/layouts/Navigation"
import Footer from "@/components/layouts/Footer"
import Providers from "@/components/layouts/Providers"
import ThemeProvider from "@/lib/theme-provider"
import { site } from "@/data/site"

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] })
const grotesk = Space_Grotesk({ variable: "--font-grotesk", subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.role}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Sahil Khan",
    "AI developer",
    "machine learning engineer",
    "speech AI",
    "full-stack developer",
    "quantum computing",
    "blockchain",
    "portfolio",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | ${site.role}`,
    description: site.description,
    images: [{ url: "/images/sahil_portrait.jpeg", alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.role}`,
    description: site.description,
    creator: "@SahilkhanS2006",
    images: ["/images/sahil_portrait.jpeg"],
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: "#000000",
}

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  jobTitle: site.role,
  image: `${site.url}/images/sahil_portrait.jpeg`,
  sameAs: [site.links.github, site.links.linkedin, site.links.youtube, site.links.instagram],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${grotesk.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="relative min-h-full overflow-x-hidden bg-background font-sans text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <ThemeProvider>
          <Providers>
            <a
              href="#main"
              className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-ink"
            >
              Skip to content
            </a>
            <Navigation />
            <main id="main" className="min-h-screen">{children}</main>
            <Footer />
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  )
}
