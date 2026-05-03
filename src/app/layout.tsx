import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { LoadingScreen } from "@/components/LoadingScreen";

export const metadata: Metadata = {
  title: "Pulse Coffee House & Hookah",
  description: "Premium coffee, desserts, and hookah in Amman."
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LoadingScreen />
        {children}
      </body>
    </html>
  );
}
