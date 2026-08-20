'use client'

import Map from '@/components/Map';
import ContactUsForm from "@/components/mainPage/ContactUsForm";

const ContactUs = () => {
  return (
    <section id="contact-section" className="w-full flex flex-col py-6 scroll-mt-24">
      <h2 className="text-2xl md:text-3xl text-slate-900 tracking-tight mb-5">
        Bizimlə Əlaqə
      </h2>
      
      <div className="relative w-full min-h-[520px] rounded-3xl overflow-hidden shadow-xl border border-slate-200">
        {/* Google Maps Embed */}
        <div className="absolute inset-0 z-0">
          <Map />
        </div>

        {/* Форма поверх карты */}
        <div className="relative z-10 p-4 sm:p-6 max-w-md pointer-events-auto">
          <ContactUsForm />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;