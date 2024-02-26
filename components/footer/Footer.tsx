import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full flex sm:flex-row flex-col items-center justify-center mx-auto bg-black_primary p-20 mt-10 sm:gap-[250px]">
      <Image src={"/images/Logo1.png"} width={100} height={100} alt="logo" />
      <div className=" flex items-center justify-center flex-col gap-4">
        <div className="flex sm:flex-col flex-row items-center justify-end gap-4">
          <Link
            href={
              "https://api.whatsapp.com/message/JFKDOIFHHYVWB1?autoload=1&app_absent=0"
            }
            target="_blank"
          >
            <Image
              src={"/svgs/whatsapp.svg"}
              width={30}
              height={30}
              alt="Whatsapp"
            />
          </Link>
          <Link
            href={"https://www.instagram.com/strongymuscle/"}
            target="_blank"
          >
            <Image
              src={"/svgs/instagram.svg"}
              width={30}
              height={30}
              alt="Instagram"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
