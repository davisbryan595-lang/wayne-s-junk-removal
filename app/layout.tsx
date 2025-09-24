import type React from "react"
import type { Metadata } from "next"
import { Inter, Roboto } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Wayne's Junk & Snow Removal Ltd - Professional Snow & Junk Removal Services",
  description:
    "Professional snow removal, junk removal, and furniture delivery services. Fast, reliable, and affordable. Serving residential and commercial properties. Call +1 306-960-1411",
  keywords: "snow removal, junk removal, furniture delivery, Wayne's Junk Snow Removal, professional cleaning services",
  authors: [{ name: "Wayne's Junk & Snow Removal Ltd" }],
  openGraph: {
    title: "Wayne's Junk & Snow Removal Ltd - Professional Services",
    description:
      "Professional snow removal, junk removal, and furniture delivery services. Fast, reliable, and affordable.",
    url: "https://waynes-junk-snow-removal.vercel.app",
    siteName: "Wayne's Junk & Snow Removal Ltd",
    images: [
      {
        url: "/wayneslogo.jpeg",
        width: 400,
        height: 400,
        alt: "Wayne's Junk & Snow Removal Ltd Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wayne's Junk & Snow Removal Ltd",
    description: "Professional snow removal, junk removal, and furniture delivery services.",
    images: ["/wayneslogo.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto.variable} antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/wayneslogo.jpeg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Organization", "LocalBusiness"],
              name: "Wayne's Junk & Snow Removal Ltd",
              description: "Professional snow removal, junk removal, and furniture delivery services",
              url: "https://waynes-junk-snow-removal.vercel.app",
              logo: "https://waynes-junk-snow-removal.vercel.app/wayneslogo.jpeg",
              image: "https://waynes-junk-snow-removal.vercel.app/wayneslogo.jpeg",
              telephone: "+13069601411",
              email: "waynesjunkremoval1@gmail.com",
              sameAs: ["https://www.facebook.com/profile.php?id=61581252544319&mibextid=ZbWKwL"],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Your City",
                addressRegion: "SK",
                addressCountry: "CA",
              },
              serviceArea: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: "52.1579",
                  longitude: "-106.6702",
                },
                geoRadius: "50000",
              },
              services: [
                {
                  "@type": "Service",
                  name: "Snow Removal",
                  description: "Professional snow removal for residential and commercial properties",
                },
                {
                  "@type": "Service",
                  name: "Junk Removal",
                  description: "Complete junk removal and cleanup services",
                },
                {
                  "@type": "Service",
                  name: "Furniture Delivery",
                  description: "Safe and reliable furniture delivery services",
                },
              ],
              openingHours: "Mo-Su 07:00-19:00",
              priceRange: "$$",
            }),
          }}
        />
      </head>
      <body className="font-sans bg-background text-foreground">{children}</body>
    </html>
  )
}
