"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Brand() {
    const [brand, setBrand] = useState([]);

    useEffect(() => {
        const fetchBrand = async () => {
            try {
                const res = await fetch('/api/topbrand');
                const data = await res.json();
                setBrand(data);
            } catch (error) {
                console.error('Failed to fetch brands:', error);
            }
        };
        fetchBrand();
    }, []);

    return (
        <div>
            <div className="container mx-auto">
                <div className="flex flex-col gap-3">
                    <div className="text-center">
                        <h2 className="text-black text-center text-4xl">
                            Top Brand
                        </h2>
                        <p className="text-black">The World's Premium Brands In One Destination.</p>
                    </div>
                    <div className="flex flex-wrap w-full gap-2">
                        <Swiper
                            // modules={[Navigation, Autoplay]} // 👈 no Pagination module
                            spaceBetween={0}
                            slidesPerView={5}
                            // navigation // 👈 keep arrows
                            autoplay={{ delay: 0 }}
                            speed={5000}
                            loop>

                            {brand?.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className='text-center flex flex-col items-center justify-center gap-2'>
                                        <div className="w-[200px]">
                                            <Image src={item.image} className="w-[100%]" height={100} width={100} alt="Brand" />
                                        </div>
                                        <div>
                                            <p>{item.brandName}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div >
    );
}
