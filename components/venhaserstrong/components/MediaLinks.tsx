import DefaultButton from "@/components/default/buttons/DefaultButton";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MediaLinks = () => {
  return (
    <section className="w-full flex sm:flex-row flex-col items-center justify-center gap-10">
      <div className="flex flex-row items-center justify-center gap-10">
        <Link
          href={
            "https://api.whatsapp.com/message/JFKDOIFHHYVWB1?autoload=1&app_absent=0"
          }
          target="_blank"
        >
          <Image
            src={"/svgs/whatsapp.svg"}
            width={70}
            height={70}
            alt="Whatsapp"
          />
        </Link>
        <Link href={"https://www.instagram.com/strongymuscle/"} target="_blank">
          <Image
            src={"/svgs/instagram.svg"}
            width={70}
            height={70}
            alt="Instagram"
          />
        </Link>
      </div>
      <Link
        href={
          "https://api.whatsapp.com/message/JFKDOIFHHYVWB1?autoload=1&app_absent=0"
        }
      >
        <button
          className="bg-red_primary px-8 py-5 text-white font-lexend font-bold rounded-sm hover:bg-red-700 transition-[0.5s] active:bg-black_primary"
          type="button"
        >
          QUERO SER STRONG
        </button>
      </Link>
    </section>
  );
};

export default MediaLinks;
