import React from 'react';

import { Calendar, Clock, Bookmark } from 'lucide-react';

const BlogPostPage = () => {
  const tocItems = [
    { title: 'What is a brand audit?', href: '#what-is' },
    { title: 'Why conduct a brand audit?', href: '#why-conduct' },
    { title: 'When should you conduct a brand audit?', href: '#when-should' },
    { 
      title: 'How to conduct a brand audit? 10 steps', 
      href: '#how-to',
      subItems: [
        'Step 1: Define your framework',
        'Step 2: Review your brand foundations',
        'Step 3: Evaluate internal branding',
        'Step 4: Check your external branding',
        'Step 5: Analyze website performance and SEO',
        'Step 6: Review social media and online presence',
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-[#f7fbf8] text-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-36">
        
        {/* 1. Левый сайдбар: Table of Contents */}
        <aside className="lg:col-span-4 xl:col-span-3 hidden lg:block sticky top-24 h-fit">
          <h3 className="text-xl font-bold text-slate-950 mb-6">
            Table of contents
          </h3>
          <nav className="space-y-4 text-sm font-medium text-slate-700">
            {tocItems.map((item, idx) => (
              <div key={idx} className="space-y-2">
                <a href={item.href} className="block hover:text-orange-500 transition-colors">
                  {item.title}
                </a>
                {item.subItems && (
                  <div className="pl-4 space-y-2 text-slate-600 font-normal">
                    {item.subItems.map((sub, subIdx) => (
                      <a key={subIdx} href="#" className="block hover:text-orange-500 transition-colors">
                        {sub}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </aside>

        {/* 2. Основной контент статьи */}
        <main className="lg:col-span-8 xl:col-span-9 max-w-3xl">
          
          {/* Мета-информация (Автор, Дата, Время чтения) */}
          <div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm text-slate-600 mb-8">
           

            <div className="flex items-center gap-1.5 text-orange-500 font-medium">
              <Calendar className="w-4 h-4" />
              <span className="text-slate-600">Updated: July 22, 2026</span>
            </div>

            <div className="flex items-center gap-1.5 text-orange-500 font-medium">
              <Clock className="w-4 h-4" />
              <span className="text-slate-600">13 min read</span>
            </div>
          </div>

          {/* Заголовок статьи */}
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-[1.15] mb-8">
            How to Do a Brand Audit? The 10-Step Guide [2026]
          </h1>

          {/* Вводный абзац */}
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-10">
            According to the Edelman Trust Barometer, 4 out of 5 consumers won’t buy from a brand they don’t trust. It means that trust isn’t a nice-to-have. It’s what keeps your brand running. A regular brand audit ensures everything under the hood is working as it should.
          </p>

          {/* Карточка Key Takeaways */}
          <section className="relative rounded-3xl bg-amber-100/30 border border-orange-100 p-6 sm:p-8 pt-10">
            
            {/* Плашка заголовка блока */}
            <div className="absolute -top-5 left-6 inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#eaf4ed] border border-orange-100/80 text-slate-900 font-bold text-sm shadow-sm">
              <div className="p-1 rounded-md bg-orange-100 text-orange-500 shadow-sm">
                <Bookmark className="w-3.5 h-3.5" />
              </div>
              <span>Key takeaways</span>
            </div>

            {/* Пункт выводов */}
            <div className="flex gap-4 items-start pt-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500 shrink-0 mt-2"></span>
              <div>
                <h4 className="font-bold text-slate-950 text-base sm:text-lg mb-2">
                  Start with a plan before you touch any data
                </h4>
                <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                  Decide upfront what you want to audit, internal factors (values, culture, communication) or external ones (website, SEO, social media). Write your goals and key questions down in one document so you don’t lose focus along the way.
                </p>
              </div>
            </div>

          </section>

        </main>

      </div>
    </div>
  );
};

export default BlogPostPage;