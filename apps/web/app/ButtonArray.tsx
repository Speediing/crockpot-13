import React from "react";
import { headers } from "next/headers";
import { get } from "@vercel/edge-config";

async function ButtonArray() {
  // initialize returns a promise which always resolves
  const headersList = headers();
  const ip = headersList.get("x-real-ip");
  const country = headersList.get("x-vercel-ip-country") || "ca";

  const buttonArrayReversed = await get("buttonArrayReversed");
  return (
    <div className="flex flex-row gap-4 mt-5">
      {buttonArrayReversed[country] && (
        <button className="bg-black h-[50px] rounded-md text-white px-4">
          Get Cooking
        </button>
      )}
      <button className="bg-black h-[50px] rounded-md text-white px-4">
        Save on Crockpot
      </button>
      {!buttonArrayReversed[country] && (
        <button className="bg-black h-[50px] rounded-md text-white px-4">
          Get Cooking
        </button>
      )}
    </div>
  );
}

export default ButtonArray;
