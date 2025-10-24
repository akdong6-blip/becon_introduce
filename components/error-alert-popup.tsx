"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import Image from "next/image"

interface ErrorAlertPopupProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ErrorAlertPopup({ open, onOpenChange }: ErrorAlertPopupProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md p-0 gap-0" showCloseButton={false}>
        <DialogHeader className="p-6 pb-2 relative">
          <DialogTitle className="text-2xl font-bold text-center pr-8">주요 에러 알림 기능</DialogTitle>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-3 top-3 h-10 w-10"
            onClick={() => onOpenChange(false)}
          >
            <X className="h-6 w-6" />
          </Button>
          <p className="text-sm text-center text-muted-foreground mt-2 px-4">
            알림 기능을 통해 고객센터 연결 없이 간편하게 서비스 접수하세요!
          </p>
        </DialogHeader>

        <div className="p-4 pt-2">
          <div className="relative w-full aspect-[9/16] rounded-lg overflow-hidden">
            <Image src="/images/error-alert-detail.png" alt="주요 에러 알림 상세" fill className="object-contain" />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
