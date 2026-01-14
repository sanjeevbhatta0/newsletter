import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "PulsePost - Newsletter Platform",
  description: "The beautiful newsletter platform for creators. Powered by Beehiiv.",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased min-h-screen bg-zinc-950">
        {children}
      </body>
    </html>
  )
}
