'use client';

import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { faqItems } from '@/config/page';
import { useRouter } from 'next/navigation';

export function FAQ() {
  const router = useRouter();
  const [showCalendly, setShowCalendly] = useState(false);

  return (
    <section className="py-24 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">FAQ</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get answers to common questions about our platform, pricing, and capabilities. 
            Can't find what you're looking for? Contact our support team.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className={`border border-border rounded-lg px-6 bg-card fade-in-up stagger-delay-${index + 1}`}
              >
                <AccordionTrigger className="text-left py-6 hover:no-underline group">
                  <span className="text-lg font-semibold group-hover:text-primary transition-colors">
                    {item.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-muted-foreground text-base leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Contact Support and Schedule Call */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-card to-secondary border border-border rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">
                Still Have Questions?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Our team of experts is here to help you succeed. Get in touch for personalized 
                guidance on implementing ScrapeStudio for your specific use case.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
  <button
    onClick={() => router.push('/contact')}
    className="px-6 py-3 rounded-lg font-semibold bg-primary text-white hover:bg-primary/90 transition-colors"
  >
    Contact Support
  </button>
  <button
    onClick={() => setShowCalendly(true)}
    className="px-6 py-3 rounded-lg border border-black font-semibold bg-muted text-foreground hover:bg-muted/80 transition-colors"
  >
    Schedule Call
  </button>
</div>

              {/* Calendly Widget */}
              {showCalendly && (
                <div className="mt-8">
                  <div
                    className="calendly-inline-widget"
                    data-url="https://calendly.com/sam-thinksolv/30min?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=6a7efc"
                    style={{ minWidth: '320px', height: '700px' }}
                  />
                  <script
                    type="text/javascript"
                    src="https://assets.calendly.com/assets/external/widget.js"
                    async
                  ></script>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
