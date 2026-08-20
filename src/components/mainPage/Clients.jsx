"use client"

import Image from "next/image";
// Импортируешь свои локальные картинки из папки public
import Starex from "../../../public/starex.jpg";
import Solong from "../../../public/solong.png";
import TLC from "../../../public/tclpng.png";
import Techno from "../../../public/tecno.jpg";
import Enternainer from "../../../public/Entertainer.webp";
import Veyseloglu from "../../../public/veyseloglu.png";
import Samsung from "../../../public/samsung.svg";
import MG from "../../../public/mg.jpg";
import mia from "../../../public/mia-logo.png";
import Milla from "../../../public/Milla.png";
import Natura from "../../../public/natura-1.png";
import PG from "../../../public/p&g.jpg";
import pashapay from "../../../public/pashapay.png";
import Pinky from "../../../public/Pinko-Logo.jpg";
import Bagdan from "../../../public/bagdan.png";
import Carpisa from "../../../public/carpisa.png";
import Danone from "../../../public/Danone-Logo-2020.png";
import Elcore from "../../../public/elcore.png";
import imtea from "../../../public/imtea.jpg";
import Jale from "../../../public/Jale_logo_130_400x400.jpg";
import mars from "../../../public/mars.png";
import mazerati from "../../../public/maserati.png";
import ABB from "../../../public/ABB_Logo.png";
import avatr from "../../../public/AVATR-logo.png";
import aviasales from "../../../public/Aviasales_logo.png";
import bagdan from "../../../public/bagdan.png";
import carpisa from "../../../public/carpisa.png";





// Заменяешь элементы массива clients на свои импорты
const clients = [
  { name: "Starex", logo: Starex },
  { name: "Solong", logo: Solong },
  { name: "TLC", logo: TLC },
  { name: "Techno", logo: Techno },
  { name: "Entertainer", logo: Enternainer },
  { name: "Veyseloglu", logo: Veyseloglu },
  { name: "Samsung", logo: Samsung },
  { name: "MG", logo: MG },
  { name: "Mia", logo: mia },
  { name: "Milla", logo: Milla },
  { name: "Natura", logo: Natura },
  { name: "PG", logo: PG },
  { name: "Pashapay", logo: pashapay },
  { name: "Pinky", logo: Pinky },
  { name: "Bagdan", logo: Bagdan },
  { name: "Carpisa", logo: Carpisa },
  { name: "Danone", logo: Danone },
  { name: "Elcore", logo: Elcore },
  { name: "imtea", logo: imtea },
  { name: "Jale", logo: Jale },
  { name: "mars", logo: mars },
  { name: "mazerati", logo: mazerati },
  { name: "ABB", logo: ABB },
  { name: "avatr", logo: avatr },
 { name: "aviasales", logo: aviasales },
 { name: "bagdan", logo: bagdan },
 { name: "carpisa", logo: carpisa }

]

const Clients = () => {
  return (
    <section id="clients-section" className="w-full py-12 md:py-16 lg:py-20">
      <div className="mx-auto mb-10 w-full max-w-6xl md:mb-14">
        <h2 className="text-left text-2xl  tracking-tight text-slate-900 md:text-3xl">
          Müştərilərimiz
        </h2>
      </div>

        <div className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-3xl bg-[#F7F5F2] border border-slate-200/80 p-6 md:p-10 shadow-sm">
        
        {/* ================= BACKGROUND EFFECTS ================= */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-[#F0692A]/25 blur-[90px]" />
          <div className="absolute -top-10 right-0 w-[380px] h-[380px] rounded-full bg-[#F5AD82]/35 blur-[90px]" />
          <div className="absolute bottom-0 left-10 w-[360px] h-[360px] rounded-full bg-[#E2ECE9] blur-[80px]" />
          
          {/* Фоновая сетка */}
          <div
            className="absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(60,60,59,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(60,60,59,0.06) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
        </div>

        <div className="relative z-10 w-full">
          <div className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-6">
            {clients.map((client, index) => (
              <div
                key={client.name}
                className="group relative flex h-32 items-center justify-center transition-all duration-300 sm:h-36 md:h-32"
              >
                {/* LOGO BOX */}
                <div className="relative flex h-16 w-28 items-center justify-center transition-transform duration-300">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      className="max-h-20 max-w-20 object-contain opacity-90 transition-all duration-300 group-hover:opacity-100"
                    />
                  
                </div>

                {/* MOBILE LINE */}
                {index % 2 === 0 && (
                  <span className="absolute right-0 top-1/2 h-16 w-px -translate-y-1/2 bg-slate-200/70 sm:hidden" />
                )}

                {/* TABLET LINE */}
                {index % 3 !== 2 && (
                  <span className="absolute right-0 top-1/2 hidden h-16 w-px -translate-y-1/2 bg-slate-200/70 sm:block md:hidden" />
                )}

                {/* DESKTOP LINE */}
                {index % 6 !== 5 && (
                  <span className="absolute right-0 top-1/2 hidden h-16 w-px -translate-y-1/2 bg-slate-200/70 md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Clients;