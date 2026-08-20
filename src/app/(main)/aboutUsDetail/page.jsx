'use client'

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ImageAboutFirst from "../../../../public/test.png";

// Простой хук для отслеживания видимости элемента на экране
function useIsVisible(ref) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIntersecting(true);
        observer.disconnect(); // Анимация сработает только 1 раз
      }
    }, { threshold: 0.15 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);

  return isIntersecting;
}

const AboutUsDetail = () => {
  const block1Ref = useRef(null);
  const block2Ref = useRef(null);

  const isBlock1Visible = useIsVisible(block1Ref);
  const isBlock2Visible = useIsVisible(block2Ref);

  return (
    <div className="w-full overflow-hidden">
      {/* ================= БЛОК 1: About Us ================= */}
      <section className="w-full bg-[#F1E9DF] py-16 sm:py-20">
        <div 
          ref={block1Ref} 
          className="max-w-7xl mx-auto px-6 sm:px-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        >
          {/* Текст Блока 1: плавно всплывает */}
          <div className={`transition-all duration-1000 ease-out ${
            isBlock1Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#1F1F1E] mb-5">
              Haqqımızda
            </h1>
            <p className="text-base text-[#3C3C3B]/75 leading-relaxed max-w-md">
              Tanitim.az-ın komandası və mədəniyyəti də məhz məhsulumuz kimidir —
              diqqətlə qurulmuş, formal deyil, xoş təcrübə üçün.
            </p>
          </div>

          {/* Картинка Блока 1: с зум-эффектом при ховере */}
          <div className={`group relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-sm transition-all duration-1000 delay-200 ease-out ${
            isBlock1Visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}>
            <Image
              src={ImageAboutFirst}
              alt="Komandamız"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* ================= БЛОК 2: Missiya ================= */}
      <section className="w-full bg-[#F7F5F2] py-16 sm:py-20">
        <div 
          ref={block2Ref}
          className="max-w-7xl mx-auto px-6 sm:px-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        >
          {/* Картинка Блока 2 */}
          <div className={`group relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-sm order-2 md:order-1 transition-all duration-1000 delay-200 ease-out ${
            isBlock2Visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}>
            <Image
              src={ImageAboutFirst}
              alt="Tanitim.az Logo"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <span className={`absolute top-6 left-6 text-3xl sm:text-4xl font-black text-[#F0692A] tracking-tight drop-shadow-sm transition-all duration-700 delay-500 ${
              isBlock2Visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
            }`}>
             
            </span>
          </div>

          {/* Текст Блока 2 */}
          <div className={`order-1 md:order-2 transition-all duration-1000 ease-out ${
            isBlock2Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#1F1F1E] leading-snug mb-5">
              Missiyamız: Yüzlərlə Brendə Böyüməkdə Kömək
            </h2>
            <p className="text-base text-[#3C3C3B]/75 leading-relaxed max-w-md">
              Biz sadəcə böyük olmağa deyil, düzgün böyüməyə inanırıq. Düzgün
              böyümək — öz biznesinizin uğurunu müştərilərinizin uğuru ilə
              uzlaşdırmaq deməkdir. Qazan-qazan.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsDetail;