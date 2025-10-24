"use client"

import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, LayoutGrid, FileText, Menu, X, Phone } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import Link from "next/link"
import { BeconCloudPopup } from "@/components/becon-cloud-popup"

export default function SignupGuidePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const slides = [
    {
      title: "1. 회원가입 시작하기",
      content: "BECON cloud 로그인 화면 하단의 [회원가입] 버튼을 누릅니다.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%EC%84%A4%EB%AA%85%EC%84%9C3.PNG-TO4E9nzZ3bakJdkjKu6q0niCKAtgj8.png",
    },
    {
      title: "2. 구글 계정 연동 (1/2)",
      content: "구글 계정을 소유하고 계시다면 구글 계정을 통해 회원가입이 가능합니다.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%EC%84%A4%EB%AA%85%EC%84%9C4.PNG-ZBRsxoZsC7cmHwRe3kS9vKbQOdn3uB.png",
    },
    {
      title: "3. 구글 계정 연동 (2/2)",
      content: "구글 계정 선택 화면에서 사용할 계정을 선택합니다.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%EC%84%A4%EB%AA%85%EC%84%9C5.PNG-pmkuWJBSycfERh2cwxXi3BkQjXpndK.png",
    },
    {
      title: "4. 국가 선택 및 약관 동의",
      content:
        "국가(대한민국)를 선택하고, 이용약관과 개인정보 수집 안내를 읽고 [동의합니다]에 체크 후 [동의함] 버튼을 클릭합니다.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%EC%84%A4%EB%AA%85%EC%84%9C6.PNG-di0k22bFEoVZb6uyk2AU1CD8eqpmkb.png",
    },
    {
      title: "5. 계정 유형 선택",
      content: "계약고객(현장관리자), 계약고객(보조현장관리자), LG전자 및 계열사 중 하나를 선택합니다.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%EC%84%A4%EB%AA%85%EC%84%9C7.PNG-KtwOY4ncwXs4rClnacmqIX62XlSemI.png",
    },
    {
      title: "6. 계약고객(현장관리자) - 정보 입력",
      content: "계정 이메일, 비밀번호, 사용자 이름 등 필요 정보를 입력합니다.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%EC%84%A4%EB%AA%85%EC%84%9C8.PNG-GUDoilP7D2xkxgALirP4pbY7CFX7mI.png",
    },
    {
      title: "7. 계약고객(현장관리자) - TMS 코드",
      content: "안내받으신 TMS 현장코드를 입력하면 관리자의 빠른 승인이 가능합니다. (선택사항)",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%EC%84%A4%EB%AA%85%EC%84%9C9.PNG-ghxi7v03flPNjJGgbos0tB5hmwapb7.png",
    },
    {
      title: "8. 계약고객(보조현장관리자) - 정보 입력",
      content: "보조현장관리자는 계정 이메일, 비밀번호, 사용자 이름을 입력합니다.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%EC%84%A4%EB%AA%85%EC%84%9C10.PNG-p06uEr5o3wm8scwwRuRSDqGlAF1z8e.png",
    },
    {
      title: "9. 계약고객(보조현장관리자) - 현장코드 필수",
      content: "보조현장관리자는 TMS 현장코드가 필수입니다. 해당 설비 현장관리자를 통해 안내받으시길 바랍니다.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%EC%84%A4%EB%AA%85%EC%84%9C11.PNG-90XgZtq4mwhphZWu8N1U4CMCFX8KbT.png",
    },
    {
      title: "10. 이메일 인증",
      content: "등록한 이메일로 이동하여 [인증하기] 버튼을 클릭합니다. 인증 유효기간은 48시간입니다.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%EC%84%A4%EB%AA%85%EC%84%9C14.PNG-xvUCN8EUwirRnW4QzpiCl3h5oVD0Nl.png",
    },
    {
      title: "11. 관리자 승인 대기",
      content:
        "회원가입 완료 후, 관리자의 승인이 있어야 로그인이 가능합니다. BECON cloud 계약담당자에게 가입 승인을 요청하십시오.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%EC%84%A4%EB%AA%85%EC%84%9C15.PNG-BiUL6CgUkovVCpQpq4dYpQNIjsNtWq.png",
    },
    {
      title: "12. 로그인",
      content: "계정과 비밀번호를 입력하거나 구글 로그인 버튼을 누릅니다. 비밀번호 5회 실패 시 로그인이 제한됩니다.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%EC%84%A4%EB%AA%85%EC%84%9C16.PNG-06yV0c4Uv0Q4jrHMeSJW8zrylyvqQZ.png",
    },
    {
      title: "13. 로그아웃",
      content: "우측 상단의 계정명을 클릭하고 [로그아웃] 버튼을 누르면 로그아웃됩니다.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%EC%84%A4%EB%AA%85%EC%84%9C17.PNG-ArYuykgrnCaQKskZwuum82zCfdihHS.png",
    },
    {
      title: "14. 계정 찾기 / 비밀번호 찾기",
      content: "로그인 화면 하단의 [계정/비밀번호 찾기] 버튼을 눌러 [기업관리자 사용자]를 선택합니다.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%EC%84%A4%EB%AA%85%EC%84%9C18.PNG-8X5CKrst25qkBomeuWoHtj0nXOeRTP.png",
    },
    {
      title: "15. 계정 복구",
      content:
        "[계정찾기]에 이메일을 입력하면 회원가입 여부 확인이 가능하고, [비밀번호찾기]에 이메일을 입력하면 비밀번호 변경 메일이 전송됩니다.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%EC%84%A4%EB%AA%85%EC%84%9C19.PNG-LK43QlMggNGBTjUOa5cupfQYEJqSbz.png",
    },
    {
      title: "16. 인증 메일 재전송",
      content:
        "로그인 화면 좌측 상단의 [메뉴보기]에서 [인증메일 재전송]을 클릭하여 회원가입 인증 메일을 다시 받을 수 있습니다.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%EC%84%A4%EB%AA%85%EC%84%9C20.PNG-bgluMDRtFGKvTXQIj8IE9ua74kdU0A.png",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4 gap-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-secondary rounded-lg flex-shrink-0"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            <div className="flex items-center gap-3 md:gap-4">
              <a
                href="https://beconcloud.lge.com/index.do"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-1 w-[140px] h-[70px] md:w-[160px] md:h-[80px] border-2 border-gray-200 rounded-lg hover:border-primary/50 hover:bg-gray-50 transition-all group"
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-[#a50034] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xs md:text-sm">LG</span>
                  </div>
                  <span className="font-bold text-xs md:text-sm leading-none whitespace-nowrap">LG BECON cloud</span>
                </div>
                <span className="text-xs text-gray-400">바로가기</span>
              </a>

              <a
                href="https://himsolutek.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-1 w-[140px] h-[70px] md:w-[160px] md:h-[80px] border-2 border-gray-200 rounded-lg hover:border-primary/50 hover:bg-gray-50 transition-all group"
              >
                <span className="font-bold text-xs md:text-sm whitespace-nowrap">Hi-M Solutek</span>
                <span className="text-xs text-gray-400">바로가기</span>
              </a>
            </div>

            <a
              href="tel:1544-8777"
              className="flex flex-col items-center justify-center gap-1 w-[140px] h-[70px] md:w-[160px] md:h-[80px] border-2 border-gray-200 rounded-lg hover:border-primary/50 hover:bg-gray-50 transition-all ml-auto"
            >
              <Phone className="h-4 w-4 md:h-5 md:w-5 text-primary flex-shrink-0" />
              <span className="font-semibold text-xs md:text-sm whitespace-nowrap">고객센터 연결</span>
            </a>
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        <aside
          className={`
          fixed lg:sticky top-[73px] left-0 h-[calc(100vh-73px)]
          w-80 bg-[#1a1a1a] text-white flex-shrink-0 overflow-y-auto z-40
          transition-transform duration-300 ease-in-out
          ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
        >
          <nav className="p-6 space-y-3">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-4 px-5 py-4 rounded-lg transition-colors text-gray-300 hover:bg-white/10 hover:text-white"
            >
              <LayoutGrid className="h-6 w-6 flex-shrink-0" />
              <span className="font-semibold text-xl leading-tight">주요 기능</span>
            </Link>
            <Link
              href="/signup-guide"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-4 px-5 py-4 rounded-lg transition-colors bg-[#a50034] text-white"
            >
              <FileText className="h-6 w-6 flex-shrink-0" />
              <div className="flex flex-col leading-tight">
                <span className="font-semibold text-xl">BECON cloud</span>
                <span className="font-semibold text-xl">가입방법 안내</span>
              </div>
            </Link>
          </nav>
        </aside>

        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-black/50 z-30 lg:hidden" onClick={() => setMobileMenuOpen(false)} />
        )}

        <main className="flex-1 lg:ml-0 relative">
          <div className="container mx-auto px-4 py-6 max-w-6xl">
            <div className="mb-6 text-center">
              <h1 className="text-xl md:text-2xl font-bold mb-2">BECON cloud 가입방법 안내</h1>
              <p className="text-xs md:text-sm text-muted-foreground">
                이해를 돕기 위한 이미지로 실제 UI와 달라질 수 있습니다
              </p>
            </div>

            <div className="flex items-center gap-3 md:gap-6 mb-6">
              {/* Previous Button */}
              <Button
                variant="outline"
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className="h-12 w-12 md:h-14 md:w-14 rounded-full shadow-lg bg-white hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed flex-shrink-0"
                size="icon"
              >
                <ChevronLeft className="h-6 w-6" />
                <span className="sr-only">이전</span>
              </Button>

              {/* Content Card */}
              <div className="bg-white rounded-lg shadow-sm border p-4 flex-1">
                <div className="space-y-4">
                  <div>
                    <h2 className="text-lg md:text-xl font-bold mb-2">{slides[currentSlide].title}</h2>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                      {slides[currentSlide].content}
                    </p>
                  </div>

                  <div className="relative w-full bg-secondary/10 rounded-lg overflow-hidden">
                    <Image
                      src={slides[currentSlide].image || "/placeholder.svg"}
                      alt={slides[currentSlide].title}
                      width={1200}
                      height={800}
                      className="w-full h-auto"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Next Button */}
              <Button
                onClick={nextSlide}
                disabled={currentSlide === slides.length - 1}
                className="h-12 w-12 md:h-14 md:w-14 rounded-full shadow-lg bg-[#a50034] hover:bg-[#8a0029] disabled:opacity-30 disabled:cursor-not-allowed flex-shrink-0"
                size="icon"
              >
                <ChevronRight className="h-6 w-6" />
                <span className="sr-only">다음</span>
              </Button>
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-center gap-2 flex-wrap">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentSlide ? "w-8 bg-[#a50034]" : "w-2 bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`슬라이드 ${index + 1}로 이동`}
                  />
                ))}
              </div>

              <div className="flex items-center justify-center gap-4">
                <span className="text-sm text-muted-foreground">
                  {currentSlide + 1} / {slides.length}
                </span>
              </div>
            </div>
          </div>
        </main>
      </div>
      <BeconCloudPopup />
    </div>
  )
}
