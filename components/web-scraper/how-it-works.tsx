'use client'

import React, { useState, useEffect, useRef } from 'react';
import {
  Play,
  Pause,
  Search,
  Code,
  FileText
} from 'lucide-react';

import DotBadge from '@/components/ui/dotbadge'; // Adjust path as needed
import GradientText from '@/components/ui/gradient-text'; // Adjust path as needed

interface Tab {
  id: string;
  label: string;
  icon: React.ReactNode;
  videoUrl: string;
  description: string;
}

const tabs: Tab[] = [
  {
    id: 'identify',
    label: 'Identify Data',
    icon: <Search className="w-4 h-4" />,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    description: 'Pinpoint the exact data on websites that you want to capture — whether it’s product listings, articles, tables, or any structured content.'
  },
  {
    id: 'extract',
    label: 'Extract Content',
    icon: <Code className="w-4 h-4" />,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    description: 'Automatically pull the selected data from the web page using smart scraping logic, minimizing noise and maximizing accuracy.'
  },
  {
    id: 'parse',
    label: 'Parse & Structure',
    icon: <FileText className="w-4 h-4" />,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    description: 'Clean, format, and structure the extracted data into usable outputs like CSV, JSON, or direct database entries for seamless use.'
  }
];

export default function TabNavigation() {
  const [activeTab, setActiveTab] = useState('identify');
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const togglePlayPause = () => {
    const currentVideo = videoRefs.current[activeTab];
    if (currentVideo) {
      if (isPlaying) {
        currentVideo.pause();
      } else {
        currentVideo.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const getCurrentTabIndex = () => {
    return tabs.findIndex(tab => tab.id === activeTab);
  };

  const switchToNextTab = () => {
    const currentIndex = getCurrentTabIndex();
    const nextIndex = (currentIndex + 1) % tabs.length;
    setActiveTab(tabs[nextIndex].id);
  };

  const handleVideoEnd = (tabId: string) => {
    if (tabId === activeTab) {
      switchToNextTab();
    }
  };

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  useEffect(() => {
    const setupTimeout = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        switchToNextTab();
      }, 30000);
    };

    setupTimeout();
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [activeTab]);

  useEffect(() => {
    Object.keys(videoRefs.current).forEach(tabId => {
      const video = videoRefs.current[tabId];
      if (video) {
        if (tabId === activeTab) {
          video.play().catch(console.error);
          setIsPlaying(true);
        } else {
          video.pause();
        }
      }
    });
  }, [activeTab]);

  return (
    <div className="w-full bg-white dark:bg-black">
      <div className="pt-8 px-8">
        {/* Heading & Badge */}
        <div className="text-center mb-5">
          <DotBadge label="How It Works" className='mb-7' />
          <h1 className="text-4xl lg:text-5xl font-medium font-geist text-gray-900 dark:text-white mb-6 leading-tight">
            Magic Behind Our <GradientText gradient='from-red-600 via-red-500 to-red-600'>Smart Scraping</GradientText>
          </h1>
        </div>

        {/* Tab Navigation */}
        <nav className="flex items-center justify-center space-x-8 mb-8 ">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`flex items-center space-x-2 px-6 py-4 transition-all duration-200 relative border-b-2
                ${activeTab === tab.id
                  ? 'text-primary border-secondary dark:border-bordercolor'
                  : 'text-gray-600 border-transparent hover:text-gray-900 hover:border-gray-300'
                }`}
            >
              {tab.icon}
              <span className="text-md font-geist font-medium">{tab.label}</span>
            </button>
          ))}
        </nav>

        {/* Video Section */}
        <div className="bg-white dark:bg-black border border-bordercolor rounded-lg shadow-lg p-6 mx-auto max-w-6xl">
          <div className="mb-6">
            <h2 className="text-2xl font-geist font-medium text-gray-900 dark:text-white mb-2">
              {tabs.find(tab => tab.id === activeTab)?.label}
            </h2>
            <p className="text-gray-500">
              {tabs.find(tab => tab.id === activeTab)?.description}
            </p>
          </div>

          <div className="relative bg-black rounded-lg overflow-hidden group" style={{ aspectRatio: '16/9' }}>
            {tabs.map((tab) => (
              <video
                key={tab.id}
                ref={(el) => {
                  videoRefs.current[tab.id] = el;
                }}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${activeTab === tab.id ? 'opacity-100' : 'opacity-0'
                  }`}
                onEnded={() => handleVideoEnd(tab.id)}
                preload="metadata"
                muted
                autoPlay
                playsInline
              >
                <source src={tab.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ))}

            <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm rounded-lg px-3 py-2 flex items-center text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <button
                onClick={togglePlayPause}
                className="hover:text-secondary transition-colors duration-200"
              >
                {isPlaying ? (
                  <Pause className="w-4 h-4" />
                ) : (
                  <Play className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
