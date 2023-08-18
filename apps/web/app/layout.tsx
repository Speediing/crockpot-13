import "../styles/globals.css";
import { Roboto } from "next/font/google";
import { footerItems } from "ui";
import { AnalyticsWrapper } from "./Analytics";

import { headers } from "next/headers";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
const roboto = Roboto({
  weight: ["300", "400", "500", "700", "300"],
  subsets: ["latin"],
  variable: "--font-roboto",
});


export default function RootLayout({ children }: any) {
  const headersList = headers();
  return (
    <html lang="en">
      <head />
      <body className={` ${roboto.className}  text-[#102641]`}>
        <header className="font-light border-b border-gray-200 h-[68px] bg-[#f2c65b]">
          <div className="flex flex-row justify-between mx-36 xl:text-base h-full text-sm text-[#102641] gap-6">
            <div className="flex flex-row gap-12">
              <div className="flex flex-col justify-center h-full align-middle">
                <Image
                  src="https://www.crock-pot.com/on/demandware.static/Sites-crockpot-Site/-/default/dw61095556/images/brand-logo.svg"
                  height={40}
                  width={160}
                  alt=""
                />
              </div>
              <div>
                <div className="relative h-full py-2 rounded-md shadow-sm">
                  <input
                    type="text"
                    name="account-number"
                    id="account-number"
                    className="block w-[400px] h-full pr-10 border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="Search"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <MagnifyingGlassIcon
                      className="w-5 h-5 text-gray-800"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex flex-row justify-center">
                <Image
                  alt=""
                  height={30}
                  width={30}
                  src="https://imagedelivery.net/SBiDhSEL5O7whXBpnfPxxw/93542383-dbbf-491f-7950-0008060d9200/big"
                />
              </div>
              <p>Support</p>
            </div>
          </div>
        </header>
        <div className="flex flex-row text-sm justify-center min-h-[44px] mx-10 gap-14  text-[#3b3b3b] font-normal ">
          <div className="flex flex-col justify-center cursor-pointer">
            What&apos;s new
          </div>
          <div className="flex flex-col justify-center cursor-pointer">
            Slow Cookers
          </div>
          <div className="flex flex-col justify-center cursor-pointer">
            Collections
          </div>
          <div className="flex flex-col justify-center cursor-pointer">
            Recipes
          </div>
          <div className="flex flex-col justify-center cursor-pointer">
            Cooking Tips
          </div>
          <div className="flex flex-col justify-center cursor-pointer">
            Where to Buy
          </div>
          <div className="flex flex-col justify-center cursor-pointer">
            Replacement Parts
          </div>
        </div>
        <AnalyticsWrapper />
        <div>{children}</div>
        <footer className="py-20 bg-[#f4f5f8] px-32 xl:px-44 text-black">
          <Image
            src="https://www.crock-pot.com/on/demandware.static/Sites-crockpot-Site/-/default/dw61095556/images/brand-logo.svg"
            width="164"
            height="37"
            alt=""
            loading="lazy"
          />
          <p className="pb-4 border-b pt-11 border-b-gray-600">
            Need help? Call us at 855.559.1455
          </p>
          <div className="flex flex-row justify-start gap-3 mt-8 text-sm font-light">
            {footerItems.map((x: any, i: any) => {
              if (i % 2 === 1) return <p className="text-gray-500">{x}</p>;
              return <p className="text-black cursor-pointer">{x}</p>;
            })}
          </div>
        </footer>
      </body>
    </html>
  );
}
