import HeroSection from "@/components/Herosection/HeroSection";
import Integrations from "@/components/Integration/Integrations";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex  max-h-screen flex-col items-center justify-between bg-black ">
      <div className="bg-gradient-to-br from-black to-gray-700 min-h-scree">
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      </div>
      
      <Integrations></Integrations>
    </div>
  );
}
