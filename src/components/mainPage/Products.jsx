'use client'

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const products = [
  {
    name: "UTM.az",
    href: "https://utm.az",
    description: "Kampaniya linklərini yaradın və izləyin",
    bg: "green",
    text: "#E4D6CE",
    accent: "#F0692A",
  },
  {
    name: "Influencer.az",
    href: "https://influencer.az",
    description: "Azərbaycanın influencer bazası",
    bg: "#F5AD82",
    text: "#3C3C3B",
    accent: "#3C3C3B",
  },
];

const Products = () => {
  return (
    <section id='products-section' className="w-full  py-16 sm:py-20">
      {/* Тонкая полоса — палитра как деталь */}
      <div className="flex h-1.5 w-full">
        {["#F0692A", "#3C3C3B", "#E4D6CE", "#F5AD82", "#9C9C9C", "#F0692A"].map(
          (c, i) => (
            <div key={i} className="flex-1" style={{ backgroundColor: c }} />
          )
        )}
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-10 mt-14">
         <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
        Məhsullarımız
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {products.map((p) => (
            <Link
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col justify-between h-[280px] sm:h-[340px] rounded-2xl px-8 py-8 overflow-hidden transition-transform duration-300 ease-out hover:-translate-y-1"
              style={{ backgroundColor: p.bg, color: p.text }}
            >
              <div className="flex items-start justify-between">
                <ArrowUpRight
                  className="w-6 h-6 transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1"
                  strokeWidth={1.75}
                />
              </div>

              <div>
                <h3 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-2">
                  {p.name}
                </h3>
                <p className="text-sm opacity-80">{p.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;