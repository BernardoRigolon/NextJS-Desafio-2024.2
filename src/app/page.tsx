import AboutUs from "@/components/aboutUs";
import Carousel from "@/components/carousel";
import HeroSection from "@/components/hero-section";
import Highlights from "@/components/highlights";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-black to-[#038C00] w-full">
      <div className="w-10/12 mx-auto py-10">
    <HeroSection />
      </div>
    <div className="w-full bg-[#038C00] h-5"></div>

    <div className="w-full bg-[#038C00] h-5"></div>
    <AboutUs />
    <div className="w-full bg-[#038C00] h-5"></div>
    <Highlights />
    </div>
  );
}
