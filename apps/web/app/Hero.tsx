import React from "react";
import { get } from "@vercel/edge-config";
import Image from "next/image";
import {  Halant } from "next/font/google";
import ButtonArray from "./ButtonArray";
import { groq } from "next-sanity";
import { sanityFetch } from "../sanity/lib/client";

const halant = Halant({
  weight: ["400", "700", "500"],
  subsets: ["latin"],
  variable: "--font-halant",
});

async function Hero() {


    const hero = await sanityFetch<any>({
    query: groq`*[_type == 'home'][0]{
        hero->
        }.hero `,
    tags: ['home'],
    })
  return (
    <div className="relative">
    <Image
      unoptimized
      alt=""
      src="https://s7d9.scene7.com/is/content/NewellRubbermaid/2023_Crock-Pot_January_ContentCalendar_HPBanner1_Desktop_3840x1200?fmt=gif&amp;wid=2880"
      layout="fill"
      objectFit="cover"
    />
    <div className="relative flex flex-row justify-center text-black h-[500px] ">
      <div className="grid grid-cols-2  w-[1080px]">
        <div />
        <div className="flex flex-col justify-center">
          <h2
            className={`pb-2 ${halant.className} leading-tight font-serif text-5xl  font-bold `}
          >
          {hero.title}
          </h2>
          <h3 className="text-xl font-normal">
          {hero.subtitle}
          </h3>
          {/* @ts-expect-error Server Component */}
          <ButtonArray />
        </div>
      </div>
    </div>
  </div>
  );
}

export default Hero;
