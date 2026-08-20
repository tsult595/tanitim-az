'use client'

import React from 'react';
import Image from 'next/image';
import Img1 from '../../../public/product/7.png';
import Img2 from '../../../public/product/Content.png';
import Img3 from '../../../public/product/Digital.png';
import Img4 from '../../../public/product/email.png';
import Img5 from '../../../public/product/İnfluencer.png';
import Img6 from '../../../public/product/Outdoor.png';
import Img7 from '../../../public/product/POSM.png';
import Img8 from '../../../public/product/pr.png';
import Img9 from '../../../public/product/Promoter.png';

const ServicePageCards = () => {
  const cardsData = [
    { id: 1, title: "İnfluenser marketinq" , img: Img1},
    { id: 2, title: "Tədbirlərin təşkili" , img: Img2},
    { id: 3, title: "Rəqəmsal marketinq reklamları" , img: Img3},
    { id: 4, title: "Kontentlərin hazırlanması" , img: Img4},
    { id: 5, title: "Çöl reklamlarının təmin edilməsi" , img: Img5},
    { id: 6, title: "POSM materiallarının hazırlanması" , img: Img6},
    { id: 7, title: "PR" , img: Img7},
    { id: 8, title: "Promouter və BTL xidmətləri" , img: Img8},
    { id: 9, title: "E-mail və SMS marketinqi" , img: Img9},
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
    <h2 className="text-2xl md:text-3xl text-slate-900 tracking-tight mb-5">
    Xidmətlərimiz
    </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-serif">
        {cardsData.map((card) => (
          <div
            key={card.id}
            className="group relative w-full h-65 rounded-2xl overflow-hidden cursor-pointer shadow-md border border-slate-200/50"
            onClick={() => handleCardClick(card.title)}
          >
            <Image
              src={card.img}
              alt={card.title}
              fill
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/83 via-slate-950/30 to-transparent transition-opacity duration-300 opacity-80 group-hover:opacity-95" />
            <div className="absolute inset-0 p-6 flex items-center justify-center text-center transform translate-y-3 group-hover:-translate-y-1 transition-transform duration-300 ease-out z-10">
              <h1 className="text-md sm:text-2xl font-bold text-orange-600 tracking-tight leading-snug drop-shadow-md">
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