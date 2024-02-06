'use client'
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import { Button } from "./ui/button";

const HeroSection: React.FC = () => {
  return (
    <section className="lg:py-16 py-5 px-24 bg-black  left-0 right-0">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-6 place-self-center text-center sm:text-left justify-self-start ">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-bold">
          <span className="text-white text-4xl font-extrabold tracking-tight text-primary sm:text-6xl max-w-[550px] sm:leading-[1.15]">You're spending too much on customer support  </span>          
          </h1>
          <div className="lg:h-[5em] md:h-[7em] sm:h-[7em] h-[8em]">
          <span className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          <TypeAnimation
              sequence={[
                "Automate your customer support with AI. Create a custom trained GPT support chatbot that can answer questions about your products and services in real-time and reduce your support tickets.",
              ]}
              wrapper="span"
              speed={100}
              
            />
          </span>
          </div>
          <Button  className="mt-[8em] lg:mt-[5em] bg-gradient-to-br from-purple-800 to-cyan-400  ">Create your ChatBot</Button>
          
          </div>
          
        </div>
        
      
    </section>
  );
};

export default HeroSection;
