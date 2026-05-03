"use client";

import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Image from "next/image";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import { navItems, siteConfig } from "@/config/site";
import { ArrowButton } from "./ArrowButton";

gsap.registerPlugin(ScrollToPlugin);

export function Navbar() {
  const [activeHash, setActiveHash] = useState("#home");
  const manualScrollUntil = useRef(0);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter((section): section is Element => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        if (Date.now() < manualScrollUntil.current) return;

        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveHash(`#${visible.target.id}`);
        }
      },
      {
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0.15, 0.35, 0.55]
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  function handleNavClick(event: MouseEvent<HTMLAnchorElement>, href: string) {
    if (!href.startsWith("#")) return;

    event.preventDefault();
    gsap.to(window, {
      duration: 1.05,
      scrollTo: { y: href, offsetY: 0 },
      ease: "power3.inOut"
    });

    manualScrollUntil.current = Date.now() + 1300;
    setActiveHash(href);
  }

  return (
    <header className="fixed left-0 right-0 top-0 z-[999] border-b border-pulse-copper/10 bg-[#f7efe6] shadow-[0_10px_30px_rgba(8,35,61,0.06)]">
      <div className="mx-auto flex max-w-[1672px] items-center justify-between px-8 py-3 md:px-12 xl:px-[78px]">
        <a href="#home" aria-label="Pulse home" className="relative block h-[52px] w-[140px] md:h-[62px] md:w-[160px]">
          <Image
            src={siteConfig.assets.logo}
            alt="Pulse Coffee House & Hookah"
            fill
            priority
            sizes="160px"
            className="object-contain object-left"
          />
        </a>

        <nav aria-label="Primary navigation" className="hidden items-center gap-[42px] lg:flex xl:gap-[52px]">
          {navItems.map((item, index) => (
            <a key={item.href} href={item.href} onClick={(event) => handleNavClick(event, item.href)} className={`nav-link !pb-1 ${activeHash === item.href ? "active" : ""}`}>
              {item.label}
            </a>
          ))}
        </nav>

        <ArrowButton href="/menu" className="hidden min-h-[44px] px-7 text-[16px] md:inline-flex">
          Full Menu
        </ArrowButton>
      </div>

      <nav aria-label="Mobile navigation" className="mx-auto mt-3 flex max-w-[1672px] flex-wrap justify-center gap-2 px-4 pb-4 md:px-12 lg:hidden">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={(event) => handleNavClick(event, item.href)}
            className={`rounded-full border px-4 py-2 text-[12px] font-black uppercase tracking-[0.12em] transition ${
              activeHash === item.href
                ? "border-pulse-navy bg-pulse-navy text-white"
                : "border-pulse-copper/60 bg-white/20 text-pulse-ink hover:bg-white/40"
            }`}
          >
            {item.label}
          </a>
        ))}
        <a href="/menu" className="rounded-full border border-pulse-navy bg-pulse-navy px-4 py-2 text-[12px] font-black uppercase tracking-[0.12em] text-white transition hover:bg-pulse-navyDeep">
          Full Menu
        </a>
      </nav>
    </header>
  );
}
