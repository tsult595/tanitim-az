import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-slate-100 p-6 md:p-12 flex items-center justify-center">
      
     
      <article className="w-full max-w-2xl bg-white rounded-3xl p-6 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-100">
        
  
        <div className="flex items-center justify-between gap-4 mb-6">
          <span className="inline-flex items-center px-5 py-2 rounded-full border-2 border-orange-400 text-slate-900 text-sm font-medium tracking-wide">
            Analytics & Reporting
          </span>
          <time className="text-slate-700 text-sm font-medium">
            May 20, 2026
          </time>
        </div>

        {/* Заголовок статьи */}
        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-950 tracking-tight leading-snug mb-5">
          Top AI Visibility Tracking Issues in 2026: Analysis of 46k Online Mentions
        </h2>

        {/* Описание статьи */}
        <p className="text-slate-700 text-base md:text-lg leading-relaxed">
          AI visibility tracking analyzed: 46,350 mentions, 85.9M reach, 5 recurring pain points. What's wrong with the category in 2026 and what marketers can do about it.
        </p>

        {/* Нижняя панель: Автор и Кнопка перехода */}
        <div className="flex items-center justify-end ">
          <Link
            href="/blogPostPage"
            className="w-12 h-12 rounded-full bg-orange-300 hover:bg-orange-200 flex items-center justify-center text-slate-900 transition-colors shrink-0"
            aria-label="Read article"
          >
            <ArrowRight className="w-5 h-5 stroke-[2]" />
          </Link>

        </div>

      </article>

    </div>
  );
};

export default BlogPage;