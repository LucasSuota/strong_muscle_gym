import Image from "next/image";
import DefaultButton from "../default/buttons/DefaultButton";

const Header = () => {
  return (
    <header className="bg-white z-40 font-lexend w-full mx-auto flex items-center justify-between px-10 py-1">
      <div className="relative sm:w-[75px] w-[60px] sm:h-[75px] h-[60px]">
        <Image src={"/images/Logo1.png"} fill alt="Logo" />
      </div>
      <DefaultButton text="Quero ser strong" />
    </header>
  );
};

export default Header;
