import clsx from "clsx"

export interface SidebarSection {
  key: string
  title: string
  icon: string
}

interface Props {
  sections: SidebarSection[]
  activeSection: string | null
  onSelect: (key: string | null) => void // 👈 اجازه null
}

export function Sidebar({ sections, activeSection, onSelect }: Props) {
  return (
    <div
      dir="rtl"
      className="
        w-full
        px-6
        mt-0
      "
    >
      <nav className="flex gap-3">
        {sections.map((section, index) => {
          const isActive = activeSection === section.key

          return (
            <button
              key={section.key}
              onClick={() =>
                onSelect(isActive ? null : section.key) // ✅ کلیک مجدد = ریست
              }
              style={{
                transitionDelay: `${index * 50}ms`, // ✨ نرمی پلکانی
              }}
              className={clsx(
                `
                group
                h-16
                overflow-hidden
                transition-all
                duration-300
                ease-out
              `,
                isActive ? "w-72" : "w-16 hover:w-72"
              )}
            >
              <div
                className={clsx(
                  `
                  h-full
                  w-full
                  flex
                  items-center
                  gap-4
                  rounded-b-2xl
                  bg-white/90
                  backdrop-blur
                  shadow-md
                  px-4
                  transition-colors
                  duration-300
                `,
                  isActive
                    ? "bg-blue-100"
                    : "group-hover:bg-gray-100"
                )}
              >
                {/* ICON */}
                <img
                  src={section.icon}
                  alt={section.title}
                  className="w-11 h-11 object-contain shrink-0"
                />

                {/* TITLE */}
                <span
                  className={clsx(
                    `
                    text-sm
                    font-medium
                    whitespace-nowrap
                    transition-all
                    duration-300
                  `,
                    isActive
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0"
                  )}
                >
                  {section.title}
                </span>
              </div>
            </button>
          )
        })}
      </nav>
    </div>
  )
}
