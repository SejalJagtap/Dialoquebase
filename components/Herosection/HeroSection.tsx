'use client'
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import { Button } from "../ui/button";

const HeroSection: React.FC = () => {
  return (
    <section className="lg:pt-[7em]  px-9 md:px-24 lg:px-24 min-h-screen left-0 right-0">
      <div className="grid grid-cols-1 sm:grid-cols-12 pt-20 lg:py-24">
        <div className="col-span-11 lg:col-span-7 text-left justify-self-start ">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-bold">
            <span className="text-white text-4xl font-extrabold text-primary lg:text-5xl sm:text-3xl sm:leading-[0]">You&apos;re spending too much on customer support  </span>
          </h1>
          <div className="lg:h-[5em] md:h-[7em] sm:h-[7em] h-[8em]">
            <span className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
              <TypeAnimation
                sequence={[
                  "Automate your customer support with AI. Create a custom trained GPT support chatbot that can answer questions about your products and services in real-time and reduce your support tickets.",
                ]}
                wrapper="span"
                speed={95}
              />
            </span>
          </div>
          <Button className="mt-[3em] lg:mt-[5em] bg-gradient-to-br from-purple-800 to-cyan-400  ">Create your ChatBot</Button>
        </div>
        {/* <div className="block rounded-md lg:col-span-5">
          <video className="w-auto pl-10 transition-opacity ease-in duration-150 shadow-md rounded-md ring-1 ring-slate-900/10 lg:w-[448px] max-h-[497px] lg:max-h-none lg:h-[450px] h-full w-full" >
            <source src="https://sitespeak.ai/marketing/assets/sitespeakai-chatgpt-demo-v5-fc59c30b.mp4" type="video/mp4" />
          </video>
        </div> */}
      </div>
    </section>
  );
};

export default HeroSection;
