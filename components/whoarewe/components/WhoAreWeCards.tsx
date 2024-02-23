import Image from "next/image";

const WhoAreWeCards = () => {
  return (
    <section className="w-3/5 mx-auto flex sm:flex-row flex-col sm:text-subtitles sm:gap-0 gap-[100px] text-smp sm:mb-40 mb-20">
      <div className="sm:w-[35%] w-full h-[200px] sm:h-[400px] mx-auto">
        <div
          className="sm:px-10 mx-auto w-full h-full sm:w-full sm:h-full"
          style={{
            boxShadow: "-10px -10px 0px 0px #202020",
            backgroundImage: 'url("/images/card1.png")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        />
        <h3 className="sm:w-full font-lexend text-black_primary ">
          a{" "}
          <span className="font-bold text-red_primary">STRONG MUSCLE GYM</span>{" "}
          é 100% focada em treinos de musculação e powerlifting.
        </h3>
      </div>

      <div className="sm:w-[35%] w-full h-[200px] sm:h-[400px] mx-auto">
        <div
          className="sm:px-10 mx-auto w-full h-full sm:w-full sm:h-full"
          style={{
            boxShadow: "-10px -10px 0px 0px #cb110b",
            backgroundImage: 'url("/images/card2.png")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        />
        <h3 className="sm:w-full font-lexend text-black_primary">
          Nós vamos tranformalo em um{" "}
          <span className="font-bold text-red_primary">MONSTRO</span>.
        </h3>
      </div>
    </section>
  );
};

export default WhoAreWeCards;
