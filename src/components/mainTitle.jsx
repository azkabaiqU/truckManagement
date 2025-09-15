import React from 'react';


function MainTitle({ selectedMenu, titleTextMap}) {
 

  return (
    <section className="sticky top-0 shadow-sm shadow-[#00000021]/10 sm:px-10 px-3 sm:py-10 py-3 flex   items-end bg-[#F8F8F8] z-40">
      <h1 className="md:text-3xl sm:text-2xl text-xl text-black flex sm:flex-row flex-col sm:items-end items-start font-medium">
        <span className='whitespace-normal'>Truck & Container Management</span> 
        <span className="flex flex-row items-center sm:justify-center justify-normal text-xl font-normal text-[#6E6E6E]">
          <span className="pl-4 pr-2 text-base sm:block hidden">/</span>
          <span className='md:text-base text-sm'>{titleTextMap[selectedMenu]}</span>
        </span>
      </h1>
    </section>
  );
}

export default MainTitle;
