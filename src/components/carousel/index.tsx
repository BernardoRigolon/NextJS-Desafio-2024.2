'use client'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import Image from 'next/image';

export default () => {
  return (
    <div className="hidden lg:block">
    <Swiper
    spaceBetween={0}
      slidesPerView={4.5}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
    <Image
    src = {'/camisajapao.png'}
    alt = "Camisa Feminina II Japão 2022"
    width={900}
    height={900}
    className="w-[300px] h-[300px]"
    />
      </SwiperSlide>
      <SwiperSlide>
    <Image
    src = {'/camisajapao.png'}
    alt = "Camisa Feminina II Japão 2022"
    width={900}
    height={900}
    className="w-[300px] h-[300px]"
    />
      </SwiperSlide>
      <SwiperSlide>
    <Image
    src = {'/camisajapao.png'}
    alt = "Camisa Feminina II Japão 2022"
    width={900}
    height={900}
    className="w-[300px] h-[300px]"
    />
      </SwiperSlide>
      <SwiperSlide>
    <Image
    src = {'/camisajapao.png'}
    alt = "Camisa Feminina II Japão 2022"
    width={900}
    height={900}
    className="w-[300px] h-[300px]"
    />
      </SwiperSlide>
      <SwiperSlide>
    <Image
    src = {'/camisajapao.png'}
    alt = "Camisa Feminina II Japão 2022"
    width={900}
    height={900}
    className="w-[300px] h-[300px]"
    />
      </SwiperSlide>
      <SwiperSlide>
    <Image
    src = {'/camisajapao.png'}
    alt = "Camisa Feminina II Japão 2022"
    width={900}
    height={900}
    className="w-[300px] h-[300px]"
    />
      </SwiperSlide>
      <SwiperSlide>
    <Image
    src = {'/camisajapao.png'}
    alt = "Camisa Feminina II Japão 2022"
    width={900}
    height={900}
    className="w-[300px] h-[300px]"
    />
      </SwiperSlide>

    </Swiper>
    </div>
  );
};