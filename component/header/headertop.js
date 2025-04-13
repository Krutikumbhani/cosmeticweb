'use client';
import { useEffect, useRef, useState } from 'react';
import { MdKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md';
import HeaderTopRight from './Headertopright';

export default function HeaderTop() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const currencies = ['EUR', 'USD', 'GBP', 'JPY', 'ind'];

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <div>
        <div className="bg-black relative text-gray-300 text-sm py-2 px-4 flex justify-between items-center">
          {/* Left Side - Currency */}
          <div className="" ref={dropdownRef}>
            <div
              className="flex items-center gap-1 cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              <span>EUR</span>
              {open ? (
                <MdOutlineKeyboardArrowUp className="text-base" />
              ) : (
                <MdKeyboardArrowDown className="text-base" />
              )}
            </div>

            {open && (
              <ul className="absolute top-[110%] left-0 mt-1 w-24 bg-white text-black rounded shadow z-10">
                {currencies.map((currency) => (
                  <li
                    key={currency}
                    className="px-3 py-2 hover:bg-gray-200 cursor-pointer text-sm"
                    onClick={() => {
                      console.log(`Selected: ${currency}`);
                      setOpen(false);
                    }}
                  >
                    {currency}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Right Side */}
          <div>
            <HeaderTopRight />
          </div>
        </div>
        <div className='border border-white/500'>

        </div>
      </div>
    </>
  );
}
