import Image from "next/image";

const HeroStrongLogo = () => {
  return (
    <div className="relative sm:w-[230px] w-[120px] sm:h-[230px] h-[120px]">
      <Image
        className="rounded-full"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.8))",
        }}
        src={"/images/Logo2.png"}
        fill
        alt="Logo"
      />
    </div>
  );
};

export default HeroStrongLogo;
