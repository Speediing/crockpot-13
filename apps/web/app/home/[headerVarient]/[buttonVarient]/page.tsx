import Image from "next/image";
import { Button } from "ui";
import ButtonArray from "../../../ButtonArray";
import InfoHeader from "../../../InfoHeader";

export async function generateStaticParams() {
  return [
    {
      headerVarient: "true",
      buttonVarient: "true",
    },
    {
      headerVarient: "false",
      buttonVarient: "false",
    },
    {
      headerVarient: "true",
      buttonVarient: "false",
    },
    {
      headerVarient: "false",
      buttonVarient: "true",
    },
  ];
}
export default function Page({ params }: any) {
  let showHeader = params.headerVarient === "true";
  let buttonReverse = params.buttonVarient === "true";

  return (
    <div>
      <InfoHeader show={showHeader} />
      <div className="relative bg-black max-w-full  h-[740px]">
        <div className="flex flex-col justify-center h-[740px] bg-[center_right_left_-300px] bg-blend-darken opacity-50 bg-cover bg-no-repeat bg-[url(https://www.intuit.com/oidam/intuit/ic/en_us/images/h-z/homepage-hero-3-mobile-devices-banner-icom-desktop-1920x650.jpg)]"></div>
        <div className="absolute text-white opacity-100 left-28 top-[15%] w-96">
          <h1 className="text-5xl font-extrabold leading-snug">
            Innovating to power financial confidence for millions
          </h1>
          <h2 className="pt-4 text-2xl font-thin leading-normal">
            Intuit is the leading platform for managing personal, business and
            tax finances.
          </h2>
          <ButtonArray reversed={buttonReverse} />
        </div>
      </div>
    </div>
  );
}
