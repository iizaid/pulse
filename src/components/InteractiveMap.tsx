"use client";

import { GoogleMap, OverlayView, useJsApiLoader } from "@react-google-maps/api";
import Image from "next/image";
import dynamic from "next/dynamic";
import { siteConfig } from "@/config/site";

const LeafletFallbackMap = dynamic(
  () => import("./LeafletFallbackMap").then((mod) => mod.LeafletFallbackMap),
  {
    ssr: false,
    loading: () => <div className="h-full min-h-[500px] w-full rounded-[24px] bg-[#efe8df]" />
  }
);

const mapStyles: google.maps.MapTypeStyle[] = [
  { elementType: "geometry", stylers: [{ color: "#eee8df" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#1b3048" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#faf7f0" }] },
  { featureType: "road", elementType: "geometry", stylers: [{ color: "#ffffff" }] },
  { featureType: "road", elementType: "geometry.stroke", stylers: [{ color: "#d7cfc4" }] },
  { featureType: "poi", elementType: "geometry", stylers: [{ color: "#e8dfd4" }] },
  { featureType: "water", elementType: "geometry", stylers: [{ color: "#d7e1e6" }] }
];

export function InteractiveMap() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "";
  const center = { lat: siteConfig.map.lat, lng: siteConfig.map.lng };
  const directionsUrl = siteConfig.map.url;
  const { isLoaded } = useJsApiLoader({
    id: "pulse-google-map",
    googleMapsApiKey: apiKey,
    preventGoogleFontsLoading: true
  });

  if (!apiKey) {
    return <LeafletFallbackMap />;
  }

  if (!isLoaded) {
    return <div className="h-full min-h-[500px] w-full rounded-[24px] bg-[#efe8df]" />;
  }

  return (
    <GoogleMap
      mapContainerClassName="h-full min-h-[500px] w-full rounded-[24px]"
      center={center}
      zoom={siteConfig.map.zoom}
      options={{
        styles: mapStyles,
        disableDefaultUI: false,
        clickableIcons: false,
        gestureHandling: "greedy",
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        zoomControl: true
      }}
    >
      <OverlayView position={center} mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}>
        <a
          href={directionsUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Open directions"
          className="block h-[130px] w-[100px] -translate-x-1/2 -translate-y-full"
        >
          <span className="flex h-[86px] w-[86px] items-center justify-center rounded-full border-[10px] border-pulse-navy bg-pulse-paper shadow-card">
            <Image src={siteConfig.assets.logo} alt="" width={58} height={38} className="object-contain" />
          </span>
          <span className="-mt-3 ml-[19px] block h-[66px] w-[50px] bg-pulse-navy shadow-card [clip-path:polygon(50%_100%,0_0,100%_0)]" />
        </a>
      </OverlayView>
    </GoogleMap>
  );
}
