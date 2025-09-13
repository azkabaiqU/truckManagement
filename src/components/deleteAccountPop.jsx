// src/components/Navbar.js
import React, { useEffect } from 'react';

function DeleteAccountPop({ onClose }) {
      useEffect(() => {
        // Kunci scroll halaman utama saat popup muncul
        document.body.style.overflow = 'hidden';
    
        return () => {
          // Balikin scroll normal pas popup ditutup
          document.body.style.overflow = 'auto';
        };
      }, []);
  return (
      <section className='fixed top-0 right-0 flex justify-center items-center w-full h-full bg-black/40 z-50'>
        <div className='relative w-[550px] bg-white rounded-2xl px-10 pt-10 pb-36 flex flex-col items-center'>
          <h3 className='text-center text-2xl font-semibold'>
            Are you sure want to <br />
            delete your account?
          </h3>
          <div className='mt-[24px] w-[387px]'>
            <p className='text-[#636363]'>Write “ yes i want to delete my account” for delete your account</p>
            <input type="text" placeholder="are you sure?..."
              className="mt-3 w-full px-5 py-4 border rounded-xl" />
          </div>
          {/* button */}
          <div className='absolute bottom-7 flex w-full px-7 justify-between items-center'>
            {/* Go back btn */}
            <button onClick={onClose} className='py-4 px-8 rounded-xl bg-[#F8F8F8] hover:bg-transparent duration-200'>
              <span>Go back</span>
            </button>
            {/* yes btn */}
            <button className='py-4 px-8 rounded-xl bg-black text-white hover:bg-transparent hover:text-black duration-100'>
              <span>I'm sure!</span>
            </button>
          </div>

        </div>
      </section>
  );
}

export default DeleteAccountPop;
