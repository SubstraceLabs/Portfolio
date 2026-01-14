import FluidHero from "@/components/FluidHero";
import HorizontalWork from "@/components/HorizontalWork";
import FooterTicker from "@/components/FooterTicker";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F3F3F3]">
      <FluidHero />
      <div id="work">
        <HorizontalWork />
      </div>
      <FooterTicker />
    </main>
  );
}

