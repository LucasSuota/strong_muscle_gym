import Image from "next/image";
import React from "react";
import Camera from "./components/Camera";

const SecondHero = () => {
  return (
    <section className="w-full mt-10">
      <div className="px-10 pt-10 bg-red_primary flex flex-row justify-between gap-10">
        <p className="font-bold font-lexendtera text-subtitles text-white">
          BE F*UCKING STRONG
        </p>
        <div className="w-[40px] h-[40px] rounded-full bg-white" />
      </div>
      <Camera />
    </section>
  );
};

export default SecondHero;
