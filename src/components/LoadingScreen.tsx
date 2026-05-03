"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = "hidden";
    
    // Simulate loading time for resources to be ready
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "auto";
    }, 2000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-pulse-navy"
        >
          {/* Background pattern */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
              backgroundSize: '32px 32px'
            }}
          />
          
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              duration: 1,
              ease: "easeOut",
            }}
            className="relative flex flex-col items-center justify-center gap-8"
          >
            {/* Pulsing ring behind logo */}
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.5, 0, 0.5]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute h-48 w-48 rounded-full border border-pulse-copper/30"
            />
            
            <div className="relative h-24 w-56 md:h-32 md:w-64">
              <Image
                src={siteConfig.assets.logo}
                alt={siteConfig.brand}
                fill
                priority
                className="object-contain"
                // Adding a filter to invert the logo if it's dark, since background is navy. 
                // We'll use brightness for the cream color if needed, or leave it if logo is already light.
                // Assuming logo is suitable for light backgrounds, we can add brightness(0) invert(1) if it's black text.
                // Given the original nav logo is on light bg, it's probably dark. Let's make it white for the dark loading screen.
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </div>

            {/* Loading text/bar */}
            <div className="flex flex-col items-center gap-3">
              <motion.div 
                className="h-[2px] w-48 overflow-hidden rounded-full bg-white/10"
              >
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "0%" }}
                  transition={{ 
                    duration: 1.5,
                    ease: "easeInOut"
                  }}
                  className="h-full w-full bg-pulse-copper"
                />
              </motion.div>
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="font-display text-sm tracking-[0.3em] text-pulse-copper uppercase"
              >
                Brewing Experience...
              </motion.span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
