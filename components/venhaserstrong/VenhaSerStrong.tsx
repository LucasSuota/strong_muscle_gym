import Link from "next/link";
import DefaultButton from "../default/buttons/DefaultButton";
import Image from "next/image";

const VenhaSerStrong = () => {
  return (
    <section className="w-full mx-auto flex flex-col items-center justify-center">
      <div className="w-full flex ite ms-center justify-center mx-auto p-10 mt-10">
        <h3 className="font-bold font-lexendtera sm:text-titles text-smtitles text-black_primary">
          TÁ ESPERANDO O QUE? VEM PRA{" "}
          <span className="text-red_primary">STRONG</span>
        </h3>
      </div>
      <div className="flex flex-row items-center justify-center gap-10 mb-10">
        <Link
          href={
            "https://api.whatsapp.com/message/JFKDOIFHHYVWB1?autoload=1&app_absent=0"
          }
          target="_blank"
        >
          <Image
            src={"/svgs/whatsapp.svg"}
            width={100}
            height={100}
            alt="Whatsapp"
          />
        </Link>
        <Link href={"https://www.instagram.com/strongymuscle/"} target="_blank">
          <Image
            src={"/svgs/instagram.svg"}
            width={100}
            height={100}
            alt="Instagram"
          />
        </Link>
      </div>
      <DefaultButton text="QUERO SER STRONG" />
      <div className="w-full mt-20 ">
        <p className="font-lexend text-subtitles text-red_primary font-bold text-center">
          Rua Virgínia Dalabona, 100, Curitiba
        </p>
        <iframe
          className="w-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.267062407894!2d-49.35525122385763!3d-25.429333532866824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce1f12169de73%3A0x8d50cb60d3b853eb!2sStrong%20Muscle%20Gym!5e0!3m2!1spt-BR!2sbr!4v1708706234570!5m2!1spt-BR!2sbr"
          height={450}
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default VenhaSerStrong;
