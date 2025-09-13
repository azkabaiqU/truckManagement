// src/components/Navbar.js
import React from 'react';

function MainTitle({ selectedMenu, titleTextMap }) {


  return (
    <section className="shadow-sm shadow-[#00000021]/10 px-10 pb-10 pt-10  w-full flex items-end bg-[#F8F8F8] z-40">
        <h1 className='text-3xl   text-black flex items-end font-medium'>Truck & Container Management <span
                className='flex items-center justify-center text-xl font-normal text-[#6E6E6E]'>
                <span className='pl-4 pr-2 text-base'>/</span>
                <span>{titleTextMap[selectedMenu]}</span>
            </span> </h1>
    </section>
  );
}

export default MainTitle;
