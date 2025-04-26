'use client';

import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';

export default function MomentOfBeauty() {
    return (
        <div className="w-full px-4 py-8">
            <div className="text-center mb-6">
                <h2 className="text-black text-4xl">Beauty of moment</h2>
                <p className="text-black">Our satisfied customer</p>
            </div>

            <Swiper
                modules={[FreeMode, Autoplay]}
                freeMode={true}
                spaceBetween={16}
                slidesPerView={5}
                pagination={{ clickable: true }}
                autoplay={{ delay: 0 }}
                speed={3000}
                loop
            >
                {/* Slide 1 */}
                <SwiperSlide className="w-[346px] h-[600px]">
                    <Image className="w-full h-[600px] object-cover rounded-md" src='/image/momentofbeauty/MH-gallery-5.jpg' width={346} height={600} alt="gallery" />
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide className="w-[346px] h-[600px] ">
                    <div className="flex flex-col gap-3">
                        <Image className="w-full h-[300px] object-cover rounded-md" src='/image/momentofbeauty/MH-gallery-6.jpg' width={346} height={295} alt="gallery" />
                        <Image className="w-full h-[300px] object-cover rounded-md" src='/image/momentofbeauty/MH-gallery-7.jpg' width={346} height={295} alt="gallery" />
                    </div>
                </SwiperSlide>
       
                {/* Slide 3 */}
                <SwiperSlide className="w-[346px] h-[600px] ">
                    <div className="flex flex-col gap-3">
                        <Image className="w-full h-[300px] object-cover rounded-md" src='/image/momentofbeauty/MH-gallery-8.jpg' width={346} height={295} alt="gallery" />
                        <Image className="w-full h-[300px] object-cover rounded-md" src='/image/momentofbeauty/MH-gallery-9.jpg' width={346} height={295} alt="gallery" />
                    </div>
                </SwiperSlide>

                {/* Slide 4 */}
                <SwiperSlide className="w-[346px] h-[600px] ">
                    <div className="flex flex-col gap-3">
                        <Image className="w-full h-[300px] object-cover rounded-md" src='/image/momentofbeauty/MH-gallery-2.jpg' width={346} height={295} alt="gallery" />
                        <div className="flex gap-2">
                            <Image className="w-[50%] h-[300px] object-cover rounded-md" src='/image/momentofbeauty/MH-gallery-3.jpg' width={173} height={295} alt="gallery" />
                            <Image className="w-[50%] h-[300px] object-cover rounded-md" src='/image/momentofbeauty/MH-gallery-4.jpg' width={173} height={295} alt="gallery" />
                        </div>

                    </div>
                </SwiperSlide>

                {/* Slide 5 */}
                <SwiperSlide className="w-[346px] h-[600px]">
                    <Image className="w-full h-[600px] object-cover rounded-md" src='/image/momentofbeauty/MH-gallery-1.jpg' width={346} height={600} alt="gallery" />
                </SwiperSlide>

                {/* Slide 6 */}
                <SwiperSlide className="w-[346px] h-[600px] ">
                    <div className="flex flex-col gap-3">
                        <Image className="w-full h-[300px] object-cover rounded-md" src='/image/momentofbeauty/gallery-500-img-1.jpg' width={346} height={295} alt="gallery" />
                        <Image className="w-full h-[300px] object-cover rounded-md" src='/image/momentofbeauty/gallery-500-img-2.jpg' width={346} height={295} alt="gallery" />
                    </div>
                </SwiperSlide>

                {/* Slide 7 */}
                <SwiperSlide className="w-[346px] h-[600px]">
                    <Image className="w-full h-[600px] object-cover rounded-md" src='/image/momentofbeauty/MH-gallery-10.jpg' width={346} height={600} alt="gallery" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
