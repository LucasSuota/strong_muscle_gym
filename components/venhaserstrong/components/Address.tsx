import React from "react";

const Address = () => {
  return (
    <div className="w-full mt-10">
      <p className="font-lexend sm:text-subtitles text-smsubtitles text-black_primary font-bold text-center mb-10">
        Rua Virgínia Dalabona, 100, Curitiba
      </p>
      <iframe
        className="sm:w-4/5 w-[90%] mx-auto"
        style={{
          boxShadow: "-10px -10px 0px 0px rgb(203, 17, 11)",
        }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.267062407894!2d-49.35525122385763!3d-25.429333532866824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce1f12169de73%3A0x8d50cb60d3b853eb!2sStrong%20Muscle%20Gym!5e0!3m2!1spt-BR!2sbr!4v1708706234570!5m2!1spt-BR!2sbr"
        height={400}
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Address;
