import { useState, useEffect } from "react"
import logo from "../assets/logo.png"

interface HeaderProps {
  toggleFullScreen: () => void
  title?: string
}

export function Header({ toggleFullScreen, title }: HeaderProps) {
  const [isFullScreen, setIsFullScreen] = useState(false)

  // بررسی تغییر وضعیت فول اسکرین (اگر کاربر با Esc خارج کند)
  useEffect(() => {
    const handler = () => {
      setIsFullScreen(!!document.fullscreenElement)
    }
    document.addEventListener("fullscreenchange", handler)
    return () => document.removeEventListener("fullscreenchange", handler)
  }, [])

  return (
    <header
      dir="rtl"
      className="
        font-peyda
        w-full
        bg-[#ffffffef]
        py-4 px-6
      "
    >
      <div className="
          grid
          grid-cols-[auto_1fr_auto]
          items-center
        "
      >
        {/* ستون راست: لوگو */}
        <div className="flex items-center justify-start">
          <img
            src={logo}
            alt="لوگو"
            className="h-12 w-auto"
          />
        </div>

        {/* ستون وسط: عنوان */}
        <div className="text-center px-6">
          <h1 className="text-blue-950 text-2xl md:text-3xl font-bold leading-snug">
            {title ?? "سازمان دهی پیشنهادی دپارتمان استراتژی ارتباطات، برند و ذینفعان"}
          </h1>

          <p className="text-blue-950 text-sm md:text-base font-normal mt-1">
            (Communications, Brand & Stakeholders Strategy Department - CBSS)
          </p>
        </div>

        {/* ستون چپ: متن کوچک + دکمه فول اسکرین */}
        <div className="flex items-center gap-2 text-blue-950 opacity-70 whitespace-nowrap justify-end">
          <span>ویرایش سوم – بهمن ۱۴۰۴</span>

          <button
            onClick={toggleFullScreen}
            className="bg-amber-500 text-white text-xs md:text-sm px-2 py-1 rounded hover:bg-blue-900"
          >
            {isFullScreen ? "خروج از تمام صفحه" : "تمام صفحه"}
          </button>
        </div>
      </div>
    </header>
  )
}
