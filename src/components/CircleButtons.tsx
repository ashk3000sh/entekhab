import type { CircleItem } from "../data/circles"

type Props = {
  index: number
  total: number          // 👈 خیلی مهم (تعداد کل دایره‌ها)
  visible: boolean
  data: CircleItem
  onClick: () => void
  zigzag?: boolean
  isActive?: boolean
  wasSelected: boolean   // جدید
}

export function CircleButtons({
  index,
  total,
  visible,
  data,
  onClick,
  zigzag = false,
  isActive = false,
  wasSelected,
}: Props) {
  const spacing = 130
  const size = 110

  // ⭐ محاسبه مرکز واقعی
  const centerIndex = (total - 1) / 2
  const xOffset = (centerIndex - index) * spacing
  const yOffset = zigzag ? (index % 2 === 0 ? -20 : 20) : 0

  // ──────────────────────────────────────
  let bgColor = "#ffffff";           // پیش‌فرض: سفید (هنوز کلیک نشده)

  if (isActive) {
    bgColor = "#90EE90";             // سبز = آخرین کلیک‌شده (فعلی)
  } else if (wasSelected) {
    bgColor = "#d8b4fe";             // بنفش = قبلاً کلیک شده (نه آخرین)
  }
  // ──────────────────────────────────────

  return (
    <button
      onClick={onClick}
      className="
        absolute
        left-1/2
        top-0
        -translate-x-1/2
        rounded-full
        text-blue-900
        text-sm
        font-bold
        shadow
        flex items-center justify-center
        cursor-pointer
        transition-all duration-500 ease-out
        px-3 py-3
      "
      style={{
        width: size,
        height: size,

        zIndex: isActive ? 50 : 10 + index,
        backgroundColor: bgColor,

        transform: visible
          ? `translateX(${xOffset}px) translateY(${yOffset}px) scale(1)`
          : `translateX(0px) translateY(0px) scale(0.5)`,

        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",

        transitionProperty: "transform, opacity, background-color",
        transitionDuration: "500ms, 500ms, 0ms",
        transitionTimingFunction: "ease-out",
        transitionDelay: `${index * 120}ms, ${index * 120}ms, 0ms`,
      }}
      title={data.title}
      onMouseEnter={(e) => {
        if (!isActive && !wasSelected) {
          e.currentTarget.style.backgroundColor = "#e0f2fe"
        }
      }}
      onMouseLeave={(e) => {
        if (!isActive && !wasSelected) {
          e.currentTarget.style.backgroundColor = "#ffffff"
        }
      }}
    >
      {data.title}
    </button>
  )
}