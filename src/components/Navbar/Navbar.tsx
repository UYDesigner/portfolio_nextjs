import React from 'react';
import { navLinks } from '@/utilities/commonData';
import { MdOutlineWbSunny } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="w-[380px] mx-auto mt-10 p-1 rounded-3xl shadow-lg border-2 border-[#151515] backdrop-blur-3xl 
  bg-gradient-to-r from-black via-gray-900 to-black flex justify-center items-center  transition-all duration-500 hover:max-w-[420px] hover:gap-2 hover:shadow-xl ">

      <ul className="flex justify-between items-center hover:gap-2">
        {navLinks.map((item, index) => (
          
          <li
            key={index}
            className="flex items-center justify-center text-white text-xl p-3 hover: rounded-full 
             hover:bg-white/20 transition-all duration-400 ease-in-out cursor-pointer hover:text-2xl hover:mx-3"
          >
            {item.icon}
          </li>
        ))}
      </ul>
      <div className='btn flex items-center'>
        <button>
          <MdOutlineWbSunny className='flex  items-center justify-center text-white text-5xl p-3 rounded-full hover:bg-white/20 transition-all duration-200 ease-in-out cursor-pointer hover:mx-3' />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
