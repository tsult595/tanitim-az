'use client'

import dynamic from 'next/dynamic';
import ContactUsForm from "@/components/mainPage/ContactUsForm";

const Map = dynamic(() => import('@/components/Map'), { 
  ssr: false,
  loading: () => <div className="w-full h-[500px] bg-slate-100 animate-pulse rounded-3xl" />
});

const ContactUs = () => {
  return (
    <div id="contact-section" className="w-full flex flex-col py-6 scroll-mt-10">
      <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-5">
     Bizimlə Əlaqə
     </h2>
      
      <div className="relative w-full min-h-[520px] rounded-3xl overflow-hidden shadow-xl border border-slate-200">
        <div className="absolute inset-0 z-0">
          <Map />
        </div>

        <div className="relative z-10 p-4 sm:p-6 max-w-md">
          <ContactUsForm />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;