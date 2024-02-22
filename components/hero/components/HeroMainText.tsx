import Image from "next/image";

const HeroMainText = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <h1 className="sm:text-[65px] text-[32px] font-bold text-white sm:leading-[70px] leading-[30px]">
        VENHA SER
      </h1>
      <h1 className="sm:flex hidden">
        <Image
          src={"/images/strong_text.png"}
          width={350}
          height={350}
          alt="Strong"
        />
      </h1>
      <h1 className="sm:hidden flex">
        <Image
          src={"/images/strong_text.png"}
          width={180}
          height={180}
          alt="Strong"
        />
      </h1>
    </div>
  );
};

export default HeroMainText;
