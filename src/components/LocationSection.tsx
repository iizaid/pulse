import Image from "next/image";
import { Car, Clock3, Coffee, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { ArrowButton } from "./ArrowButton";
import { InteractiveMap } from "./InteractiveMap";

const featureItems = [
  {
    icon: MapPin,
    title: "Easy Access",
    text: "Located in a prime area with easy access."
  },
  {
    icon: Car,
    title: "Parking Available",
    text: "Convenient parking space around the cafe."
  },
  {
    icon: Coffee,
    title: "Great Vibes",
    text: "Enjoy the atmosphere and good times."
  }
];

export function LocationSection() {
  const directionsUrl = siteConfig.map.url;

  return (
    <section id="location" className="section-paper relative min-h-[1024px] overflow-hidden px-8 py-20 md:px-14 lg:px-[76px] lg:py-[92px]">
      <div className="absolute right-[132px] top-[72px] hidden h-[96px] w-[196px] lg:block">
        <Image src={siteConfig.assets.logo} alt="Pulse Coffee House & Hookah" fill sizes="196px" className="object-contain" />
      </div>

      <div className="mx-auto grid max-w-[1390px] grid-cols-1 gap-[54px] pt-12 lg:grid-cols-[440px_1fr] lg:pt-[70px]">
        <div>
          <div className="mb-10 flex items-center gap-6">
            <span className="tiny-kicker">Find Us</span>
            <span className="h-px w-[86px] bg-pulse-copper" />
          </div>

          <h2 className="section-title">OUR LOCATION</h2>
          <p className="body-copy mt-7 max-w-[430px]">
            Visit Pulse Coffee House & Hookah and enjoy a premium experience in the heart of the city.
          </p>

          <div className="mt-10 space-y-8">
            <InfoRow icon={MapPin} title="ADDRESS" text={siteConfig.contact.address} />
            <InfoRow icon={Clock3} title="OPENING HOURS" text={siteConfig.contact.hours} />
            <InfoRow icon={Phone} title="CONTACT" text={siteConfig.contact.phone} />
            <InfoRow icon={Mail} title="EMAIL" text={siteConfig.contact.email} />
          </div>

          <ArrowButton href={directionsUrl} target="_blank" rel="noreferrer" className="mt-11 min-w-[300px] justify-between px-8 font-sans text-[18px] font-black uppercase tracking-[0.08em]">
            GET DIRECTIONS
          </ArrowButton>
        </div>

        <div className="pt-0 lg:pt-[82px]">
          <div className="h-[400px] md:h-[580px] overflow-hidden rounded-[24px] border border-white/80 shadow-soft">
            <InteractiveMap />
          </div>

          <div className="-mt-1 grid gap-4 rounded-[24px] border border-white/85 bg-pulse-paper/82 px-6 py-6 md:px-8 md:py-8 shadow-soft backdrop-blur md:grid-cols-3">
            {featureItems.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex items-center gap-5">
                  <span className="flex h-[74px] w-[74px] shrink-0 items-center justify-center rounded-full bg-[#ebe1d7] text-pulse-navy">
                    <Icon size={33} strokeWidth={1.8} />
                  </span>
                  <span>
                    <strong className="font-menu text-[19px] font-bold text-pulse-navy">{item.title}</strong>
                    <span className="mt-2 block text-[14px] leading-6 text-[#111827]">{item.text}</span>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  icon: Icon,
  title,
  text
}: {
  icon: typeof MapPin;
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-center gap-8">
      <span className="flex h-[82px] w-[82px] shrink-0 items-center justify-center rounded-[18px] bg-[#ebe1d7] text-pulse-navy">
        <Icon size={38} strokeWidth={1.8} />
      </span>
      <span>
        <strong className="block text-[16px] font-black uppercase tracking-[0.08em] text-pulse-copper">{title}</strong>
        <span className="mt-2 block max-w-[290px] text-[18px] leading-7 text-[#151923]">{text}</span>
      </span>
    </div>
  );
}
