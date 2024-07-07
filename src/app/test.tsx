"use client";

import Image from "next/image";
import {
  Parallax,
  ParallaxBanner,
  ParallaxBannerLayer,
} from "react-scroll-parallax";
import Img_3 from "../app/resources/3.webp";
import Img_1 from "../app/resources/1.webp";
export function Test() {
  return (
    <>
      <div className="sm:hidden">
        <Image src={Img_1} alt="Dips Agency" />
      </div>
      <div className="hidden sm:flex">
        <ParallaxBanner
          layers={[
            {
              image: "/1.webp",
              speed: -50,
            },
          ]}
          className="aspect-[2/1] flex"
        />
      </div>
    </>
  );
}
export function Img_3_parallex() {
  return (
    <>
      <div className="hidden sm:flex">
        <ParallaxBanner
          layers={[
            {
              image: "/3.webp",
              speed: 50,
            },
          ]}
          className="aspect-[8/5] h-[50vh] w-[90vw] object-cover"
          // className="aspect-[8/5] h-[450px] w-[100px]"
        ></ParallaxBanner>
      </div>
    </>
  );
}
