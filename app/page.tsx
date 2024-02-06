import HeroSection from "@/components/HeroSection";
import Integrations from "@/components/Integration/Integrations";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex  min-h-screen flex-col items-center justify-between bg-gradient-to-br from-purple-800 to-cyan-400  py-24">
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <Integrations></Integrations>
    </div>
  );
}
