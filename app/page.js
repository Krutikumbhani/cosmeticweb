import Banner from '@/component/banner/banner';
import ProductCard from '@/component/productcard/productcard';
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-[80px]">
      <Banner />
      <ProductCard />
    </div>
  );
}
