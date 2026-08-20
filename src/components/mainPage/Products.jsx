'use client';

import React from 'react';
import Image from 'next/image';
import utm from '../../../public/utm.az.png';
import influencer from '../../../public/influencer.png';
import Link from 'next/link';

const Products = () => {
  return (
    <div id="products-section" className="w-full mx-auto py-8">
      <h2 className="text-left text-2xl mb-8 tracking-tight text-slate-900 md:text-3xl">
        Məhsullarımız
      </h2>

      <div className="grid grid-cols-1 gap-12">
        {/* ================= CARD 01: Influencer.az ================= */}
        <div className="group relative w-full overflow-hidden rounded-3xl bg-[#F7F5F2] border border-slate-200/80 p-6 md:p-10 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
          {/* BACKGROUND EFFECTS */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-[#F0692A]/25 blur-[90px]" />
            <div className="absolute -top-10 right-0 w-[380px] h-[380px] rounded-full bg-[#F5AD82]/35 blur-[90px]" />
            <div className="absolute bottom-0 left-10 w-[360px] h-[360px] rounded-full bg-[#E2ECE9] blur-[80px]" />
            <div
              className="absolute inset-0 opacity-[0.35]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(60,60,59,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(60,60,59,0.06) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />
          </div>

          {/* CONTENT */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column */}
            <div className="lg:col-span-5 space-y-6">
              <h3 className="text-3xl md:text-4xl text-red-500 tracking-tight font-extrabold">
                Influencer.az
              </h3>

              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-900/5 border border-red-500 p-2 shadow-inner">
                <Link href="https://influencer.az" target="_blank">
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <Image
                    src={influencer}
                    alt="Influencer.az"
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                </Link>
              </div>
            </div>

            {/* Right Column */}
            <div className="relative lg:col-span-7 space-y-5 text-slate-700 leading-relaxed pt-2">
              <span className="pointer-events-none absolute -top-10 right-0 text-7xl md:text-8xl font-black text-slate-900/15 select-none">
                01
              </span>

              <p className="text-sm md:text-base font-normal">
                Casa D'Arte Bakıda fəaliyyət göstərən premium italyan mebel mağazasıdır və İnteriome Group tərkibində fəaliyyət göstərir. Layihənin əsas məqsədi saytın Google axtarış nəticələrində görünürlüyünü artırmaq, premium italyan mebel və brend əsaslı lokal sorğularda mövqeləri gücləndirmək idi.
              </p>

              <p className="text-sm md:text-base font-normal">
                Layihə çərçivəsində saytın texniki SEO strukturu analiz olundu, Google Search Console və sitemap inteqrasiyası quruldu, indekslənmə problemləri nəzarətə alındı, Meta Title və Description strukturu yeniləndi, heading tag problemləri aradan qaldırıldı və çoxdilli AZ / EN / RU sayt strukturu hazırlandı.
              </p>

              <p className="text-sm md:text-base font-normal">
                Görülən işlər nəticəsində saytın Ahrefs Site Health göstəricisi 60%-dən 100%-ə yüksəldi, Google Search Console datasında isə organic click growth +1,706%, search visibility growth +6,501% olaraq qeydə alındı. Bu layihədə SEO optimizasiya Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi numquam molestiae culpa officia quod consectetur assumenda, omnis corporis harum eveniet accusamus necessitatibus rerum. Dicta reiciendis ducimus cum quas praesentium soluta suscipit aut earum dolor rem architecto voluptas nostrum mollitia, ratione eaque corporis maxime sit vitae quasi pariatur quisquam consequatur maiores.

                <span className="font-semibold text-slate-900 underline decoration-[#F0692A] decoration-2 underline-offset-4 bg-[#F5AD82]/20 px-1 rounded">
                  frontend dəstəyi
                </span>
                , çoxdilli struktur və{" "}
                <span className="font-semibold text-slate-900 underline decoration-[#F0692A] decoration-2 underline-offset-4 bg-[#F5AD82]/20 px-1 rounded">
                  texniki audit
                </span>{" "}
                işlərini birlikdə idarə etmişəm.
              </p>
            </div>
          </div>
        </div>

        {/* ================= CARD 02: UTM.az ================= */}
        <div className="group relative w-full overflow-hidden rounded-3xl bg-[#F7F5F2] border border-slate-200/80 p-6 md:p-10 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
          {/* BACKGROUND EFFECTS */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-[#F0692A]/25 blur-[90px]" />
            <div className="absolute -top-10 right-0 w-[380px] h-[380px] rounded-full bg-[#F5AD82]/35 blur-[90px]" />
            <div className="absolute bottom-0 left-10 w-[360px] h-[360px] rounded-full bg-[#E2ECE9] blur-[80px]" />
            <div
              className="absolute inset-0 opacity-[0.35]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(60,60,59,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(60,60,59,0.06) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />
          </div>

          {/* CONTENT CONTAINER */}
          <div className="relative z-10 flex flex-col lg:grid lg:grid-cols-12 gap-8 items-start">
            {/* 1. Заголовок и картинка */}
            <div className="w-full lg:col-span-5 lg:order-2 lg:col-start-8 space-y-6">
              <h3 className="text-3xl md:text-4xl tracking-tight text-green-900 font-extrabold">
                UTM.AZ
              </h3>

              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-900/5 border border-green-900 p-2 shadow-inner">
              <Link href="https://utm.az" target="_blank">
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <Image
                    src={utm}
                    alt="UTM.az"
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
              </Link>
              </div>
            </div>

            {/* 2. Текст */}
            <div className="relative w-full lg:col-span-7 lg:order-1 lg:row-start-1 space-y-5 text-slate-700 leading-relaxed pt-2">
              <span className="pointer-events-none absolute -top-10 right-0 lg:left-0 lg:right-auto text-7xl md:text-8xl font-black text-slate-900/13 select-none">
                02
              </span>

              <p className="text-sm md:text-base font-normal">
                Casa D'Arte Bakıda fəaliyyət göstərən premium italyan mebel mağazasıdır və İnteriome Group tərkibində fəaliyyət göstərir. Layihənin əsas məqsədi saytın Google axtarış nəticələrində görünürlüyünü artırmaq, premium italyan mebel və brend əsaslı lokal sorğularda mövqeləri gücləndirmək idi.
              </p>

              <p className="text-sm md:text-base font-normal">
                Layihə çərçivəsində saytın texniki SEO strukturu analiz olundu, Google Search Console və sitemap inteqrasiyası quruldu, indekslənmə problemləri nəzarətə alındı, Meta Title və Description strukturu yeniləndi, heading tag problemləri aradan qaldırıldı və çoxdilli AZ / EN / RU sayt strukturu hazırlandı.
              </p>

              <p className="text-sm md:text-base font-normal">
                Görülən işlər nəticəsində saytın Ahrefs Site Health göstəricisi 60%-dən 100%-ə yüksəldi, Google Search Console datasında isə organic click growth +1,706%, search visibility growth +6,501% olaraq qeydə alındı. Bu layihədə SEO optimizasiya,Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto itaque, inventore unde magni repudiandae nobis modi ab minus iste illum esse in nisi nulla, aspernatur quo veritatis? Culpa deserunt molestiae molestias, perferendis natus voluptatem cupiditate dolor neque. Nam illum ratione praesentium inventore sunt quasi, nulla eligendi ipsam facere, repudiandae atque.
                <span className="font-semibold text-slate-900 underline decoration-[#F0692A] decoration-2 underline-offset-4 bg-[#F5AD82]/20 px-1 rounded">
                  frontend dəstəyi
                </span>
                , çoxdilli struktur və{" "}
                <span className="font-semibold text-slate-900 underline decoration-[#F0692A] decoration-2 underline-offset-4 bg-[#F5AD82]/20 px-1 rounded">
                  texniki audit
                </span>{" "}
                işlərini birlikdə idarə etmişəm.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;