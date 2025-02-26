import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import NavBar from "@/components/nav-bar"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white min-h-screen`}>
        <main className="pb-16">{children}</main>
        <NavBar />
      </body>
    </html>
  )
}
