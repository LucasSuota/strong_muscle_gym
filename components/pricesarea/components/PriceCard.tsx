import React from "react";

const PriceCard = ({
  title,
  price,
  best,
  installments,
  off,
}: PriceCardType) => {
  return (
    <div className="w-full flex items-center sm:flex-col flex-row mx-auto">
      <div className="sm:w-4/5 w-2/4 sm:h-[150px] h-[150px] flex flex-col items-center justify-center bg-red_primary ">
        <p className="font-lexendtera text-white sm:text-subtitles text-p font-bold uppercase">
          {title}
        </p>
        {best && (
          <p className="text-black_primary font-lexendtera sm:text-p text-smp font-bold">
            MELHOR OPÇÃO
          </p>
        )}
      </div>
      <div className="sm:w-4/5 w-2/4 sm:h-[350px] h-[150px] bg-black_primary flex flex-col items-center justify-center hover:border-8 hover:border-red_primary transition-all">
        <p className="font-lexendtera text-white sm:text-subtitles text-smsubtitles uppercase font-bold">
          R${price}
        </p>
        {installments && (
          <p className="font-lexendtera text-white sm:text-p text-smp font-bold">
            x{installments} MESES
          </p>
        )}
        {off && (
          <p className="font-lexendTera text-red_primary sm:text-p text-smp font-bold mt-4">
            {off}% off
          </p>
        )}
      </div>
    </div>
  );
};

export default PriceCard;
