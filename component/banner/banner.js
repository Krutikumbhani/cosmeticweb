'use client';

import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import { MdKeyboardArrowRight } from 'react-icons/md';

export default function Banner() {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const fetchSlides = async () => {
      const res = await fetch('/api/slider');
      const data = await res.json();
      console.log("Slider data:", data);
      setSlides(data);
    };
    fetchSlides();
  }, []);

  // if (!fetchSlides)  
  return (
    <div className="w-full h-[600px] relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 0 }}
        speed={3000}
        loop
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide._id}>
            <div className="relative w-full h-[600px]">
              <Image
                src={slide.image.startsWith('/') ? slide.image : `/${slide.image}`}
                alt={slide.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-1/2 left-50 transform -translate-y-1/2 text-black max-w-[550px] z-10 flex flex-col gap-3">
                <h2 className="text-xl font-bold ">{slide.title}</h2>
                <div
                  className="text-7xl"
                >{slide.subtitle} <span className='font-medium text-[#f05970]'>{slide.subtitlebold}</span></div>
                <p className="">{slide.description}</p>
                <Link
                  href='/shop'
                  className="flex items-center border-[2px]   gap-2 border-[#f05970] px-6 py-2 hover:bg-white hover:text-black transition w-[175px] text-center uppercase tracking-[1px]"
                >
                  Shop Now <MdKeyboardArrowRight />
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
