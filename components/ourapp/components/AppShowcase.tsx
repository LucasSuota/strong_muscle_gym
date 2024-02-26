import Image from "next/image";
import React from "react";

const AppShowcase = () => {
  return (
    <article className="sm:w-2/4 w-4/5 mx-auto flex flex-row items-center justify-between gap-8">
      <div className="w-2/4 flex flex-col sm:gap-8 gap-4">
        <h3 className="font-lexend font-bold sm:text-titles text-black_primary leading-6">
          ACOMPANHE SEU TREINO DIRETO DO SEU CELULAR
        </h3>
        <h4 className="font-lexend font-bold sm:text-subtitles text-red_primary">
          BE F*CKING STRONG
        </h4>
        <div className="sm:flex hidden">
          <Image
            src={"/images/Logo1.png"}
            width={120}
            height={120}
            alt="logo"
          />
        </div>
        <div className="sm:hidden flex">
          <Image src={"/images/Logo1.png"} width={60} height={60} alt="logo" />
        </div>
      </div>
      <div className="w-2/4">
        <Image src={"/images/app.png"} width={1000} height={1000} alt="app" />
      </div>
    </article>
  );
};

export default AppShowcase;
