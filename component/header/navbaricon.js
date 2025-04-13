'use client'
import { FiSearch } from 'react-icons/fi';
import { HiOutlineShoppingCart } from 'react-icons/hi';

export default function NavBarIcon() {
  return (
    <div className="bg-black text-white px-6 py-4 flex items-center justify-end gap-6">
      {/* Search bar */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search in..."
          className="bg-transparent border-b border-gray-400 focus:outline-none text-base leading-1 tracking-[1px] text-white placeholder:text-gray-400 p-3 "
        />
        <FiSearch className="absolute right-0 top-1/2 -translate-y-1/2 text-white text-base cursor-pointer" />
      </div>

      {/* Cart Icon with badge */}
      <div className="relative cursor-pointer">
        <HiOutlineShoppingCart className="text-2xl" />
        <span className="absolute -top-2 -right-2 bg-[#f05970] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
          0
        </span>
      </div>
    </div>
  );
}
