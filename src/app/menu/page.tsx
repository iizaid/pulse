import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Clock3, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Full Menu | Pulse Coffee House & Hookah"
};

type MenuItem = {
  name: string;
  price?: string;
  note?: string;
};

type MenuSection = {
  title: string;
  price?: string;
  items: MenuItem[];
  wide?: boolean;
};

const menuSections: MenuSection[] = [
  {
    title: "ICED COFFEE",
    items: [
      { name: "ICE LATTE", price: "3.00" },
      { name: "ICED CAPPUCCINO", price: "3.00" },
      { name: "ICE SPANISH LATTE", price: "3.00" },
      { name: "ICED MOCHA", price: "3.25" },
      { name: "ICED WHITE MOCHA", price: "3.25" },
      { name: "ICE SHAKEN", price: "3.50" },
      { name: "ICE PISTACHIO", price: "3.50" },
      { name: "FRAPPUCCINO", price: "3.25" },
      { name: "FRAPPUCCINO pistachio", price: "3.75" },
      { name: "FRAPPUCCINO Chocolate", price: "3.75" },
      { name: "ICED CARAMEL MACCHIATO", price: "3.25" },
      { name: "ICE AMERICANO", price: "2.50" },
      { name: "ICE MATCHA", price: "3.00" }
    ]
  },
  {
    title: "HOT DRINKS",
    items: [
      { name: "ESPRESSO", price: "2.25" },
      { name: "COFFEE LATTE", price: "3.00" },
      { name: "CAPPUCCINO", price: "3.00" },
      { name: "CORTADO", price: "3.00" },
      { name: "FLAT WHITE", price: "3.00" },
      { name: "CARAMEL MACCHIATO", price: "3.25" },
      { name: "Spanish latte", price: "3.25" },
      { name: "AMERICANO", price: "2.50" },
      { name: "ESPRESSO MACCHIATO", price: "2.75" },
      { name: "TEA", price: "1.50" },
      { name: "MASTIC", price: "2.75" },
      { name: "TURKISH COFFEE", price: "2.00" },
      { name: "COFFEE MOCHA / WHITE", price: "3.25" },
      { name: "HOT CHOCOLATE", price: "3.00" },
      { name: "HOT PISTACHIO", price: "3.25" },
      { name: "V60", price: "2.75" }
    ]
  },
  {
    title: "MOJITO",
    items: [
      { name: "SODA WATER", price: "2.75" },
      { name: "RED BULL", price: "3.25" },
      { name: "SPRITE", price: "2.75" }
    ]
  },
  {
    title: "SMOOTHIES",
    price: "3.00",
    items: [
      { name: "MIX SMOOTHIE", price: "3.00" },
      { name: "PINA COLADA", price: "3.25" },
      { name: "NASNOS", price: "3.25" },
      { name: "Tropical", price: "3.25" },
      { name: "SPRING PULSE", price: "3.25" }
    ]
  },
  {
    title: "FRESH JUICE",
    items: [
      { name: "MANGO", price: "2.25" },
      { name: "LEMON MINT", price: "2.75" },
      { name: "ORANGE", price: "2.50" },
      { name: "STRAWBERRY", price: "2.25" },
      { name: "GUAVA", price: "2.25" }
    ]
  },
  {
    title: "SPECIAL DRINKS",
    items: [
      { name: "SMOKED FRAPPE PULSE", price: "3.75" },
      { name: "SMOOTHIE PULSE", price: "3.50" },
      { name: "PULSE MOCKTAIL", price: "3.25" },
      { name: "ICE TEA PULSE", price: "3.25" },
      { name: "HEALTHY PULSE DRINK", price: "4.00" },
      { name: "SMOKED MACCHIATO", price: "3.75" }
    ]
  },
  {
    title: "ICED TEA",
    price: "2.75",
    items: [{ name: "FLAVOR OF YOUR CHOICE" }]
  },
  {
    title: "MILK SHAKE",
    price: "3.25",
    items: [{ name: "SNICKERS / CHOCOLATE / VANILLA / LOTUS / MANGO / CHEESECAKE / OREO" }]
  },
  {
    title: "SOFT DRINK",
    items: [
      { name: "SODA WATER", price: "1.50" },
      { name: "RED BULL", price: "2.50" },
      { name: "SPRITE", price: "1.50" },
      { name: "WATER", price: "0.50" }
    ]
  },
  {
    title: "EXTRA",
    price: "0.50",
    items: [{ name: "Bubbles" }, { name: "Web Cream" }, { name: "Shot ESPRESSO" }, { name: "Decaf" }]
  },
  {
    title: "ICE CREAM",
    price: "2.00",
    items: [{ name: "snickers / chocolate / vanilla / lotus / cheesecake / oreo / mango" }]
  },
  {
    title: "HOOKAH",
    price: "4.50",
    wide: true,
    items: [
      {
        name: "2 APPLE / LEMON AND MINT / GUM AND CINNAMON / CANDY / LOVE / MASTIC / WATERMELON AND MINT / GUM / GRAPES AND BLUEBERRIES"
      },
      { name: "( 2 APPLE NAKHLA )", price: "5.00" }
    ]
  }
];

export default function MenuPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#05213a] text-white">
      <section className="relative px-5 py-8 md:px-10 lg:px-16">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(61,111,154,0.42),transparent_38%),linear-gradient(135deg,#031a30_0%,#0a3457_48%,#041b31_100%)]" />
          <div className="absolute left-[-12%] top-[16%] h-[760px] w-[760px] rounded-full border-[72px] border-white/5" />
          <div className="absolute right-[-18%] top-[12%] h-[640px] w-[640px] rounded-full border-[66px] border-white/7" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1320px]">
          <header className="mb-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <Link
              href="/#menu"
              className="inline-flex h-12 w-fit items-center gap-3 rounded-full border border-white/25 px-5 text-sm font-bold uppercase tracking-[0.16em] text-white/90 transition hover:bg-white/10"
            >
              <ArrowLeft size={18} />
              Back
            </Link>

            <div className="flex flex-wrap gap-5 text-sm font-semibold text-white/80">
              <span className="inline-flex items-center gap-2">
                <Clock3 size={17} className="text-[#d77f4e]" />
                {siteConfig.contact.footerHours}
              </span>
              <span className="inline-flex items-center gap-2">
                <Phone size={17} className="text-[#d77f4e]" />
                {siteConfig.contact.phone}
              </span>
            </div>
          </header>

          <div className="mb-10 border-b border-white/35 pb-9">
            <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-center lg:gap-12">
              <div className="relative h-[128px] w-[260px] brightness-0 invert">
                <Image src={siteConfig.assets.logo} alt="Pulse Coffee House & Hookah" fill sizes="260px" className="object-contain" />
              </div>
              <div className="text-center lg:text-left">
                <h1 className="text-[70px] font-black italic leading-none tracking-wide text-white md:text-[118px]">Menu</h1>
                <p className="font-menu mt-3 text-[28px] font-bold uppercase tracking-[0.04em] text-white md:text-[38px]">
                  From our pulse to yours
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {menuSections.map((section) => (
              <MenuCard key={section.title} section={section} />
            ))}
          </div>

          <div className="mt-8 rounded-[18px] border border-white/25 bg-white/[0.06] px-6 py-5 text-center shadow-[0_20px_60px_rgba(0,0,0,0.16)]">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/75">
              Prices are listed in Jordanian Dinar
            </p>
            <p className="mt-3 inline-flex items-center justify-center gap-2 font-menu text-[19px] text-white/85">
              <MapPin size={18} className="text-[#d77f4e]" />
              {siteConfig.contact.address}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

function MenuCard({ section }: { section: MenuSection }) {
  return (
    <article
      className={`rounded-[18px] border border-white/15 bg-white/[0.055] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.18)] backdrop-blur ${
        section.wide ? "md:col-span-2 xl:col-span-3" : ""
      }`}
    >
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-[31px] font-black uppercase leading-none tracking-[0.02em] text-white md:text-[36px]">
            {section.title}
          </h2>
          <span className="mt-3 block h-[3px] w-[62px] bg-white" />
        </div>
        {section.price ? <span className="text-[22px] font-black text-white">{section.price}</span> : null}
      </div>

      <div className={section.wide ? "grid gap-3 md:grid-cols-2" : "space-y-2"}>
        {section.items.map((item) => (
          <div key={`${section.title}-${item.name}`} className="flex items-start justify-between gap-4 text-white">
            <span className="font-menu text-[18px] font-bold leading-snug text-white/95">{item.name}</span>
            {item.price ? <span className="shrink-0 text-[17px] font-black text-white">{item.price}</span> : null}
          </div>
        ))}
      </div>
    </article>
  );
}
