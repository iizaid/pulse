import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { LocationSection } from "@/components/LocationSection";
import { SignaturePicks } from "@/components/SignaturePicks";

export default function Home() {
  return (
    <main>
      <Hero />
      <SignaturePicks />
      <LocationSection />
      <Footer />
    </main>
  );
}
