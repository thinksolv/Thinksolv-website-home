import React, { useState, useEffect } from 'react';
import DiagonalImage from './DiagonalImage';

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === 0 ? 1 : 0));
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-full">
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Top-right Image */}
        <DiagonalImage
          position="top"
          currentIndex={currentIndex}
          images={[
            'https://images.unsplash.com/photo-1633613286991-611fe299c4be?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1635897840927-d3c10302f5b6?auto=format&fit=crop&w=800&q=80',
          ]}
        />

        {/* Bottom-left Image */}
        <DiagonalImage
          position="bottom"
          currentIndex={currentIndex}
          images={[
            'https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1635897841917-dc50e1fadc4c?auto=format&fit=crop&w=800&q=80',
          ]}
        />

        {/* Decorative Elements */}
        <div className="absolute -top-4 -right-4 w-36 h-36 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-4 -left-4 w-36 h-36 bg-violet-500/10 rounded-full blur-3xl" />
      </div>
    </div>
  );
};

export default ImageSlider;
