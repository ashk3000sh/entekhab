import { useState } from "react"
import type { CircleItem } from "./data/circles"
import { organizationCircles, benchmarkCircles, redesignCircles } from "./data/circles"
import { sections } from "./data/sections"
import { Sidebar } from "./components/Sidebar"
import { Header } from "./components/Header"
import { CircleButtons } from "./components/CircleButtons"
import { InfoModal } from "./components/InfoModal"
import { IntroCard } from "./components/IntroCard"

export default function App() {
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [activeItem, setActiveItem] = useState<CircleItem | null>(null)
  const [showCircles, setShowCircles] = useState(false)

  // ─── جدید ─── برای مدیریت رنگ دایره‌ها
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [selectedIndices, setSelectedIndices] = useState<Set<number>>(new Set())

  // فول‌اسکرین
  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
    } else {
      document.exitFullscreen()
    }
  }

  // ریست کامل UI
  const resetUI = () => {
    setActiveSection(null)
    setActiveItem(null)
    setActiveIndex(null)
    setSelectedIndices(new Set())
  }

  // انتخاب داده‌ها
  const circles =
    activeSection === "benchmark"
      ? benchmarkCircles
      : activeSection === "redesign"
      ? redesignCircles
      : activeSection === "organization"
      ? organizationCircles
      : []

  const zigzag = activeSection === "organization"

  const activeTitle = sections.find((s) => s.key === activeSection)?.title

  // هندلر کلیک روی دایره
  const handleCircleClick = (index: number, item: CircleItem) => {
    setSelectedIndices((prev) => {
      const newSet = new Set(prev)
      newSet.add(index)
      return newSet
    })
    setActiveIndex(index)
    setActiveItem(item)
  }

  return (
    <div className="bg-blue-900 min-h-screen flex flex-col bg-cover bg-center font-peyda">
      {/* --- Header --- */}
      <Header toggleFullScreen={toggleFullScreen} title={activeTitle} />

      {/* --- Piano Tabs زیر هدر --- */}
      <Sidebar
        sections={sections}
        activeSection={activeSection}
        onSelect={(key) => {
          if (key === activeSection) {
            // ریست
            resetUI()
            setShowCircles(false)
          } else {
            setShowCircles(false) // اول مخفی
            setActiveSection(key)
            setActiveItem(null)
            setActiveIndex(null)
            setSelectedIndices(new Set())

            setTimeout(() => {
              setShowCircles(true) // بعد ظاهر (برای انیمیشن)
            }, 50)
          }
        }}
      />

      {/* --- Main Content --- */}
      <main className="relative flex-1 px-8 py-10" dir="rtl">
        {!activeSection && <IntroCard visible />}

        {activeSection && (
          <div className="relative mt-0 h-20 flex justify-center">
            {circles.map((item, index) => (
              <CircleButtons
                key={`${activeSection}-${item.id}`} // مهم
                total={circles.length}
                index={index}
                visible={showCircles}
                data={item}
                zigzag={zigzag}
                isActive={activeIndex === index}
                wasSelected={selectedIndices.has(index)}
                onClick={() => handleCircleClick(index, item)}
              />
            ))}
          </div>
        )}
      </main>

      {/* --- Info Modal --- */}
      {activeItem && (
        <InfoModal data={activeItem} onClose={() => setActiveItem(null)} />
      )}
    </div>
  )
}