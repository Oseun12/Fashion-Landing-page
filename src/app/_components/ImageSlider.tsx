'use client';
import { motion, useAnimationControls } from 'framer-motion';
import { useEffect, useRef } from 'react';

const fashionImages = [
  '/images/suit1.png',
  '/images/suit2.png',
  '/images/suit6.png',
  '/images/suit8.png',
  '/images/suit10.png',
  '/images/suit11.png',
  '/images/suit12.png',
];

export default function InfiniteImageSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();

  useEffect(() => {
    const sliderWidth = sliderRef.current?.scrollWidth;
    const itemWidth = sliderWidth ? sliderWidth / fashionImages.length : 0;
    
    controls.start({
      x: -itemWidth * fashionImages.length,
      transition: { 
        duration: 60,
        repeat: Infinity,
        ease: 'linear'
      }
    });
  }, [controls]);

  return (
    <section className="relative overflow-hidden -mt-28 py-1 bg-gradient-to-r from-gray-50 to-white dark:from-gray-900 dark:to-gray-900">
      <div className="mx-auto max-w-7xl px-4">
        {/* <h2 className="mb-16 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Our Latest Collection
        </h2> */}
        
        <div className="relative h-[500px] w-full overflow-hidden">
          {/* Main sliding track */}
          <motion.div
            ref={sliderRef}
            animate={controls}
            className="absolute flex h-full gap-8"
          >
            {/* Double the array for seamless looping */}
            {[...fashionImages, ...fashionImages].map((img, index) => (
              <motion.div
                key={index}
                className="relative h-full w-[300px] shrink-0 overflow-hidden rounded-2xl shadow-xl"
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <img
                  src={img}
                  alt={`Fashion model ${index + 1}`}
                  className="h-full w-full object-cover object-center"
                  loading="eager"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <h3 className="text-xl font-semibold text-white">
                    Collection {index % fashionImages.length + 1}
                  </h3>
                </div> */}
              </motion.div>
            ))}
          </motion.div>

          {/* Gradient overlays for fade effect */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-50 to-transparent dark:from-gray-900 z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-50 to-transparent dark:from-gray-900 z-10" />
        </div>

        {/* CTA Button */}
        {/* <div className="mt-16 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full bg-black px-8 py-3 text-lg font-medium text-white shadow-lg hover:bg-gray-800 dark:bg-white dark:text-black"
          >
            View Full Collection
          </motion.button>
        </div> */}
      </div>
    </section>
  );
}