type Props = {
  label: string
  rectangular?: boolean
  onToggle: () => void
}

export function CentralCircle({ label, rectangular = false, onToggle }: Props) {
  return (
    <button
      onClick={onToggle}
      className={`
        flex items-center justify-center
        font-bold text-blue-950
        bg-white hover:bg-green-500
        transition-all duration-300
        ${rectangular ? "w-56 h-14 rounded-lg" : "w-20 h-20 rounded-full"}
      `}
    >
      {label}
    </button>
  )
}
