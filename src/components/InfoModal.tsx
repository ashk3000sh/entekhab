import type { CircleItem } from "../data/circles"

interface Props {
  data: CircleItem
  onClose: () => void
}

export function InfoModal({ data, onClose }: Props) {
  return (
    <div
      className="
        fixed
        bottom-6
        left-1/2
        -translate-x-1/2
        z-50
        w-[90%]
        max-w-5xl
        font-peyda
      "
      dir="rtl"
    >
      <div
        className="
          bg-white
          rounded-2xl
          shadow-xl
          p-6
          relative
          flex
          gap-6
          items-start
        "
      >
        {/* دکمه بستن */}
        <button
          onClick={onClose}
          className="
            absolute
            top-4
            left-4
            text-xl
            text-gray-500
            hover:text-gray-800
          "
        >
          ✕
        </button>

        {/* تصویر */}
        <img
          src={data.image}
          alt={data.title}
          className="
            w-32  
            h-32
            object-cover
            rounded-lg
            shrink-0
          "
        />

        {/* محتوا */}
        <div className="flex-1">
          <p className="text-gray-700 text-lg leading-relaxed">
  <div style={{ whiteSpace: "pre-wrap" }}>
  {data.description.map((part, i) => (
    <span
      key={i}
      className={part.bold ? "font-bold" : ""}
      style={{ color: part.color || "inherit" }}
    >
      {part.text}
    </span>
  ))}
</div>
</p>
        </div>
      </div>
    </div>
  )
}
