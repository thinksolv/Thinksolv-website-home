'use client';
import React, { useState, useEffect, useRef } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const itemRefs = useRef([]);

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer a range of automation and productivity solutions tailored to businesses of all sizes.",
    },
    {
      question: "How does the onboarding process work?",
      answer: "Our onboarding process is simple and smooth, designed to integrate seamlessly with your business processes.",
    },
    {
      question: "Do you provide customer support?",
      answer: "Yes, our support team is available 24/7 to assist you with any questions or technical issues.",
    },
    {
      question: "What is the pricing structure?",
      answer: "Our pricing is flexible and based on the size and needs of your business. Contact us for more details.",
    },
  ];

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("appear");
            observer.unobserve(entry.target); // Stop observing once the animation is triggered
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
    <section className="faq-section bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
      <h2 className="faq-title text-gray-900 dark:text-white">Frequently Asked Questions</h2>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""} bg-white dark:bg-black`}
            onClick={() => handleClick(index)}
            ref={(el) => (itemRefs.current[index] = el)}
          >
            <div className="faq-question text-gray-900 dark:text-white">
              {faq.question}
              <span className={`icon ${activeIndex === index ? "rotate" : ""}`}>
                &#9656; {/* Right arrow icon */}
              </span>
            </div>
            <div className="faq-answer text-black dark:text-white">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .faq-section {
          padding: 60px 24px;
          transition: background-color 0.3s, color 0.3s;
        }

        .faq-title {
          text-align: center;
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 40px;
        }

        .faq-container {
          max-width: 800px;
          margin: 0 auto;
        }

        .faq-item {
          border-radius: 8px;
          margin-bottom: 16px;
          padding: 20px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
          cursor: pointer;
          overflow: hidden;
        }

        .faq-item:hover {
          transform: scale(1.02);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }

        .faq-question {
          font-size: 1.25rem;
          font-weight: 500;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
          transition: color 0.3s;
        }

        .faq-item:hover .faq-question {
          color: #2563eb;
        }

        .icon {
          font-size: 2rem;
          color: #2563eb;
          transition: transform 0.3s;
        }

        .rotate {
          transform: rotate(90deg);
        }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          opacity: 0;
          transition: max-height 0.3s ease, opacity 0.3s ease;
        }

        .faq-item.active .faq-answer {
          max-height: 200px;
          opacity: 1;
          margin-top: 16px;
        }

        .faq-answer p {
          font-size: 1rem;
          line-height: 1.6;
          padding-left: 24px;
          border-left: 4px solid #2563eb;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        
      `}</style>
    </section>
  );
};

export default FAQ;
