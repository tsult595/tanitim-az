'use client'

import React from 'react';
import Image from 'next/image';
import Img1 from '../../../public/test.png';

const ServicePageCards = () => {
  const cardsData = [
    { id: 1, title: "İnfluenser marketinq" },
    { id: 2, title: "Tədbirlərin təşkili" },
    { id: 3, title: "Rəqəmsal marketinq reklamları" },
    { id: 4, title: "Kontentlərin hazırlanması" },
    { id: 5, title: "Çöl reklamlarının təmin edilməsi" },
    { id: 6, title: "POSM materiallarının hazırlanması" },
    { id: 7, title: "PR" },
    { id: 8, title: "Promouter və BTL xidmətləri" },
    { id: 9, title: "E-mail və SMS marketinqi" },
  ];

  const handleCardClick = (title) => {
   
    window.dispatchEvent(
      new CustomEvent("selectService", { detail: { title } })
    );

    
    const contactElement = document.getElementById("contact-section");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="services-section" className="w-full py-4">
    <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-5">
    Xidmətlərimiz
    </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cardsData.map((card) => (
          <div
            key={card.id}
            className="group relative w-full h-70 rounded-2xl overflow-hidden cursor-pointer shadow-md border border-slate-200/50"
            onClick={() => handleCardClick(card.title)}
          >
            <Image
              src={Img1}
              alt={card.title}
              fill
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent transition-opacity duration-300 opacity-80 group-hover:opacity-95" />
            <div className="absolute inset-0 p-6 flex items-center justify-center text-center transform translate-y-3 group-hover:-translate-y-1 transition-transform duration-300 ease-out z-10">
              <h1 className="text-xl sm:text-2xl font-black text-orange-400 tracking-tight leading-snug drop-shadow-md">
                {card.title}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicePageCards;