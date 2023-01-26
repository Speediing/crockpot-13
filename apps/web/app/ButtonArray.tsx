import React from "react";
import { headers } from "next/headers";
import { get } from "@vercel/edge-config";

function ButtonArray({ reversed }: any) {
  // initialize returns a promise which always resolves

  return (
    <div className="flex flex-row gap-4 mt-8">
      {reversed && (
        <button className="bg-white h-[50px] rounded-sm text-black px-4">
          File with TurboTax
        </button>
      )}
      <button className="bg-white h-[50px] rounded-sm text-black px-4">
        Save on Quickbooks
      </button>
      {!reversed && (
        <button className="bg-white h-[50px] rounded-sm text-black px-4">
          File with TurboTax
        </button>
      )}
    </div>
  );
}

export default ButtonArray;
