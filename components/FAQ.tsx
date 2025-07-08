'use client';

import React, { useState, useEffect, useRef } from 'react';
import { siteConfig } from '../config/site';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const { title, items: faqs } = siteConfig.faq;

  const handleClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    itemRefs.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white dark:bg-gray-900 py-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
        {title}
      </h2>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            ref={(el) => {
              itemRefs.current[index] = el;
            }}
            className={`rounded-lg transition-all duration-300 cursor-pointer overflow-hidden shadow-sm dark:shadow-md bg-white dark:bg-black px-6 py-5 transform opacity-0 translate-y-6`}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {faq.question}
              </h3>
              <span
                className={`transform transition-transform text-xl text-blue-600 ${activeIndex === index ? 'rotate-90' : ''
                  }`}
              >
                ▶
              </span>
            </div>

            <div
              className={`transition-all duration-300 ease-in-out text-gray-700 dark:text-gray-200 ${activeIndex === index
                  ? 'max-h-[300px] opacity-100 mt-4'
                  : 'max-h-0 opacity-0'
                } overflow-hidden`}
            >
              <p className="border-l-4 border-blue-600 pl-4 text-base leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
