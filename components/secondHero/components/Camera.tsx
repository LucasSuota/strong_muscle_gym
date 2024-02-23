"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { swiperPhotos } from "@/constants";

const Camera = () => {
  return (
    <>
      <div className="hidden sm:flex flex-row items-center justify-center p-10 bg-red_primary">
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          modules={[Autoplay]}
        >
          {swiperPhotos.map((item, index) => (
            <SwiperSlide key={index}>
              <Image
                className="hover:border-2 hover:border-black_primary transition-all"
                src={item.photo}
                width={700}
                height={200}
                alt="People working out"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="sm:hidden flex flex-row items-center justify-center p-4 bg-red_primary">
        <Swiper
          rewind={true}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          modules={[Autoplay]}
        >
          {swiperPhotos.map((item, index) => (
            <SwiperSlide key={index}>
              <Image
                src={item.photo}
                width={800}
                height={200}
                alt="People working out"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Camera;
