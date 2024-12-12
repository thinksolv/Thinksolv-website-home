'use client';
import React, { useState, useEffect, useRef } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const itemRefs = useRef([]);

  const faqs = [
    {
        "question": "What services do you offer?",
        "answer": "We specialize in Google Workspace automation, AppSheet development, Document AI, and integrations with platforms like ClickUp, HubSpot, Slack, and others to enhance productivity."
      },
      {
        "question": "Can you help integrate Google Workspace with third-party tools?",
        "answer": "Yes, we build custom integrations for Google Workspace with platforms such as ClickUp, HubSpot, Slack, and other productivity tools to streamline business workflows."
      },
      {
        "question": "What industries benefit from your products and services?",
        "answer": "Our ready-to-use solutions serve industries like IT, education, healthcare, and any organization using Google Workspace for document management and automation."
      },
      {
        "question": "Can you develop custom solutions for unique business needs?",
        "answer": "Absolutely, we work closely with clients to design and implement bespoke solutions tailored to their specific requirements."
      },
      {
        "question": "Do you offer ready-to-use products?",
        "answer": "Yes, our products like Merge Docs Pro, Docs to Markdown Pro, and Docs to PDF Pro are ready to install and use, enabling immediate productivity gains."
      },
      {
        "question": "Do you offer solutions for document management?",
        "answer": "Yes, our products, such as Merge Docs Pro and Docs to Markdown Pro, simplify document management tasks like merging multiple Google Docs into one and converting documents into markdown formats effortlessly."
      },
      {
        "question": "How can your products save time for my team?",
        "answer": "Our tools automate repetitive tasks such as merging documents, formatting content, and syncing data between Google Workspace and other platforms, freeing your team to focus on higher-value activities."
      },
      
      {
        "question": "What makes your products stand out?",
        "answer": "Our products are built to be user-friendly, require minimal setup, and integrate seamlessly with Google Workspace, providing instant value with minimal effort."
      }
        ]
    
  ;

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
    <section className="faq-section bg-white dark:bg-gray-900 text-black dark:text-white">
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
