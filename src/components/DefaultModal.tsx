

type Props = {
  visible: boolean
  text: string
  onClose: () => void
}

export function DefaultModal({ visible, text, onClose }: Props) {
  if (!visible) return null

  return (
    <div
      className="absolute inset-0 flex items-center justify-center z-50"
      onClick={onClose} // کلیک روی بک‌گراند مدال را می‌بندد
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full"
        onClick={(e) => e.stopPropagation()} // جلوگیری از بسته شدن با کلیک داخل مدال
      >
        <p className="text-lg font-bold text-gray-900">{text}</p>
      </div>
    </div>
  )
}
