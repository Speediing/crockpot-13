import Image from "next/image";
import { Button } from "ui";
import ButtonArray from "./ButtonArray";
import InfoHeader from "./InfoHeader";
import left from "./leftimg.png";
import right from "./rightimg.png";

const images = [
  "https://directv.com/dtvassets/sales/directv/upper_funnel/stream/explore_stream_home/hero-carousel/hero-caro-dsk-fox-legomasters-2.jpg?noretina=true",
  "https://www.directv.com/dtvassets/sales/directv/upper_funnel/stream/explore_stream_home/hero-carousel/hero-caro-dsk-abc-livekellyandryan-2.jpg",
  "https://www.directv.com/dtvassets/sales/directv/upper_funnel/agnostic/hero-carousel/1304550-dtv-hero-caro_walkingdead.jpg",
  "https://www.directv.com/dtvassets/sales/directv/upper_funnel/stream/holiday_22/heroes/1378605-dtv-hero-caro_Merry_Swissmas.jpg",
  "https://www.directv.com/dtvassets/sales/directv/upper_funnel/stream/explore_stream_home/hero-carousel/hero-caro-dsk-lifetime-marriedatfirstsight-2.jpg",
  "https://www.directv.com/dtvassets/sales/directv/upper_funnel/agnostic/hero-carousel/1304550-dtv-hero-caro_walkingdead.jpg",
  "https://www.directv.com/dtvassets/sales/directv/upper_funnel/stream/holiday_22/heroes/1378605-dtv-hero-caro_Merry_Swissmas.jpg",
];
export const runtime = "experimental-edge";
export const revalidate = 0;
export default function Page() {
  return (
    <div>
      {/* @ts-expect-error Server Component */}
      <InfoHeader />
      <div className="relative bg-black max-w-full  h-[740px]">
        <div className="flex  flex-col justify-center h-[740px] bg-[center_right_left_-300px] bg-blend-darken opacity-50 bg-cover bg-no-repeat bg-[url(https://www.intuit.com/oidam/intuit/ic/en_us/images/h-z/homepage-hero-3-mobile-devices-banner-icom-desktop-1920x650.jpg)]"></div>
        <div className="absolute text-white opacity-100 left-28 top-[15%] w-96">
          <h1 className="text-5xl font-extrabold leading-snug">
            Innovating to power financial confidence for millions
          </h1>
          <h2 className="pt-4 text-2xl font-thin leading-normal">
            Intuit is the leading platform for managing personal, business and
            tax finances.
          </h2>
          {/* @ts-expect-error Server Component */}
          <ButtonArray />
        </div>
      </div>
    </div>
  );
}
