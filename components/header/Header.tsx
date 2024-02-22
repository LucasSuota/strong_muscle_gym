import Image from "next/image";
import DefaultButton from "../default/buttons/DefaultButton";

const Header = () => {
  return (
    <header className="font-lexend w-full mx-auto flex items-center justify-between px-10 py-4">
      <div className="relative sm:w-[85px] w-[60px] sm:h-[85px] h-[60px]">
        <Image src={"/images/Logo1.png"} fill alt="Logo" />
      </div>
      <DefaultButton text="Quero ser strong" />
    </header>
  );
};

export default Header;
