import type React from "react"
import type { Metadata } from "next"
import localFont from "next/font/local"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const lgSmartFont = localFont({
  src: [
    {
      path: "./fonts/lg-smart-light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/lg-smart-regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/lg-smart-semibold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/lg-smart-bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-lg-smart",
  display: "swap",
})

export const metadata: Metadata = {
  title: "LG BECON cloud - 시스템 에어컨 원격 관리 솔루션",
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
