import Image from "next/image";
import ButtonArray from "./ButtonArray";
import InfoHeader from "./InfoHeader";
export const runtime = "experimental-edge";
export const revalidate = 0;

import {  Halant } from "next/font/google";
import Hero from "./Hero";

const halant = Halant({
  weight: ["400", "700", "500"],
  subsets: ["latin"],
  variable: "--font-halant",
});


export default  function Page() {
  return (
    <div>
      {/* @ts-expect-error Server Component */}
      <InfoHeader />
      {/* @ts-expect-error Server Component */}
     <Hero />
      <div className="flex flex-col my-12">
        <h2
          className={`pb-2 ${halant.className} leading-tight align-middle text-center font-serif text-3xl  font-bold `}
        >
          Find Your Next Crockpot® Product
        </h2>
        <div className="flex flex-row justify-center mx-6">
          <div>
            <Image
              unoptimized
              width={688}
              height={440}
              alt=""
              src={
                "https://s7d9.scene7.com/is/image/NewellRubbermaid/09012022-CrockpotHomepage-02-Slow-01?fmt=jpeg"
              }
            />
            <p
              className={`pb-2 ${halant.className} leading-tight align-middle text-center mt-12 font-serif text-2xl  font-bold `}
            >
              Slow Cookers
            </p>
            <p className="text-center">
              Simmer the flavor into your home-cooked food.
            </p>
            <div className="flex flex-row justify-center mt-6">
              <button className="w-[179px] bg-white h-[50px] rounded-md px-4 border-[#585a5c] text-[#585a5c] border">
                Go Now
              </button>
            </div>
          </div>

          <div>
            <Image
              unoptimized
              width={688}
              height={440}
              alt=""
              src={
                "https://s7d9.scene7.com/is/image/NewellRubbermaid/09012022-CrockpotHomepage-02-LunchCrock-01?fmt=jpeg"
              }
            />
            <p
              className={`pb-2 ${halant.className} leading-tight align-middle text-center mt-12 font-serif text-2xl  font-bold `}
            >
              Lunch Crock®
            </p>
            <p className="text-center">
              The portable food warmer that makes any spot a lunch spot.
            </p>
            <div className="flex flex-row justify-center mt-6">
              <button className="w-[179px] bg-white h-[50px] rounded-md px-4 border-[#585a5c] text-[#585a5c] border">
                Go Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
