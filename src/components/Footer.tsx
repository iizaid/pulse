"use client";

import Image from "next/image";
import { Clock3, Instagram, Mail, MapPin, Music2, Phone } from "lucide-react";
import type { MouseEvent, ReactNode } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { navItems, siteConfig } from "@/config/site";
import { ArrowButton } from "./ArrowButton";

gsap.registerPlugin(ScrollToPlugin);

const footerNav = [
  navItems[0],
  { label: "Menu", href: "#menu" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" }
];

export function Footer() {
  function handleNavClick(event: MouseEvent<HTMLAnchorElement>, href: string) {
    if (!href.startsWith("#")) return;
    event.preventDefault();
    gsap.to(window, {
      duration: 1.05,
      scrollTo: { y: href, offsetY: 0 },
      ease: "power3.inOut"
    });
  }

  return (
    <footer id="contact" className="footer-bg relative overflow-hidden px-0 py-[96px] text-[#fff8ed]">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-[1536px] rounded-[18px] border border-white/10 bg-white/[0.015] shadow-[0_28px_80px_rgba(0,0,0,0.22)] backdrop-blur-sm"
      >
        <div className="grid min-h-[500px] grid-cols-1 items-center gap-12 px-8 py-16 md:px-16 lg:grid-cols-[1fr_1.33fr_0.72fr] lg:px-[86px]">
          <div className="lg:border-r lg:border-pulse-copper/75 lg:pr-20">
            <div className="relative h-[150px] w-[320px] max-w-full">
              <Image
                src={siteConfig.assets.logo}
                alt="Pulse Coffee House & Hookah"
                fill
                sizes="320px"
                className="object-contain object-left brightness-0 invert"
              />
            </div>
            <p className="font-menu mt-8 text-[28px] leading-snug text-[#fff8ed]">{siteConfig.tagline}</p>
          </div>

          <div className="flex flex-col items-center justify-center gap-10 lg:gap-14">
            <nav aria-label="Footer navigation" className="flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-5 md:gap-x-10">
              {footerNav.map((item, index) => (
                <a 
                  key={`${item.label}-${item.href}`} 
                  href={item.href} 
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="font-menu text-[25px] transition hover:text-[#d77f4e]"
                >
                  {item.label}
                  {index < footerNav.length - 1 ? <span className="ml-8 hidden text-pulse-copper md:inline">|</span> : null}
                </a>
              ))}
            </nav>
            <div onClick={(e) => handleNavClick(e as any, "#home")}>
              <ArrowButton href="#home" variant="outline" className="min-w-[260px] justify-center border-pulse-copper bg-transparent text-[17px] font-black uppercase tracking-[0.22em] text-[#d77f4e]">
                BACK TO TOP
              </ArrowButton>
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-start lg:border-l lg:border-pulse-copper/75 lg:pl-16">
            <p className="mb-6 lg:mb-8 text-[19px] font-black uppercase tracking-[0.25em] text-[#d77f4e]">FOLLOW US</p>
            <div className="flex items-center justify-center gap-5">
              <SocialLink href={siteConfig.social.instagram} label="Instagram">
                <Instagram size={35} strokeWidth={1.8} />
              </SocialLink>
              <SocialLink href={siteConfig.social.tiktok} label="TikTok">
                <Music2 size={34} strokeWidth={2} />
              </SocialLink>
              <SocialLink href={siteConfig.social.whatsapp} label="WhatsApp">
                <WhatsappIcon />
              </SocialLink>
            </div>
          </div>
        </div>

        <div className="border-t border-pulse-copper px-8 py-10 md:px-16 lg:px-[174px]">
          <div className="grid gap-8 text-[#fff8ed] lg:grid-cols-[1fr_0.75fr_1.1fr_1fr] lg:items-center">
            <FooterFact icon={MapPin}>{siteConfig.contact.address}</FooterFact>
            <FooterFact icon={Phone}>{siteConfig.contact.phone}</FooterFact>
            <FooterFact icon={Mail}>{siteConfig.contact.email}</FooterFact>
            <FooterFact icon={Clock3}>{siteConfig.contact.footerHours}</FooterFact>
          </div>
          <p className="font-menu mt-10 text-center text-[18px] text-[#fff8ed]/90">
            © 2024 Pulse Coffee House & Hookah. All Rights Reserved.
          </p>
        </div>
      </motion.div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="flex h-[70px] w-[70px] items-center justify-center rounded-full border border-[#d77f4e] text-[#fff8ed] transition hover:-translate-y-0.5 hover:bg-[#d77f4e]/10"
    >
      {children}
    </a>
  );
}

function FooterFact({
  icon: Icon,
  children
}: {
  icon: typeof MapPin;
  children: ReactNode;
}) {
  return (
    <div className="flex items-center gap-6">
      <Icon className="shrink-0 text-[#d77f4e]" size={34} strokeWidth={1.7} />
      <span className="font-menu text-[19px] leading-7">{children}</span>
    </div>
  );
}

function WhatsappIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 32 32" className="h-9 w-9 fill-current">
      <path d="M16.01 3.2A12.73 12.73 0 0 0 5.14 22.55L3.5 28.8l6.41-1.57A12.7 12.7 0 1 0 16.01 3.2Zm0 2.28a10.42 10.42 0 0 1 8.88 15.9 10.41 10.41 0 0 1-13.88 3.62l-.45-.24-3.73.91.95-3.62-.29-.48A10.42 10.42 0 0 1 16 5.48Zm-4.48 5.58c-.22 0-.58.08-.88.43-.3.35-1.16 1.14-1.16 2.77s1.19 3.22 1.36 3.44c.17.22 2.3 3.68 5.68 5.01 2.81 1.11 3.38.89 3.99.83.61-.06 1.98-.81 2.26-1.59.28-.78.28-1.45.2-1.59-.08-.14-.31-.22-.64-.39-.34-.17-1.99-.98-2.3-1.09-.31-.11-.53-.17-.76.17-.22.34-.87 1.09-1.06 1.31-.2.22-.39.25-.73.08-.34-.17-1.42-.52-2.7-1.67-1-.89-1.67-1.99-1.87-2.33-.2-.34-.02-.52.15-.69.15-.15.34-.39.5-.59.17-.2.22-.34.34-.56.11-.22.06-.42-.03-.59-.08-.17-.76-1.84-1.04-2.52-.27-.65-.55-.56-.76-.57l-.65-.01Z" />
    </svg>
  );
}
