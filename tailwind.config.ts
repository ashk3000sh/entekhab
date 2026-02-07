import type { Config } from "tailwindcss"

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        peyda: ["PeydaWeb", "sans-serif"],
      },
      colors: {
        navy: "#0b1c2d",
        neonBlue: "#3b82f6",
      },
      boxShadow: {
        pulse: "0 0 40px rgba(59,130,246,0.9)",
      },
      animation: {
        slowPulse: "pulse 2.5s ease-in-out infinite",
      },
    },
  },
} satisfies Config
