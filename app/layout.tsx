
import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geist = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Lean's Birthday Celebration - January 3, 2026",
  description: "You are invited! Join us for Lean's 39th birthday celebration on January 3, 2026",
  generator: "v0.app",
  openGraph: {
    title: "Lean's Birthday Celebration",
    description: "You are invited! Join us for Lean's 39th birthday celebration on January 3, 2026",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lean's Birthday Celebration",
    description: "You are invited! Join us for Lean's 39th birthday celebration on January 3, 2026",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geist.className} ${geistMono.className} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
