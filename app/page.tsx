"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Zap, Bell, FileText, Brain, Phone, LayoutGrid, Menu, X } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import Link from "next/link"
import { BeconCloudPopup } from "@/components/becon-cloud-popup"
import { ErrorAlertPopup } from "@/components/error-alert-popup"

export default function BeconCloudPage() {
  const [activeSection, setActiveSection] = useState("features")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [errorAlertOpen, setErrorAlertOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3 gap-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-secondary rounded-lg flex-shrink-0"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>

            <div className="flex items-center gap-2 md:gap-3">
              {/* LG BECON cloud Logo Box */}
              <a
                href="https://beconcloud.lge.com/index.do"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-0.5 w-[120px] h-[60px] md:w-[140px] md:h-[70px] border-2 border-gray-200 rounded-lg hover:border-primary/50 hover:bg-gray-50 transition-all group"
              >
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-[#a50034] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-[10px] md:text-xs">LG</span>
                  </div>
                  <span className="font-bold text-[11px] md:text-xs leading-none whitespace-nowrap">
                    LG BECON cloud
                  </span>
                </div>
                <span className="text-[10px] text-gray-400">바로가기</span>
              </a>

              {/* Hi-M Solutek Logo Box */}
              <a
                href="https://himsolutek.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-0.5 w-[120px] h-[60px] md:w-[140px] md:h-[70px] border-2 border-gray-200 rounded-lg hover:border-primary/50 hover:bg-gray-50 transition-all group"
              >
                <span className="font-bold text-[11px] md:text-xs whitespace-nowrap">Hi-M Solutek</span>
                <span className="text-[10px] text-gray-400">바로가기</span>
              </a>
            </div>

            <a
              href="tel:1544-8777"
              className="flex flex-col items-center justify-center gap-0.5 w-[120px] h-[60px] md:w-[140px] md:h-[70px] border-2 border-gray-200 rounded-lg hover:border-primary/50 hover:bg-gray-50 transition-all ml-auto"
            >
              <Phone className="h-3.5 w-3.5 md:h-4 md:w-4 text-primary flex-shrink-0" />
              <span className="font-semibold text-[11px] md:text-xs whitespace-nowrap">고객센터 연결</span>
            </a>
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar Navigation */}
        <aside
          className={`
          fixed lg:sticky top-[65px] left-0 h-[calc(100vh-65px)]
          w-72 bg-[#1a1a1a] text-white flex-shrink-0 overflow-y-auto z-40
          transition-transform duration-300 ease-in-out
          ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
        >
          <nav className="p-5 space-y-2.5">
            <a
              href="#features"
              onClick={() => {
                setActiveSection("features")
                setMobileMenuOpen(false)
              }}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeSection === "features"
                  ? "bg-[#a50034] text-white"
                  : "text-gray-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              <LayoutGrid className="h-5 w-5 flex-shrink-0" />
              <span className="font-semibold text-lg leading-tight">주요 기능</span>
            </a>
            <Link
              href="/signup-guide"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-gray-300 hover:bg-white/10 hover:text-white text-left"
            >
              <FileText className="h-5 w-5 flex-shrink-0" />
              <div className="flex flex-col leading-tight">
                <span className="font-semibold text-lg">BECON cloud</span>
                <span className="font-semibold text-lg">가입방법 안내</span>
              </div>
            </Link>
          </nav>
        </aside>

        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-black/50 z-30 lg:hidden" onClick={() => setMobileMenuOpen(false)} />
        )}

        {/* Main Content */}
        <main className="flex-1 lg:ml-0">
          {/* Hero Section */}
          <section className="py-10 md:py-16 lg:py-24 bg-gradient-to-b from-secondary/30 to-background">
            <div className="container mx-auto px-4">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-6 md:mb-10">
                  <div className="inline-block mb-3 md:mb-5 px-3 py-1.5 bg-primary/10 rounded-full">
                    <span className="text-xs md:text-sm font-semibold text-primary">LG전자 제공</span>
                  </div>
                  <h1 className="text-3xl md:text-3xl lg:text-3xl font-bold mb-3 md:mb-5 text-balance">
                    시스템 에어컨을
                    <br />
                    <span className="text-primary">스마트하게 원격 관리</span>
                  </h1>
                </div>

                {/* Video Preview Card */}
                <div className="max-w-4xl mx-auto">
                  <Card className="p-3 md:p-5 bg-white overflow-hidden">
                    <div className="relative aspect-video rounded-lg overflow-hidden bg-black">
                      <iframe
                        src="https://archive.org/embed/20251015_20251015_0401"
                        className="absolute inset-0 w-full h-full"
                        frameBorder="0"
                        allowFullScreen
                        allow="fullscreen"
                      />
                    </div>
                    <div className="flex items-center justify-center gap-2 mt-3">
                      <p className="text-base md:text-lg lg:text-xl font-semibold text-primary">
                        BECON cloud 소개 영상
                      </p>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Platform Info */}
          <section className="py-10 md:py-14 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <h2 className="text-3xl md:text-3xl lg:text-3xl font-bold mb-5 md:mb-6 leading-tight">
                      제어는 더 <span className="text-primary">편리</span>하게
                      <br />
                      관리는 더 <span className="text-primary">스마트</span>하게
                    </h2>
                    <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
                      BECON cloud는 클라우드 기반의 에어솔루션 제품 토탈 유지 관리
                      <br /> 서비스 플랫폼으로써 실시간 모니터링 및 주요 에러 알림 기능을 통해
                      <br /> 신속한 출동 서비스를 제공하고 설비의 효율적인 관리 및 에너지 절감 서비스를 제공합니다.
                    </p>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-5 md:p-6 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-5xl md:text-6xl mb-3">💻📱</div>
                      <p className="font-bold text-sm md:text-base lg:text-lg">Web / App 지원</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Key Features */}
          <section id="features" className="py-10 md:py-16 bg-secondary/30">
            <div className="container mx-auto px-4">
              <div className="text-center mb-10 md:mb-14">
                <div className="flex items-center justify-center gap-2.5 mb-3 md:mb-5">
                  <h2 className="text-3xl md:text-3xl lg:text-3xl font-bold">주요 에러 알림</h2>
                  <Button
                    onClick={() => setErrorAlertOpen(true)}
                    className="bg-[#a50034] hover:bg-[#8a002b] text-white px-3 py-1.5 rounded-full text-xs font-semibold"
                  >
                    팝업
                  </Button>
                </div>
                <p className="text-base md:text-lg lg:text-xl text-muted-foreground">
                  TMS를 통한 능동서비스 체계 - 고장 상황에 대한 빠른 대처
                </p>
              </div>

              <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
                <Card className="p-3 md:p-5 hover:shadow-lg transition-shadow">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2.5 md:mb-3">
                    <Bell className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-1.5">01</div>
                  <h3 className="text-lg md:text-xl font-bold mb-2">실시간 이상 알림</h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    사용 기기 이상 발생 시,
                    <br />
                    Web/App을 통한 즉시 알림
                  </p>
                </Card>

                <Card className="p-3 md:p-5 hover:shadow-lg transition-shadow">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2.5 md:mb-3">
                    <Zap className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-1.5">02</div>
                  <h3 className="text-lg md:text-xl font-bold mb-2">편리한 서비스 접수</h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    알림 팝업을 통한{" "}
                    <span className="text-primary font-bold">
                      {" "}
                      <br />
                      원터치
                    </span>{" "}
                    서비스 접수
                  </p>
                </Card>

                <Card className="p-3 md:p-5 hover:shadow-lg transition-shadow">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2.5 md:mb-3">
                    <FileText className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-1.5">03</div>
                  <h3 className="text-lg md:text-xl font-bold mb-2">준비된 서비스 진행</h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    사전 데이터 확인 및 <br /> 필요부품 준비 후 서비스 출동
                  </p>
                </Card>

                <Card className="p-3 md:p-5 hover:shadow-lg transition-shadow">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2.5 md:mb-3">
                    <Brain className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-1.5">04</div>
                  <h3 className="text-lg md:text-xl font-bold mb-2">정상운전</h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    신속한 서비스로 <br />
                    최적의 운전 상태 유지
                  </p>
                </Card>
              </div>
            </div>
          </section>

          {/* Detailed Features with Images */}
          <section id="details" className="py-10 md:py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-[1600px] mx-auto space-y-10 md:space-y-16">
                {/* Energy Waste Alerts */}
                <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-start">
                  <div>
                    <h2 className="text-3xl md:text-3xl lg:text-3xl font-bold mb-5 md:mb-6">에너지 낭비 알림</h2>
                    <p className="text-base md:text-lg text-muted-foreground mb-5 md:mb-6 leading-relaxed">
                      <span className="font-semibold">에너지 절감 계약(유상) 고객 Only</span>
                      <br />- BECON cloud Web/APP을 통한 낭비 알림 제공
                    </p>
                    <h3 className="text-3xl md:text-3xl lg:text-3xl font-bold mb-5 md:mb-6 text-primary">
                      전기요금을 지켜주는 꿀팁!
                      <br />
                      에너지 절감까지!
                    </h3>
                    <div className="space-y-3 md:space-y-4">
                      <div className="flex items-start gap-2.5">
                        <span className="text-primary text-xl md:text-2xl mt-0.5 flex-shrink-0">✓</span>
                        <p className="text-base md:text-lg lg:text-xl leading-relaxed">
                          끄기 잊음 / 단열 불량 알림 / 설정 온도 과다
                        </p>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <span className="text-primary text-xl md:text-2xl mt-0.5 flex-shrink-0">✓</span>
                        <p className="text-base md:text-lg lg:text-xl leading-relaxed">
                          실내 온도 이상 / 운전 시간 과다 / 잦은 On/Off
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex items-start justify-center md:justify-end">
                    <div className="relative w-full max-w-[1600px]">
                      <Image
                        src="/images/design-mode/image(4).png"
                        alt="당일상담비밀분석 - 에너지 낭비 알림 상세"
                        width={1600}
                        height={2000}
                        className="rounded-lg shadow-xl w-full h-auto"
                      />
                    </div>
                  </div>
                </div>

                {/* Energy Savings Report */}
                <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-start">
                  <div className="order-2 md:order-1">
                    <h2 className="text-3xl md:text-3xl lg:text-3xl font-bold mb-5 md:mb-6">에너지 절감 리포트</h2>
                    <p className="text-sm md:text-base lg:text-lg text-muted-foreground mb-5 md:mb-6 leading-relaxed">
                      <span className="font-semibold">※ 에너지 절감 계약(유상) 고객 Only</span>
                      <br />- BECON cloud Web을 통한 절감 리포트 확인 가능
                    </p>

                    <h3 className="text-3xl md:text-3xl lg:text-3xl font-bold mb-5 text-primary">
                      실내 쾌적함은 유지하면서
                      <br />
                      에너지 절감까지!
                    </h3>
                    <div className="space-y-3">
                      <Card className="p-4 md:p-5 bg-primary/5 border-primary/20">
                        <h4 className="font-bold mb-3 text-lg md:text-xl">에너지 절감 리포트</h4>
                        <h5 className="font-bold mb-2.5 text-base md:text-lg">에너지 절감 누적 분석</h5>
                        <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
                          2023년 12월 ~ 2024년 11월 에너지 예측 절감 금액은 7,448,384원입니다. <br />
                          예측 절감량(절감률)은 59,506kWh(16.7%) 입니다.
                        </p>
                      </Card>
                    </div>
                  </div>
                  <div className="order-1 md:order-2 relative flex items-start justify-center md:justify-start">
                    <div className="relative w-full max-w-[1000px]">
                      <Image
                        src="/images/energy-savings-cumulative-analysis.png"
                        alt="에너지 절감 누적 분석 리포트"
                        width={1000}
                        height={800}
                        className="rounded-lg shadow-xl w-full h-auto"
                      />
                    </div>
                  </div>
                </div>

                {/* Device Service Report Detail */}
                <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-center">
                  <div className="order-2 md:order-1 relative">
                    <Image
                      src="/images/device-service-comprehensive-report.png"
                      alt="기기서비스 종합 리포트"
                      width={750}
                      height={900}
                      className="rounded-lg shadow-xl w-full h-auto"
                    />
                  </div>
                  <div className="order-1 md:order-2">
                    <h2 className="text-3xl md:text-3xl lg:text-3xl font-bold mb-5 md:mb-6">기기서비스 리포트</h2>
                    <p className="text-xl md:text-2xl lg:text-3xl font-bold mb-5 md:mb-6">
                      내 제품의 상태와 서비스 이력을 한눈에!
                    </p>
                    <div className="space-y-4 md:space-y-5">
                      <div className="flex items-start gap-3 md:gap-4">
                        <div className="w-9 h-9 md:w-10 md:h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-primary font-bold text-base md:text-lg">1</span>
                        </div>
                        <div>
                          <h4 className="font-bold mb-1.5 text-base md:text-lg lg:text-xl">현재 에러 발생 기기</h4>
                          <p className="text-sm md:text-base lg:text-lg">
                            현재 에러 발생 기기는 0대입니다. (발행일 기준)
                          </p>
                          <p className="text-sm md:text-base lg:text-lg">실외기 : 없습니다</p>
                          <p className="text-sm md:text-base lg:text-lg">실내기 : 없습니다</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 md:gap-4">
                        <div className="w-9 h-9 md:w-10 md:h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-primary font-bold text-base md:text-lg">2</span>
                        </div>
                        <div>
                          <h4 className="font-bold mb-1.5 text-base md:text-lg lg:text-xl">과거 에러 발생 기기</h4>
                          <p className="text-sm md:text-base lg:text-lg">분석기간 동안</p>
                          <p className="text-sm md:text-base lg:text-lg">실외기 0대</p>
                          <p className="text-sm md:text-base lg:text-lg">
                            실내기 1대에 대하여 에러 이력이 확인되었습니다
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 md:gap-4">
                        <div className="w-9 h-9 md:w-10 md:h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-primary font-bold text-base md:text-lg">3</span>
                        </div>
                        <div>
                          <h4 className="font-bold mb-1.5 text-base md:text-lg lg:text-xl">서비스 이력</h4>
                          <p className="text-sm md:text-base lg:text-lg">분석기간 동안</p>
                          <p className="text-sm md:text-base lg:text-lg">부품 소요 서비스 처리는 10건</p>
                          <p className="text-sm md:text-base lg:text-lg">조정 수리 및 방문 설명 4건 수행하였습니다</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* AI Prediction */}
                <div className="bg-gradient-to-br from-primary/5 to-secondary/30 rounded-2xl p-5 md:p-6 lg:p-10">
                  <div className="text-center mb-6 md:mb-10">
                    <h2 className="text-3xl md:text-3xl lg:text-3xl font-bold mb-3 md:mb-5">AI 고장예측</h2>
                    <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-semibold">
                      제품이 고장나기전 미리 대비하자!
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5 md:gap-6 mb-6 md:mb-10">
                    <Card className="p-4 md:p-5 lg:p-6 flex flex-col">
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4">핵심 6개 항목 진단</h3>
                      <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-3 whitespace-nowrap overflow-hidden text-ellipsis">
                        압축기,센서류,팬(모터),드레인펌프,약운전,냉매
                      </p>
                      <div className="relative w-full flex-1 min-h-[350px]">
                        <Image
                          src="/images/ai-prediction-process.png"
                          alt="AI 고장예측 프로세스"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </Card>

                    <Card className="p-4 md:p-5 lg:p-6 flex flex-col">
                      <div className="relative w-full flex-1 min-h-[350px]">
                        <Image
                          src="/images/outdoor-unit-diagnostic.png"
                          alt="점검 필요한 실외기 진단 리포트"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </Card>
                  </div>

                  <div className="text-center">
                    <p className="text-xl md:text-2xl lg:text-3xl font-bold mb-2.5">
                      고장 예측을 통한 선제적 조치로 성수기 걱정은 <span className="text-primary">Zero</span>
                    </p>
                    <p className="text-base md:text-lg lg:text-xl text-muted-foreground">
                      AI 기술로 고장을 미리 예측하여 사전 조치가 가능합니다
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-10 md:py-16 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 md:mb-6">
                  지금 바로 BECON cloud를
                  <br />
                  경험해 보세요
                </h2>
                <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 opacity-90">
                  스마트한 에어컨 관리로 에너지 절감과 편리함을 동시에 누리세요
                </p>
                <div className="flex flex-col sm:flex-row gap-2.5 md:gap-3 justify-center">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="text-xs md:text-sm bg-white text-primary hover:bg-white/90"
                    asChild
                  >
                    <a href="https://beconcloud.lge.com/index.do" target="_blank" rel="noopener noreferrer">
                      Web 버전 시작하기
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-xs md:text-sm border-white text-white hover:bg-white/10 bg-transparent"
                    asChild
                  >
                    <a
                      href="https://play.google.com/store/apps/details?id=com.lge.beconcloud"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Android 다운로드
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-xs md:text-sm border-white text-white hover:bg-white/10 bg-transparent"
                    asChild
                  >
                    <a
                      href="https://apps.apple.com/kr/app/becon-cloud/id1440130080"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      iOS 다운로드
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-6 md:py-10 bg-foreground text-background">
            <div className="container mx-auto px-4">
              <div className="max-w-7xl mx-auto">
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-7 h-7 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-primary-foreground font-bold text-xs">LG</span>
                      </div>
                      <span className="font-bold text-xs md:text-sm">LG BECON cloud</span>
                    </div>
                    <p className="text-[11px] md:text-xs opacity-70">시스템 에어컨 원격 관리 솔루션</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2.5 text-xs md:text-sm">서비스</h4>
                    <ul className="space-y-1.5 text-[11px] md:text-xs opacity-70">
                      <li>에너지 절감 리포트</li>
                      <li>실시간 알림</li>
                      <li>기기서비스 리포트</li>
                      <li>AI 고장예측</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2.5 text-xs md:text-sm">고객 지원</h4>
                    <ul className="space-y-1.5 text-[11px] md:text-xs opacity-70">
                      <li>Web 플랫폼</li>
                      <li>모바일 App</li>
                      <li>
                        <a
                          href="tel:1544-8777"
                          className="hover:opacity-100 transition-opacity flex items-center gap-1.5"
                        >
                          <Phone className="h-3 w-3" />
                          고객센터: 1544-8777
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </main>
      </div>

      <BeconCloudPopup />
      <ErrorAlertPopup open={errorAlertOpen} onOpenChange={setErrorAlertOpen} />
    </div>
  )
}
