import React from "react";
import { headers } from "next/headers";
import { get } from "@vercel/edge-config";

async function InfoHeader() {
  // initialize returns a promise which always resolves
  const headersList = headers();
  const ip = headersList.get("x-real-ip");
  console.log(headersList.get("x-vercel-ip-country"));

  const shouldShowHeader = await get("shouldShowBanner");
  if (!shouldShowHeader) return <div></div>;
  return (
    <div className="h-24 bg-[#102641] text-white py-8 px-11 text-sm flex flex-col justify-center">
      <p className="font-semibold">
        Your complete financial picture on a single platform
      </p>
      <p>Connect with more than 20k financial institutions</p>
    </div>
  );
}

export default InfoHeader;
