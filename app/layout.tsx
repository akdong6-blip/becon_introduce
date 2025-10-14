import type React from "react"
import type { Metadata } from "next"
import localFont from "next/font/local"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const lgSmartFont = localFont({
  src: [
    {
      path: "./fonts/LGSMHAL_V1.4_151215.TTF",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/LGSMHAR_V1.4_151215.TTF",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/LGSMHASB_V1.4_151215.TTF",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/LGSMHAB_V1.4_151215.TTF",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-lg-smart",
  display: "swap",
})

export const metadata: Metadata = {
  title: "LG BECON Cloud - 시스템 에어컨 원격 관리 솔루션",
  description:
    "LG전자에서 제공하는 시스템 에어컨 원격 관리 플랫폼. AI 고장 예측, 에너지 절감 리포트, 실시간 알림 기능을 제공합니다.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className={`font-sans ${lgSmartFont.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
