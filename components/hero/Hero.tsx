import Image from "next/image";
import React from "react";
import HeroMainText from "./components/HeroMainText";
import HeroStrongLogo from "./components/HeroStrongLogo";

const Hero = () => {
  return (
    <section
      className="w-full min-h-[580px] flex sm:flex-row flex-col items-center justify-center sm:gap-14 gap-6"
      style={{
        backgroundAttachment: "fixed",
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)),url('/images/herobg.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <HeroMainText />
      <HeroStrongLogo />
    </section>
  );
};

export default Hero;
