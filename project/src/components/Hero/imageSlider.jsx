import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { sliderImages } from './data';
import SlideContent from './SlideContent';
import NavigationButtons from './NavigationButton';
import SlideIndicators from './SlideIndicators';

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => 
      prev === 0 ? sliderImages.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => 
      prev === sliderImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          className="absolute w-full h-full"
        >
          <div className="relative w-full h-full">
            <img
              src={sliderImages[currentIndex].url}
              alt={sliderImages[currentIndex].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <SlideContent {...sliderImages[currentIndex]} />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <NavigationButtons
        onPrev={handlePrev}
        onNext={handleNext}
      />

      <SlideIndicators
        total={sliderImages.length}
        current={currentIndex}
        onChange={(index) => {
          setDirection(index > currentIndex ? 1 : -1);
          setCurrentIndex(index);
        }}
      />
    </div>
  );
}