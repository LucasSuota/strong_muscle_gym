"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { ratingList } from "@/constants";

const SwiperRating = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 4000,
          disableOnInteraction: true,
        }}
        modules={[Autoplay]}
        className="sm:hidden sm:w-4/5 w-4/5 p-10 flex flex-col items-center justify-between"
      >
        {ratingList.map((rating, index) => (
          <SwiperSlide
            key={index}
            className="w-1/5 flex flex-col items-center justify-between p-10 bg-black_primary"
          >
            <div className="w-1/5 h-[5px] bg-red_primary mb-20 mt-10" />
            <p className="text-white font-lexend sm:text-subtitles text-smsubtitles">
              {rating.text}
            </p>
            <Image
              className="mt-10"
              src={"/svgs/stars.svg"}
              width={250}
              height={250}
              alt="5 estrelas"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SwiperRating;
