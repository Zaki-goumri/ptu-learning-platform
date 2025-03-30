import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Sidebar from "@/components/sidebar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "P.T.U Learning Platform",
  description: "Interactive e-learning platform for students and teachers",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <div className="flex flex-1">
              <Sidebar />
              <main className="flex-1 p-4 md:p-6">{children}</main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'