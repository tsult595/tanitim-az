// 'use client'

// import dynamic from 'next/dynamic';
// import ContactUsForm from "@/components/ContactUsForm";

// const Map = dynamic(() => import('@/components/Map'), { 
//   ssr: false,
//   loading: () => <div className="w-full h-[500px] bg-slate-100 animate-pulse rounded-3xl" />
// });

// const ConnectionPage = () => {
//   return (
//     <div className="w-full flex flex-col py-6">
//       {/* Заголовок */}
//       <h1 className="text-xl sm:text-3xl font-bold text-slate-950 tracking-tight mb-6 text-center">
//         Bizimlə Əlaqə
//       </h1>
      
//       {/* Контейнер карты и формы */}
//       <div className="relative w-full min-h-[520px] rounded-3xl overflow-hidden shadow-xl border border-slate-200">
        
//         {/* 1. Карта на заднем плане */}
//         <div className="absolute inset-0 z-0">
//           <Map />
//         </div>

//         {/* 2. Форма поверх карты (слева) */}
//         <div className="relative z-10 p-4 sm:p-6 max-w-md">
//           <ContactUsForm />
//         </div>

//       </div>
//     </div>
//   );
// };

// export default ConnectionPage;