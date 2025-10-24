"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { useState, useEffect } from "react"

export function BeconCloudPopup() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const hideUntil = localStorage.getItem("beconPopupHideUntil")
    const now = new Date().getTime()

    if (!hideUntil || now > Number.parseInt(hideUntil)) {
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 800)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    setIsVisible(false)
  }

  const handleHideToday = () => {
    const tomorrow = new Date()
    tomorrow.setHours(24, 0, 0, 0)
    localStorage.setItem("beconPopupHideUntil", tomorrow.getTime().toString())
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed right-4 bottom-4 z-50 w-[180px] animate-in slide-in-from-bottom-5 duration-500">
      <Card className="overflow-hidden shadow-2xl border-2">
        <div className="p-3">
          <h3 className="text-sm font-bold text-center mb-2">
            BECON cloud
            <br />
            가입하러 가기
          </h3>

          <div className="relative w-full aspect-square mb-2 rounded-lg overflow-hidden">
            <Image src="/images/becon-cloud-service.png" alt="LG BECON cloud Service" fill className="object-cover" />
          </div>

          <Button className="w-full mb-2 bg-black hover:bg-black/90 text-white text-xs py-1.5 h-auto" asChild>
            <a href="https://beconcloud.lge.com/index.do" target="_blank" rel="noopener noreferrer">
              바로가기 &gt;
            </a>
          </Button>

          <div className="flex gap-1">
            <Button variant="ghost" size="sm" onClick={handleClose} className="flex-1 text-[9px] py-1 h-auto px-1">
              닫기
            </Button>
            <Button variant="ghost" size="sm" onClick={handleHideToday} className="flex-1 text-[9px] py-1 h-auto px-1">
              오늘 보지 않기
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
