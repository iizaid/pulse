"use client";

import { motion } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";
import { MouseEvent, useRef } from "react";
import { siteConfig } from "@/config/site";
import { ArrowButton } from "./ArrowButton";
import { Navbar } from "./Navbar";

export function Hero() {
  const cupRef = useRef<HTMLDivElement | null>(null);

  function moveCup(event: MouseEvent<HTMLDivElement>) {
    const cup = cupRef.current;
    if (!cup) return;

    const rect = cup.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    gsap.to(cup, {
      rotateY: x * 12,
      rotateX: -y * 10,
      y: -10,
      scale: 1.025,
      transformPerspective: 900,
      transformOrigin: "center",
      duration: 0.45,
      ease: "power3.out"
    });
  }

  function resetCup() {
    const cup = cupRef.current;
    if (!cup) return;

    gsap.to(cup, {
      rotateY: 0,
      rotateX: 0,
      y: 0,
      scale: 1,
      duration: 0.75,
      ease: "elastic.out(1, 0.55)"
    });
  }

  return (
    <section id="home" className="section-paper relative min-h-[100dvh] overflow-hidden lg:min-h-[941px]">
      <Navbar />
      <div
        className="mx-auto grid min-h-[100dvh] max-w-[1672px] grid-cols-1 items-center px-5 pb-[60px] text-center sm:text-left md:px-14 lg:min-h-[941px] lg:grid-cols-[0.88fr_1.12fr] lg:px-[84px] lg:pb-0 lg:text-left"
        style={{ paddingTop: "calc(var(--navbar-h, 160px) + 32px)" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="relative z-10 max-w-[720px]"
        >
          <h1 className="headline">
            CRAFTED
            <br />
            BY PULSE
          </h1>
          <p className="mt-5 text-[14px] font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] text-pulse-copper md:whitespace-nowrap md:text-[25px] md:tracking-[0.27em]">
            PREMIUM COFFEE • DESSERTS • HOOKAH
          </p>
          <p className="body-copy mt-7 max-w-[470px]">
            From our pulse to yours. Crafted for warm moments, bold flavor, and unforgettable experiences.
          </p>
          <ArrowButton href="#menu" className="mt-8 w-[248px] justify-between px-7">
            Explore Menu
          </ArrowButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, rotate: 5, x: 40 }}
          animate={{ opacity: 1, rotate: 0, x: 0 }}
          transition={{ duration: 0.75, delay: 0.12, ease: "easeOut" }}
          className="relative mx-auto mt-12 h-[380px] w-full max-w-[500px] md:h-[520px] md:max-w-[680px] lg:-mt-[62px] lg:h-[674px] lg:max-w-[760px]"
          onMouseMove={moveCup}
          onMouseLeave={resetCup}
        >
          <div ref={cupRef} className="absolute inset-0 will-change-transform">
            <Image
              src={siteConfig.assets.cup}
              alt="Pulse signature cup"
              fill
              priority
              sizes="(max-width: 1024px) 80vw, 760px"
              className="object-contain drop-shadow-[0_30px_25px_rgba(0,0,0,0.16)]"
            />
          </div>
        </motion.div>
      </div>

      <div className="absolute right-[70px] top-[360px] hidden items-center gap-7 xl:flex">
        <span className="h-[90px] w-px bg-pulse-copper" />
        <span className="side-label">SIGNATURE CUP</span>
      </div>
    </section>
  );
}
