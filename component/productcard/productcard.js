import Image from "next/image";
import Link from "next/link";

export default function ProductCard() {
    return (
        <>
            <div>
                <div className="container mx-auto">
                    <div className="mb-3">
                        <h1 className="text-4xl text-black flex justify-center">The Best Sellers</h1>
                        <p className="text-black flex justify-center">The World's Premium Brands In One Destination.</p>
                    </div>
                    <div>
                        <div className=''>
                            <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
                                <Link href='/'>
                                    <div className="relative w-full h-64">
                                        <Image
                                            src=''
                                            alt=''
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-lg font-semibold text-gray-800"></h3>
                                        <p className="text-gray-500 text-sm mt-1"></p>
                                        <div className="mt-3 flex justify-between items-center">
                                            <span className="text-black font-bold text-xl"></span>
                                            <button className="bg-black text-white px-4 py-1 rounded hover:bg-gray-800 text-sm">
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}