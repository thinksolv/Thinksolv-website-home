"use client"

import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '../ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { howItWorks } from '@/config/page';
import { Settings, Cpu, Download, PlayCircle, CheckCircle } from 'lucide-react';
import { LucideIcon, Target, BrainCircuit, TrendingUp, ArrowRight } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  target: Target,
  'brain-circuit': BrainCircuit,
  'trending-up': TrendingUp
};


export default function HowItWorks () {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setInterval(() => {
        setActiveStep(prev => (prev + 1) % howItWorks.steps.length);
      }, 4000);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  const iconMap = {
    settings: Settings,
    cpu: Cpu,
    download: Download,
    'play-circle': PlayCircle
  };

  return (
    <section ref={sectionRef} id="how-it-works" className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">Scraping Process</Badge>
          <h2 className={`text-4xl lg:text-5xl font-bold text-foreground mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {howItWorks.title}
          </h2>
          <p className={`text-xl text-muted-foreground transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: '200ms' }}>
            {howItWorks.subtitle}
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-6xl mx-auto">
          {/* Step Indicators */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center space-x-4">
              {howItWorks.steps.map((step, index) => (
                <React.Fragment key={step.id}>
                  <div 
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-500 cursor-pointer ${
                      index <= activeStep 
                        ? 'bg-primary text-primary-foreground shadow-glow' 
                        : 'bg-muted text-muted-foreground'
                    }`}
                    onClick={() => setActiveStep(index)}
                  >
                    {index < activeStep ? (
                      <CheckCircle className="w-6 h-6" />
                    ) : (
                      step.number
                    )}
                  </div>
                  {index < howItWorks.steps.length - 1 && (
                    <div 
                      className={`w-16 h-1 transition-all duration-500 ${
                        index < activeStep ? 'bg-primary' : 'bg-muted'
                      }`}
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Active Step Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Step Details */}
            <div className={`space-y-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
              {howItWorks.steps.map((step, index) => {
                const IconComponent = iconMap[step.icon as keyof typeof iconMap];
                const isActive = index === activeStep;
                
                return (
                  <Card 
                    key={step.id}
                    className={`transition-all duration-500 cursor-pointer ${
                      isActive 
                        ? 'border-primary shadow-lg scale-105 bg-gradient-card' 
                        : 'border-border hover:border-primary/50 hover:shadow-md'
                    }`}
                    onClick={() => setActiveStep(index)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${
                          isActive ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                        }`}>
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className={`text-xl font-bold mb-2 transition-colors ${
                            isActive ? 'text-primary' : 'text-foreground'
                          }`}>
                            {step.title}
                          </h3>
                          <p className="text-muted-foreground mb-4">
                            {step.description}
                          </p>
                          {isActive && (
                            <ul className="space-y-2 animate-fade-in">
                              {step.details.map((detail, detailIndex) => (
                                <li key={detailIndex} className="flex items-center text-sm text-muted-foreground">
                                  <CheckCircle className="w-4 h-4 text-success mr-2 flex-shrink-0" />
                                  {detail}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Right: Visual Demo */}
            <div className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}>
              <div className="relative bg-gradient-card rounded-2xl p-8 border shadow-xl">
                {/* Code Example */}
                <div className="bg-slate-900 rounded-lg p-6 text-green-400 font-mono text-sm overflow-x-auto">
                  <div className="mb-4">
                    <span className="text-blue-400">// Step {activeStep + 1}: {howItWorks.steps[activeStep].title}</span>
                  </div>
                  {activeStep === 0 && (
                    <div className="space-y-2">
                      <div><span className="text-purple-400">const</span> response = <span className="text-yellow-400">await</span> fetch(<span className="text-green-300">'https://api.scrapemaster.pro/scrape'</span>, {`{`}</div>
                      <div className="ml-4">method: <span className="text-green-300">'POST'</span>,</div>
                      <div className="ml-4">headers: {`{`} <span className="text-green-300">'Authorization'</span>: <span className="text-green-300">'Bearer YOUR_API_KEY'</span> {`}`},</div>
                      <div className="ml-4">body: JSON.stringify({`{`}</div>
                      <div className="ml-8">url: <span className="text-green-300">'https://example.com'</span>,</div>
                      <div className="ml-8">format: <span className="text-green-300">'json'</span></div>
                      <div className="ml-4">{`})`}</div>
                      <div>{`});`}</div>
                    </div>
                  )}
                  {activeStep === 1 && (
                    <div className="space-y-2">
                      <div><span className="text-blue-400">// AI Processing in action...</span></div>
                      <div>✓ Detecting bot protection</div>
                      <div>✓ Randomizing fingerprint</div>
                      <div>✓ Rendering JavaScript</div>
                      <div>✓ Extracting content</div>
                      <div><span className="text-green-400 animate-pulse">⟳ Processing...</span></div>
                    </div>
                  )}
                  {activeStep === 2 && (
                    <div className="space-y-2">
                      <div><span className="text-green-400">{`{`}</span></div>
                      <div className="ml-4"><span className="text-blue-400">"status"</span>: <span className="text-green-300">"success"</span>,</div>
                      <div className="ml-4"><span className="text-blue-400">"data"</span>: {`{`}</div>
                      <div className="ml-8"><span className="text-blue-400">"title"</span>: <span className="text-green-300">"Extracted Title"</span>,</div>
                      <div className="ml-8"><span className="text-blue-400">"price"</span>: <span className="text-green-300">"$99.99"</span>,</div>
                      <div className="ml-8"><span className="text-blue-400">"availability"</span>: <span className="text-green-300">"In Stock"</span></div>
                      <div className="ml-4">{`},`}</div>
                      <div className="ml-4"><span className="text-blue-400">"confidence"</span>: <span className="text-yellow-400">0.98</span></div>
                      <div><span className="text-green-400">{`}`}</span></div>
                    </div>
                  )}
                </div>

                {/* Status Indicators */}
                <div className="flex items-center justify-between mt-6 p-4 bg-success/10 rounded-lg border border-success/20">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Status: {activeStep === 1 ? 'Processing' : 'Ready'}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Response time: 1.{Math.floor(Math.random() * 9)}s
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20">
            <div className="bg-white dark:bg-black  p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">
                  See It in Action
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Watch our interactive demo to see how easy it is to set up your first scraper 
                  and start extracting data in minutes.
                </p>
                
                {/* Demo Placeholder */}
                <div className="bg-background rounded-lg border border-border p-8 mb-6 max-w-3xl mx-auto">
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                        <Target className="h-10 w-10 text-primary" />
                      </div>
                      <p className="text-lg font-semibold text-primary">Interactive Demo</p>
                      <p className="text-sm text-muted-foreground">Click to explore the platform</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="btn-hero">
                    Try Live Demo
                  </Button>
                  <Button variant="outline" className="btn-secondary">
                    Schedule Walkthrough
                  </Button>
                </div>
              </div>
            </div>
          </div>
    </section>
  );
};
