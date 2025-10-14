"use client"

import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

interface TutorialStep {
  title: string
  description: string
  image: string
  imageAlt: string
}

const tutorialSteps: TutorialStep[] = [
  {
    title: "BECON Cloud 시작하기",
    description:
      "BECON Cloud에 로그인하면 메인 대시보드가 표시됩니다. 여기서 등록된 모든 에어컨 시스템의 현황을 한눈에 확인할 수 있습니다.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-WeLWjdEUqljSPft6jF4hLbnegT7WPC.png",
    imageAlt: "BECON Cloud 메인 대시보드",
  },
  {
    title: "에너지 절감 리포트 확인",
    description:
      "'에너지 절감 리포트'를 클릭하면 월별/연도별 에너지 사용량과 절감 현황을 그래프로 확인할 수 있습니다. 누적 분석 탭에서 절감 금액과 절감률을 상세히 볼 수 있습니다.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7HxVnpf2UxkWdPrtxqFkv5wvQaX2Rl.png",
    imageAlt: "에너지 절감 리포트",
  },
  {
    title: "기기서비스 리포트 확인",
    description:
      "'기기서비스 리포트'를 선택하면 현재 에러 발생 기기, 과거 에러 이력, 서비스 이력을 확인할 수 있습니다. 각 항목을 클릭하면 상세 정보가 표시됩니다.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-IjXqOTYMOWuJSr0Ox2MPLrUXcgSGc2.png",
    imageAlt: "기기서비스 리포트",
  },
  {
    title: "서비스 일정 관리",
    description:
      "서비스 일정 관리 탭에서 월별 서비스 일정을 캘린더로 확인하고, 부품소요 서비스 내역에서 교체된 부품 정보를 상세히 볼 수 있습니다.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Eqcs3QT4lDT67l12iz8i8dUZR8C4zZ.png",
    imageAlt: "서비스 일정 관리",
  },
  {
    title: "AI 고장예측 확인",
    description:
      "'AI 고장예측'에서 6개 핵심 항목(압축기, 센서류, 팬/모터, 드레인펌프, 약운전)의 상태를 확인합니다. 주의 또는 위험 표시가 있는 항목을 클릭하면 상세 진단 결과와 권장 조치사항이 나타납니다.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Qm3cLgh75jiTzprIwqh5D7mHKFCoET.png",
    imageAlt: "AI 고장예측",
  },
  {
    title: "에너지 낭비 알림 대응",
    description:
      "알림 아이콘을 클릭하면 에너지 낭비 유형(끄기 잊음, 단열 불량, 설정 온도 과다 등)을 확인할 수 있습니다. 해당 알림을 클릭하면 문제 기기 위치와 권장 조치사항이 표시됩니다.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-WeLWjdEUqljSPft6jF4hLbnegT7WPC.png",
    imageAlt: "에너지 낭비 알림",
  },
]

interface TutorialModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function TutorialModal({ open, onOpenChange }: TutorialModalProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [dontShowToday, setDontShowToday] = useState(false)

  const handleClose = () => {
    if (dontShowToday) {
      localStorage.setItem("becon-cloud-tutorial-hidden", new Date().toDateString())
    }
    onOpenChange(false)
    setCurrentStep(0)
  }

  const handleNext = () => {
    if (currentStep < tutorialSteps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      handleClose()
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const currentStepData = tutorialSteps[currentStep]

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl p-0 gap-0 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg md:text-xl font-bold">BECON Cloud 미리 체험하기</h2>
          <button
            onClick={handleClose}
            className="p-1 hover:bg-secondary rounded-lg transition-colors"
            aria-label="닫기"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-sm text-muted-foreground mb-6">
            이제부터 도기 위해 연출된 이미지 및 몇몇 내용으로,
            <br />
            실제 미는 스마트웹어 버전, 모델, 지역 및 거래 요인에 따라 달라질 수 있어요.
          </p>

          {/* Image Container */}
          <div className="relative bg-secondary/30 rounded-lg p-4 mb-6">
            <div className="relative aspect-[9/16] max-h-[500px] mx-auto">
              <Image
                src={currentStepData.image || "/placeholder.svg"}
                alt={currentStepData.imageAlt}
                fill
                className="object-contain rounded-lg"
              />
            </div>

            {/* Description Overlay */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-white rounded-lg shadow-lg p-4">
              <p className="text-sm text-center font-medium">{currentStepData.description}</p>
            </div>
          </div>

          {/* Progress Dots */}
          <div className="flex justify-center gap-2 mb-6">
            {tutorialSteps.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentStep(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentStep ? "w-8 bg-primary" : "w-2 bg-secondary"
                }`}
                aria-label={`${index + 1}단계로 이동`}
              />
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <Button variant="ghost" onClick={handlePrevious} disabled={currentStep === 0}>
              <ChevronLeft className="h-4 w-4 mr-1" />
              이전
            </Button>

            <Button onClick={handleNext} className="bg-primary hover:bg-primary/90">
              {currentStep === tutorialSteps.length - 1 ? "완료" : "다음"}
              {currentStep < tutorialSteps.length - 1 && <ChevronRight className="h-4 w-4 ml-1" />}
            </Button>
          </div>

          {/* Don't Show Today */}
          <div className="mt-4 text-center">
            <button
              onClick={() => setDontShowToday(!dontShowToday)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors underline"
            >
              오늘 하루 그만보기
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
