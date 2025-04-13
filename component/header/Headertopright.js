"use client"
import Link from 'next/link';
import { FaPhoneAlt, FaHeart, FaUser } from 'react-icons/fa';

export default function HeaderTopRight(){
return(
  <>
  <div className="flex items-center gap-6">
            {/* Phone */}
            <div className="flex items-center gap-1">
              <FaPhoneAlt className="text-xs" />
              <Link href='to:+98 765 432'>CALL: +98 765 432</Link>
            </div>

            {/* Wishlist */}
            <div className="flex items-center gap-1 cursor-pointer">
              <FaHeart className="text-xs" />
              <span>MY WISHLIST</span>
              <span className="text-red-500">(0)</span>
            </div>

            {/* Links */}
            <Link href="#" className="hover:text-white">
              ABOUT US
            </Link>
            <Link href="#" className="hover:text-white">
              CONTACT US
            </Link>

            {/* Login */}
            <div className="flex items-center gap-1 cursor-pointer">
              <FaUser className="text-xs" />
              <Link href='/'>LOGIN</Link>
            </div>
          </div>
  </>
)
}