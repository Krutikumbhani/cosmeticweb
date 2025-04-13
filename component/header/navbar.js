'use client'
import { useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';

const menuItems = [
  { name: 'HOME', hasDropdown: true, dropdownItems: ['Home 1', 'Home 2'] },
  { name: 'SHOP', hasDropdown: true, dropdownItems: ['Men', 'Women', 'kids'] },
  { name: 'PRODUCT', hasDropdown: true, dropdownItems: ['T-Shirts', 'Shoes'] },
  { name: 'PAGES', hasDropdown: true, dropdownItems: ['About Us', 'Contact'] },
  { name: 'BLOG', hasDropdown: true, dropdownItems: ['Latest Posts', 'News'] },
];

export default function NavBar() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <nav className="bg-black text-white px-6">
      <ul className="flex gap-6 text-sm font-semibold uppercase relative">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="relative"
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <a
              href="#"
              className="flex items-center gap-1 hover:text-[#f05970] py-9"
            >
              {item.name}
              {item.hasDropdown && (
                <MdKeyboardArrowDown
                  className={`text-base transition-transform duration-300 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                />
              )}
            </a>

            {/* Dropdown */}
            <div
              className={`absolute top-full left-0 w-40 bg-white text-black rounded shadow z-50 overflow-hidden transition-all duration-300 ease-out ${
                activeIndex === index
                  ? 'opacity-100 translate-y-0 visible'
                  : 'opacity-0 -translate-y-4 invisible'
              }`}
            >
              <ul>
                {item.dropdownItems.map((subItem, subIndex) => (
                  <li
                    key={subIndex}
                    className="px-4 py-2 hover:text-[#f05970] cursor-pointer text-sm"
                  >
                    {subItem}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
}
