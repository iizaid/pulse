"use client";

import { CakeSlice, Coffee, Leaf, Milestone } from "lucide-react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { filters, products, type Product, type ProductCategory } from "@/config/site";
import { ArrowButton } from "./ArrowButton";

const filterIcons = {
  Coffee,
  Mojito: Leaf,
  Desserts: CakeSlice,
  Hookah: Milestone
} satisfies Record<ProductCategory, typeof Coffee>;

export function SignaturePicks() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>("Coffee");
  const [activeProduct, setActiveProduct] = useState<string>("SIGNATURE FRAPPE");
  const cardsRef = useRef<Array<HTMLElement | null>>([]);
  const tabsRef = useRef<Array<HTMLButtonElement | null>>([]);
  const gridRef = useRef<HTMLDivElement | null>(null);

  const visibleProducts = useMemo(
    () => products.filter((product) => product.category === activeCategory),
    [activeCategory]
  );

  useEffect(() => {
    const preferred = visibleProducts.find((product) => product.featured) ?? visibleProducts[0];
    if (preferred) {
      setActiveProduct(preferred.title);
    }
  }, [activeCategory, visibleProducts]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current.filter(Boolean),
        {
          autoAlpha: 0,
          y: 34,
          scale: 0.96,
          rotateY: -8
        },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          rotateY: 0,
          duration: 0.72,
          ease: "power3.out",
          stagger: 0.08
        }
      );
    }, gridRef);

    return () => ctx.revert();
  }, [visibleProducts]);

  function changeCategory(category: ProductCategory, index: number) {
    if (category === activeCategory) return;

    const tab = tabsRef.current[index];
    if (tab) {
      gsap.fromTo(
        tab,
        { scale: 0.94 },
        { scale: 1, duration: 0.45, ease: "elastic.out(1, 0.55)" }
      );
    }

    gsap.to(cardsRef.current.filter(Boolean), {
      autoAlpha: 0,
      y: -26,
      scale: 0.96,
      duration: 0.24,
      ease: "power2.in",
      stagger: 0.035,
      onComplete: () => setActiveCategory(category)
    });
  }

  function selectProduct(product: Product, index: number) {
    setActiveProduct(product.title);
    const card = cardsRef.current[index];
    if (!card) return;

    gsap.timeline()
      .to(card, {
        y: -18,
        scale: 1.045,
        rotate: product.category === "Hookah" ? 0 : -0.7,
        duration: 0.28,
        ease: "power2.out"
      })
      .to(card, {
        y: 0,
        scale: 1,
        rotate: 0,
        duration: 0.46,
        ease: "elastic.out(1, 0.62)"
      });
  }

  return (
    <section id="menu" className="section-paper relative min-h-[941px] overflow-hidden px-8 py-20 md:px-14 lg:px-[84px] lg:py-[108px]">
      <div className="absolute left-[92px] top-[54px] hidden h-[292px] flex-col items-center justify-between xl:flex">
        <span className="h-[38px] w-px bg-pulse-copper" />
        <Coffee size={28} strokeWidth={1.4} className="text-pulse-copper" />
        <span className="h-[170px] w-px bg-pulse-copper" />
      </div>

      <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-12 lg:grid-cols-[430px_1fr] xl:grid-cols-[470px_1fr]">
        <motion.aside
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="relative pt-[120px] lg:pt-[120px] xl:pl-[110px]"
        >
          <div className="absolute left-0 top-[260px] hidden items-center gap-16 xl:flex">
            <span className="side-label text-pulse-ink">PULSE SIGNATURE PICKS</span>
            <span className="h-[90px] w-px bg-pulse-copper" />
          </div>
          <h2 className="section-title">
            OUR
            <br />
            SIGNATURE
            <br />
            PICKS
          </h2>
          <p className="mt-7 text-[17px] font-black uppercase tracking-[0.22em] text-pulse-copper md:text-[19px]">
            HANDCRAFTED. PREMIUM. UNFORGETTABLE.
          </p>
          <p className="body-copy mt-8 max-w-[360px] text-[20px]">
            Explore our most loved creations, perfectly crafted to elevate your coffee house experience.
          </p>
          <div className="mt-10 flex items-center gap-8">
            <ArrowButton href="/menu" className="min-w-[238px] justify-center text-[17px] uppercase tracking-[0.22em]">
              VIEW FULL MENU
            </ArrowButton>
            <span className="hidden h-px w-12 bg-pulse-copper md:block" />
          </div>
          <div className="mt-7 hidden text-[18px] font-bold tracking-[0.1em] text-pulse-copper xl:block">02</div>
        </motion.aside>

        <div className="pt-0 lg:pt-6">
          <div className="mb-[56px] flex flex-wrap justify-center gap-4 lg:justify-end xl:gap-[20px]">
            {filters.map((filter, index) => {
              const Icon = filterIcons[filter.key];
              const isActive = filter.key === activeCategory;

              return (
                <button
                  key={filter.key}
                  ref={(node) => {
                    tabsRef.current[index] = node;
                  }}
                  className={`flex h-[52px] md:h-[66px] flex-1 md:flex-none md:min-w-[196px] items-center justify-center gap-3 md:gap-5 rounded-[24px] border px-4 md:px-8 transition hover:-translate-y-0.5 ${
                    isActive
                      ? "border-pulse-navy bg-pulse-navy text-white shadow-card"
                      : "border-pulse-copper bg-transparent text-pulse-ink"
                  }`}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => changeCategory(filter.key, index)}
                >
                  <Icon size={20} strokeWidth={1.5} className="md:h-[26px] md:w-[26px]" />
                  <span className="text-[14px] md:text-[16px] font-bold uppercase tracking-[0.15em] md:tracking-[0.25em]">{filter.label}</span>
                </button>
              );
            })}
          </div>

          <div
            ref={gridRef}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:ml-[32px] xl:grid-cols-4 xl:items-stretch"
          >
            {visibleProducts.map((product, index) => (
              <ProductCard
                key={`${product.category}-${product.title}`}
                product={product}
                index={index}
                isActive={product.title === activeProduct}
                setCardRef={(node) => {
                  cardsRef.current[index] = node;
                }}
                onClick={() => selectProduct(product, index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductCard({
  product,
  index,
  isActive,
  setCardRef,
  onClick
}: {
  product: Product;
  index: number;
  isActive: boolean;
  setCardRef: (node: HTMLElement | null) => void;
  onClick: () => void;
}) {
  const featured = isActive;
  return (
    <article
      ref={setCardRef}
      role="button"
      tabIndex={0}
      aria-pressed={isActive}
      onClick={onClick}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onClick();
        }
      }}
      className={`glass-card group relative flex h-[480px] w-full cursor-pointer flex-col items-center justify-between overflow-hidden rounded-[24px] px-5 py-8 outline-none transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-2 hover:shadow-card focus-visible:ring-2 focus-visible:ring-pulse-copper ${
        featured ? "border-pulse-copper shadow-card" : ""
      }`}
    >
      {featured ? (
        <div className="absolute right-5 top-5 z-10 flex h-[54px] w-[54px] items-center justify-center rounded-full bg-pulse-copper text-center text-[11px] font-black uppercase leading-tight tracking-[0.08em] text-white">
          BEST
          <br />
          SELLER
        </div>
      ) : null}
      <div className="flex h-[240px] w-full items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="block h-full w-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.15]"
        />
      </div>
      <div className="flex flex-col items-center">
        <h3 className="font-display mt-4 text-center text-[28px] leading-tight text-pulse-navy">
          {product.title}
        </h3>
        <span className="my-4 h-px w-[54px] bg-pulse-copper" />
        <p className="font-menu text-[20px] font-semibold tracking-[0.12em] text-pulse-copper">{product.price}</p>
      </div>
    </article>
  );
}
