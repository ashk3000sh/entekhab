import organization from "../assets/icons/teamwork.png"
import benchmark from "../assets/icons/benchmarking.png"
import redesign from "../assets/icons/redesign.png"
interface Props {
  visible: boolean
}

const cards = [
  
  {
    title: "بنچ مارک و نمونه های جهانی",
    subtitle: "مقدمه",
    image: benchmark,
    text: (
      <>
        سازمان دهی پیشنهادی بر پایه یک هسته مرکزی راهبردی (هاب) و تیم‌های پروژه‌ای و رابط (اسپوک) برای هلدینگ‌های زیرمجموعه استوار است. 
        <br />
         <b>این مدل، کنترل مرکزی بر استراتژی و هویت را حفظ می‌کند، در عین حال اجرا را به کسب‌وکارها نزدیک می‌کند.</b>
      </>
    ),
  },
  {
    title: "شناخت آسیب ها و ضرورت بازطراحی",
    subtitle: "شناسایی صریح و واقع‌بینانه آسیب‌های موجود",
    image: redesign,
    text: (
      <>
        نگاه به این آسیب‌ها، نه از منظر انتقادی یا مقصرمحور، بلکه با رویکرد مدیریت ریسک و بلوغ نهادی انجام شده است؛ به‌گونه‌ای که پاسخ روشنی برای این پرسش فراهم کند:
        <br />
        <b>«در کدام نقاط، ساختار ارتباطات و برند گروه ممکن است زمین بخورد؟»</b>
      </>
    ),
  },
  {
    title: "ساختار پیشنهادی",
    subtitle: "دپارتمان استراتژی ارتباطات",
    image: organization,
    text: (
      <>
        این سازماندهی، تمامی حوزه‌های ارتباطی گروه توسعه را در قالب یک ساختار:
        <br />
        <b>متمرکز در راهبری / چابک در اجرا / و مقیاس‌پذیر برای آینده</b>
        <br />
        سامان‌دهی می‌کند و حوزه ارتباطات را به یکی از اهرم‌های اصلی قدرت و اعتبار
        گروه توسعه سرمایه‌گذاری انتخاب تبدیل می‌سازد.
      </>
    ),
  },
]

export function IntroCard({ visible }: Props) {
  return (
    <div
      className={`
        absolute
        inset-0
        flex
        items-center
        justify-center
        pointer-events-none
        transition-all
        duration-700
        ease-out
        ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95"}
      `}
    >
      <div className="pointer-events-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="
              bg-white/80
              backdrop-blur-xl
              rounded-3xl
              shadow-2xl
              px-8
              py-8
              max-w-sm
              text-center
              transition-all
              duration-500
            "
          >
            {/* 🖼 Image */}
            <img
              src={card.image}
              alt={card.title}
              className="mx-auto mb-6 h-28 w-auto object-contain"
            />

            {/* 📝 Title */}
            <h2 className="text-2xl font-bold text-blue-950 leading-snug">
              {card.title}
              <br />
              <span className="text-lg font-semibold text-blue-900">
                {card.subtitle}
              </span>
            </h2>

            {/* 📄 Text */}
            <p className="mt-4 text-blue-900/80 text-base leading-relaxed">
              {card.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
