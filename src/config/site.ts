export const siteConfig = {
  brand: "Pulse Coffee House & Hookah",
  tagline: "From our pulse to yours.",
  contact: {
    phone: "07 8078 4131",
    phoneInternational: "+962 7 8078 4131",
    email: "pulse.caffeehouse@gmail.com",
    address: "Ayla, Aqaba 77110, Jordan",
    hours: "Open Daily: 9:00 AM - 1:00 AM",
    footerHours: "Open Daily: 9:00 AM - 1:00 AM"
  },
  social: {
    instagram: "https://www.instagram.com/pulse_coffee_house/",
    tiktok: "https://www.tiktok.com/@pulsecoffeehouse",
    whatsapp: "https://wa.me/962780784131"
  },
  map: {
    lat: 29.5418501,
    lng: 34.9987622,
    zoom: 17,
    url: "https://maps.app.goo.gl/qc8Ho1WxbAbC9jCR8"
  },
  assets: {
    logo: "/assets/logo-transparent.png",
    cup: "/assets/hero-cup-cut.png"
  }
} as const;

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" }
] as const;

export type ProductCategory = "Coffee" | "Mojito" | "Desserts" | "Hookah";

export type Product = {
  title: string;
  price: string;
  image: string;
  category: ProductCategory;
  featured: boolean;
};

export const products = [
  {
    title: "PISTACHIO LATTE",
    price: "JD 3.50",
    image: "/assets/ele 2.png",
    category: "Coffee",
    featured: false
  },
  {
    title: "SIGNATURE CUP",
    price: "JD 3.75",
    image: "/assets/hero-cup-cut.png",
    category: "Coffee",
    featured: true
  },
  {
    title: "RED BERRY MOJITO",
    price: "JD 3.00",
    image: "/assets/ele 1.png",
    category: "Mojito",
    featured: false
  },
  {
    title: "CLASSIC MOJITO",
    price: "JD 2.75",
    image: "/assets/ele 3.png",
    category: "Mojito",
    featured: true
  },
  {
    title: "FRUIT TART",
    price: "JD 3.25",
    image: "/assets/ele 4.png",
    category: "Desserts",
    featured: false
  },
  {
    title: "CHOCOLATE CAKE",
    price: "JD 3.50",
    image: "/assets/ele 5.png",
    category: "Desserts",
    featured: true
  },
  {
    title: "LOTUS CHEESECAKE",
    price: "JD 3.25",
    image: "/assets/ele 6.png",
    category: "Desserts",
    featured: false
  },
  {
    title: "PULSE HOOKAH",
    price: "JD 5.00",
    image: "/assets/hookah.svg",
    category: "Hookah",
    featured: true
  },
  {
    title: "PREMIUM HOOKAH",
    price: "JD 6.00",
    image: "/assets/hookah.svg",
    category: "Hookah",
    featured: false
  }
] satisfies Product[];

export const filters = [
  { key: "Coffee", label: "Coffee" },
  { key: "Mojito", label: "Mojito" },
  { key: "Desserts", label: "Desserts" },
  { key: "Hookah", label: "Hookah" }
] satisfies { key: ProductCategory; label: string }[];
