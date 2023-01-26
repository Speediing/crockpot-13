import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "experimental-edge",
};
const font = fetch(
  new URL("../../assets/Roboto-Regular.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

const roboBold = fetch(
  new URL("../../assets/Roboto-Bold.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export default async function OG() {
  const fontData = await font;
  const roboBoldData = await roboBold;
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Roboto",
          backgroundColor: "white",
        }}
      >
        <div tw="bg-[#FBFBFB] flex w-full h-full flex flex-col justify-center">
          <div tw="flex justify-center text-center flex-col w-full py-4 px-4 items-center justify-between p-8">
            <div tw="flex flex-row justify-between gap-24">
              <div tw="mt-22 flex">
                <svg
                  height={65}
                  viewBox="0 0 75 65"
                  fill="black"
                  style={{ margin: "0 0" }}
                >
                  <path d="M37.59.25l36.95 64H.64l36.95-64z"></path>
                </svg>
              </div>
              <div tw="flex flex-col justify-center h-full">
                <h2 tw="text-3xl font-thin mt-24 mx-12">+</h2>
              </div>
              <img
                tw="w-[70px] h-[70px] mt-22"
                src="https://proconnect.intuit.com/community/image/serverpage/image-id/1944i343FA2FDD6F1313B/image-size/large/is-moderation-mode/true?v=v2&px=999"
              />
            </div>
            <h2 tw="text-3xl pt-6 font-thin">Intuit</h2>
            <h2 style={{ fontFamily: "RobotoBold" }} tw=" text-6xl font-bold">
              Innovating to power financial confidence for millions
            </h2>
            <h2 tw="text-3xl font-thin">
              Your complete financial picture on a single platform
            </h2>
          </div>
          <div tw="flex flex-row justify-between mx-10 mb-[-150px]">
            <img
              tw="w-[50%] "
              src="https://images.ctfassets.net/6zivncwxby0i/4MX2yyavPOFCSWILrT3w1w/ba65591d7c402bd670bb7ff8e6f68a90/Tim_Couch_Claimed_Tax_Refund.png"
            />
            <img
              tw="w-[50%] "
              src="https://images.ctfassets.net/6zivncwxby0i/67LspmdgRRhgApDInMCtvq/c2045ce16686de643e53d20a7d408037/Kahrim_Tax_Expert_Cards.png"
            />
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Roboto",
          data: fontData,
          style: "normal",
        },
        {
          name: "RobotoBold",
          data: roboBoldData,
          style: "normal",
        },
      ],
    }
  );
}
