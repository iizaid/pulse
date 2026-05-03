"use client";

import { divIcon } from "leaflet";
import { MapContainer, Marker, TileLayer, ZoomControl } from "react-leaflet";
import { siteConfig } from "@/config/site";

export function LeafletFallbackMap() {
  const center: [number, number] = [siteConfig.map.lat, siteConfig.map.lng];
  const marker = divIcon({
    className: "",
    html: `
      <a href="${siteConfig.map.url}" target="_blank" rel="noreferrer" aria-label="Open directions" class="pulse-map-pin" style="position:relative;display:block;width:92px;height:130px;">
        <span class="pulse-map-pin__logo" style="position:relative;z-index:1;display:flex;width:88px;height:88px;align-items:center;justify-content:center;border:10px solid #08233d;border-radius:999px;background:#fbf8f2;box-shadow:0 18px 28px rgba(8,35,61,.22);overflow:hidden;">
          <img src="${siteConfig.assets.logo}" alt="" style="display:block;width:58px!important;height:auto!important;max-width:58px!important;" />
        </span>
        <span style="position:absolute;left:50%;top:70px;width:54px;height:70px;background:#08233d;clip-path:polygon(50% 100%,0 0,100% 0);transform:translateX(-50%);"></span>
      </a>
    `,
    iconSize: [92, 130],
    iconAnchor: [46, 130]
  });

  return (
    <div className="pulse-leaflet relative h-full min-h-[500px] w-full overflow-hidden rounded-[24px] bg-[#efe8df]">
      <MapContainer
        center={center}
        zoom={siteConfig.map.zoom}
        zoomControl={false}
        scrollWheelZoom
        dragging
        touchZoom
        className="h-full min-h-[500px] w-full"
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          subdomains={["a", "b", "c", "d"]}
        />
        <ZoomControl position="topleft" />
        <Marker position={center} icon={marker} />
      </MapContainer>
      <div className="pointer-events-none absolute right-7 top-6 rounded-[16px] bg-white/90 px-6 py-4 text-[15px] font-black uppercase tracking-[0.08em] text-pulse-ink shadow-soft">
        3D View
      </div>
    </div>
  );
}
