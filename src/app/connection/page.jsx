'use client'

import dynamic from 'next/dynamic';
import ContactUsForm from "@/components/ContactUsForm";

// Динамический импорт карты без SSR
const Map = dynamic(() => import('@/components/Map'), { 
  ssr: false,
  loading: () => <div className="w-full h-full bg-slate-100 animate-pulse rounded-2xl" />
});

const ConnectionPage = () => {
  return (
    // h-[calc(100vh-80px)] учитывает высоту вашего Header (около 80px), чтобы страница не скроллилась
    <div className="relative w-[80%] m-auto h-[calc(100vh-80px)] p-4 sm:p-6 flex flex-col">
      
      {/* Заголовок */}
      <h1 className="text-xl sm:text-3xl font-bold text-slate-950 tracking-tight mb-4 text-center shrink-0">
        Bizimlə Əlaqə
      </h1>
      
      {/* Контейнер карты и формы на весь оставшийся экран */}
      <div className="relative w-full flex-1 rounded-3xl overflow-hidden shadow-xl border border-slate-200">
        
        {/* 1. Карта на заднем плане (100% высоты ровно под экран) */}
        <div className="absolute inset-0 z-0">
          <Map />
        </div>

        {/* 2. Форма поверх карты (слева) */}
        <div className="relative z-10 p-6 max-w-md m-4 sm:m-6">
          <ContactUsForm />
        </div>

      </div>

    </div>
  );
};

export default ConnectionPage;