'use client'

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const MainPageBlogPage = () => {
  const postsData = [
    {
      id: 4,
      category: "SEO & Growth",
      date: "May 10, 2026",
      title: "Generative Search Optimization: How to Rank in AI-Driven Search Engines",
      description: "Traditional SEO is evolving. Learn how to structure your content so AI search agents quote and cite your brand consistently.",
      link: "/blogPostPage/4",
    },
    {
      id: 5,
      category: "Branding & Design",
      date: "May 04, 2026",
      title: "Minimalist UI Patterns That Increased Conversion Rates by 34%",
      description: "Case study analyzing how removing interface noise and focusing on clear typography boosted engagement across SaaS products.",
      link: "/blogPostPage/5",
    },
    {
      id: 6,
      category: "Digital Marketing",
      date: "Apr 28, 2026",
      title: "The Death of Third-Party Cookies: First-Party Data Strategies That Work",
      description: "How leading agency teams build privacy-first attribution models without losing granular campaign insights.",
      link: "/blogPostPage/6",
    },
  ];

  return (
    <div id="blog-section" className="w-full py-6 md:py-12">
      {/* Заголовок секции */}
      
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl text-slate-900 tracking-tight">
          Son Məqalələr
        </h2>
        <Link
          href="/blog"
          className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors"
        >
          Daha çox
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Сетка из 3 карточек + 4-я карточка "Daha çox" */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {postsData.map((post) => (
          <article
            key={post.id}
            className="w-full bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full border border-orange-400 text-slate-900 text-xs font-medium truncate">
                  {post.category}
                </span>
                <time className="text-slate-400 text-xs font-medium shrink-0">
                  {post.date}
                </time>
              </div>

              <h3 className="text-lg font-bold text-slate-950 tracking-tight leading-snug mb-3 line-clamp-2">
                {post.title}
              </h3>

              <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-6 line-clamp-3">
                {post.description}
              </p>
            </div>

            <div className="flex items-center justify-end pt-2">
              <Link
                href={post.link}
                className="w-10 h-10 rounded-full bg-orange-300 hover:bg-orange-400 flex items-center justify-center text-slate-900 transition-colors shrink-0"
                aria-label={`Read article: ${post.title}`}
              >
                <ArrowRight className="w-4 h-4 stroke-[2]" />
              </Link>
            </div>
          </article>
        ))}

        {/* 4-я карточка: Переход на страницу всех блогов */}
        <Link
          href="/blog"
          className="group w-full min-h-[260px] bg-gradient-to-br from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 rounded-3xl p-6 text-white shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full mb-4">
              Bloq
            </span>
            <h3 className="text-xl md:text-2xl font-black tracking-tight leading-snug">
              Bütün məqalələri kəşf edin
            </h3>
          </div>

          <div className="flex items-center justify-between pt-4">
            <span className="text-sm font-bold">Daha çox</span>
            <div className="w-10 h-10 rounded-full bg-white text-slate-900 flex items-center justify-center group-hover:translate-x-1 transition-transform">
              <ArrowRight className="w-5 h-5 stroke-[2]" />
            </div>
          </div>
        </Link>
      </div>

      {/* Кнопка "Daha çox" для мобилок */}
      <div className="mt-8 text-center sm:hidden">
        <Link
          href="/blog"
          className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-orange-400 text-white font-semibold text-sm hover:bg-orange-500 transition-colors"
        >
          Daha çox
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default MainPageBlogPage;