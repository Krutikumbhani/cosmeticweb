"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

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
                    <div className="text-black text-center">
                        Top Brand
                    </div>
                    <div className="flex flex-wrap w-full gap-2">
                        {brand?.map((item, index) => (
                            <div key={index}>
                                <div className="w-[200px]">
                                    <Image src={item.image} className="w-[100%]" height={100} width={100} alt="Brand" />
                                </div>
                                <div>
                                    <p>{item.brandName}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div >
    );
}
