import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react"
import type { Metadata } from "next"
import MouseMoveEffect from "@/components/mouse-move-effect"
import { Providers } from '@/app/providers';

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Amane Soft - Cutting-Edge Software Solutions",
  description: "Amane Soft delivers innovative, high-performance software solutions for businesses of the future.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        <Providers>
        <MouseMoveEffect />
        {children}
        </Providers>
      </body>
    </html>
  )
}

