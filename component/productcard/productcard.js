'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function ProductCard() {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const bestproduct = async () => {
            try {
                const res = await fetch('/api/bestproduct');
                const data = await res.json();
                setProduct(data);
            } catch (err) {
                console.error('Failed to fetch best products:', err);
            } finally {
                setLoading(false);
            }
        };
        bestproduct();
    }, []);

    // if (loading) {
    //     return <div className="text-black text-2xl text-center">Loading...</div>;
    // }

    return (
        <div className="py-10">
            <div className="container mx-auto">
                <div className="mb-8 text-center">
                    <h1 className="text-4xl text-black">The Best Sellers</h1>
                    <p className="text-black">The World's Premium Brands In One Destination.</p>
                </div>
                {
                    loading ? (
                        <div className="text-black text-2xl text-center">loading</div>
                    ) : (
                        <div>
                            <Swiper
                                modules={[Navigation, Autoplay]} // 👈 no Pagination module
                                spaceBetween={20}
                                slidesPerView={4}
                                navigation // 👈 keep arrows
                                autoplay={{ delay: 3000 }}
                                loop
                            >
                                {product.map((item) => (
                                    <SwiperSlide key={item._id}>
                                        <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
                                            <Link href="/">
                                                <div className="relative w-full h-64">
                                                    <Image
                                                        src={item.image}
                                                        alt={item.title || 'product image'}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>
                                                <div className="p-4">
                                                    <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                                                    <p className="text-gray-500 text-sm mt-1">{item.description}</p>
                                                    <div className="mt-3 flex gap-2 items-center">
                                                        <span className="text-black font-bold text-xl">${item.price}</span>
                                                        {/* {item.originalprice && ( */}
                                                        <span className="text-red-600 font-bold text-md line-through">
                                                            ${item.originalprice}
                                                        </span>
                                                        {/* )} */} (
                                                        <span className="text-red-600 text-sm font-semibold">
                                                            ({item.discount}% OFF)
                                                        </span>
                                                    </div>
                                                    <button className="mt-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-800 text-sm w-full">
                                                        Add to Cart
                                                    </button>
                                                </div>
                                            </Link>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    )
                }


            </div>
        </div>
    );
}
