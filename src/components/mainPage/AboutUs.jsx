'use client'

import { Play } from "lucide-react";

const avatars = [
  "https://i.pravatar.cc/64?img=12",
  "https://i.pravatar.cc/64?img=32",
  "https://i.pravatar.cc/64?img=47",
];

const AboutUs = () => {
  return (
    <section className="relative w-full overflow-hidden rounded-3xl bg-[#F7F5F2]">
      {/* Мягкий градиентный меш-фон в цветах бренда */}
      <div className="absolute inset-0">
        <div className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-[#F0692A]/25 blur-[90px]" />
        <div className="absolute -top-10 right-0 w-[380px] h-[380px] rounded-full bg-[#F5AD82]/35 blur-[90px]" />
        <div className="absolute bottom-0 left-10 w-[360px] h-[360px] rounded-full bg-[#E2ECE9] blur-[80px]" />
        {/* Едва заметная сетка поверх градиента */}
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(60,60,59,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(60,60,59,0.06) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative flex flex-col items-center text-center px-6 py-20 sm:py-24">
        {/* Бейдж + стрелка + аватары */}
        <div className="relative mb-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-[#3C3C3B] shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F0692A]" />
            İndi qoşulun
          </span>

          {/* Изогнутая стрелка от бейджа к аватарам */}
          <svg
            className="absolute left-1/2 top-full -translate-x-[85%] w-14 h-10"
            viewBox="0 0 60 40"
            fill="none"
          >
            <path
              d="M52 4C40 4 18 10 8 32"
              stroke="#3C3C3B"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path d="M4 24L8 32L16 30" stroke="#3C3C3B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <div className="flex items-center gap-3 mb-10">
          <div className="flex items-center -space-x-3">
          </div>
         
        </div>

        {/* Заголовок */}
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#1F1F1E] leading-[1.1] max-w-3xl">
          Brendinizi İnnovativ
          <br />
          Həllərlə Gücləndiririk
        </h1>

        <p className="mt-6 text-base sm:text-lg text-[#3C3C3B]/70 max-w-xl">
          Yaradıcı dizayndan texniki həllərə qədər — xidmətlərimiz sənayedə
          mükəmməlliyi müəyyən edir.
        </p>

        {/* Кнопки */}
        <div className="mt-9 flex items-center gap-3">
        
          <button className="rounded-full border border-[#1F1F1E]/20 bg-white text-[#1F1F1E] text-sm font-semibold px-6 py-3 hover:border-[#1F1F1E]/40 transition-colors">
            Xidmətlərə baxın
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;