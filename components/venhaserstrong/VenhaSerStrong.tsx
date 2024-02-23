import DefaultButton from "../default/buttons/DefaultButton";

const VenhaSerStrong = () => {
  return (
    <section className="w-full mx-auto flex flex-col items-center justify-center">
      <div className="w-full flex items-center justify-center mx-auto p-10">
        <h3 className="font-bold font-lexendtera sm:text-titles text-smtitles text-black_primary">
          TÁ ESPERANDO O QUE? VEM PRA{" "}
          <span className="text-red_primary">STRONG</span>
        </h3>
      </div>
      <DefaultButton text="QUERO SER STRONG" />
    </section>
  );
};

export default VenhaSerStrong;
