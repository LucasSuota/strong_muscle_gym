import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full mx-auto bg-black_primary mt-20 p-20">
      <Image src={"/images/Logo1.png"} width={100} height={100} alt="logo" />
      <div>
        <p className="font-lexend text-white ">
          Rua Virgínia Dalabona, 100, Curitiba
        </p>
      </div>
    </div>
  );
};

export default Footer;
