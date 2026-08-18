import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const BlogPage = () => {
  const postsData = [
    {
      id: 1,
      category: "Analytics & Reporting",
      date: "May 20, 2026",
      title: "Top AI Visibility Tracking Issues in 2026: Analysis of 46k Online Mentions",
      description: "AI visibility tracking analyzed: 46,350 mentions, 85.9M reach, 5 recurring pain points. What's wrong with the category in 2026 and what marketers can do about it.",
      link: "/blogPostPage/1",
    },
    {
      id: 2,
      category: "SMM & Strategy",
      date: "May 18, 2026",
      title: "How Social Media Algorithms Have Shifted Toward Intent-Based Engagement",
      description: "A deep dive into how platforms prioritize micro-interactions over simple likes, and how brands can adapt their content workflow.",
      link: "/blogPostPage/2",
    },
    {
      id: 3,
      category: "Web Development",
      date: "May 15, 2026",
      title: "Building Ultra-Fast Next.js Applications with Server Actions and Edge Caching",
      description: "Practical guide to optimizing page render speeds, lowering bundle sizes, and achieving perfect Lighthouse scores in production.",
      link: "/blogPostPage/3",
    },
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
    <div className="min-h-screen p-6 md:p-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {postsData.map((post) => (
          <article
            key={post.id}
            className="w-full bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 flex flex-col justify-between"
          >
            <div>
              {/* Шапка карточки: Категория и дата */}
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className="inline-flex items-center px-4 py-1.5 rounded-full border-2 border-orange-400 text-slate-900 text-xs sm:text-sm font-medium tracking-wide">
                  {post.category}
                </span>
                <time className="text-slate-500 text-xs sm:text-sm font-medium shrink-0">
                  {post.date}
                </time>
              </div>

              {/* Заголовок статьи */}
              <h2 className="text-xl md:text-2xl font-extrabold text-slate-950 tracking-tight leading-snug mb-4 line-clamp-3">
                {post.title}
              </h2>

              {/* Описание статьи */}
              <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6 line-clamp-4">
                {post.description}
              </p>
            </div>

            {/* Нижняя панель: Кнопка перехода */}
            <div className="flex items-center justify-end pt-2">
              <Link
                href={post.link}
                className="w-12 h-12 rounded-full bg-orange-300 hover:bg-orange-400 flex items-center justify-center text-slate-900 transition-colors shrink-0"
                aria-label={`Read article: ${post.title}`}
              >
                <ArrowRight className="w-5 h-5 stroke-[2]" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;