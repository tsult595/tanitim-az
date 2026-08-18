'use client'

import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-slate-50/80 backdrop-blur-md border-b border-slate-200/60">
      <div className="w-full px-4 sm:px-8 h-20 flex items-center justify-between gap-4 md:gap-8 lg:gap-12 max-w-7xl mx-auto">

        {/* 1. Логотип (слева) */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <Image
            src="/tanitim.jpg"
            alt="Tanitim.az Logo"
            width={45}
            height={45}
            className="w-16 h-16 object-contain rounded-lg"
          />
          <span className="text-xl font-black tracking-tight text-slate-900 transition-colors">
            TANITIM<span className="text-orange-400">.AZ</span>
          </span>
        </Link>

        {/* 2. Навигация (по центру) */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-slate-700">
          <Link href="/about" className="hover:text-orange-500 transition-colors">
            Haqqımızda
          </Link>

          {/* Дропдаун для Xidmətlərimiz */}
          {/* <div className="relative group cursor-pointer flex items-center gap-1 hover:text-orange-500 transition-colors py-2">
            <span>Xidmətlərimiz</span>
            <ChevronDown className="w-4 h-4 text-orange-700 group-hover:text-slate-900 transition-transform group-hover:rotate-180 duration-200" />
          </div> */}
           <Link href="/services" className="hover:text-orange-500 transition-colors">
            Xidmətlərimiz
          </Link>

          <Link href="/clients" className="hover:text-orange-500 transition-colors">
            Müştərilər
          </Link>

          <Link href="/products" className="hover:text-orange-500 transition-colors">
            Məhsullar
          </Link>

          <Link href="/blog" className="hover:text-orange-500 transition-colors">
            Bloq
          </Link>

         
        </nav>

        <div className="flex items-center gap-4 shrink-0">
          <div className="relative group py-2">
            <button className="flex items-center gap-1 text-sm font-semibold text-slate-800 hover:text-orange-500 transition-colors">
              <span>AZ</span>
              <ChevronDown className="w-3.5 h-3.5 text-orange-700 group-hover:text-slate-900 transition-transform group-hover:rotate-180 duration-200" />
            </button>

            <div className="absolute right-0 top-full hidden group-hover:flex flex-col bg-white border border-slate-200/80 rounded-xl shadow-lg p-1.5 min-w-[70px] z-50 animate-in fade-in slide-in-from-top-1 duration-150">
              <button 
                type="button"
                className="px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-orange-500 hover:bg-slate-50 rounded-lg text-left transition-colors"
              >
                RU
              </button>
              <button 
                type="button"
                className="px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-orange-500 hover:bg-slate-50 rounded-lg text-left transition-colors"
              >
                EN
              </button>
            </div>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;