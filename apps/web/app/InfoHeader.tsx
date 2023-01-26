import React from "react";
import { headers } from "next/headers";
import { get } from "@vercel/edge-config";

function InfoHeader({ show }: any) {
  // initialize returns a promise which always resolves
  console.log(show);
  if (show) {
    console.log("??");
  }
  if (!show) return <div></div>;
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
