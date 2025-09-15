// src/components/Navbar.js
import React, { useEffect } from 'react';

function DeleteTaskPop({ onClose }) {
useEffect(() => {
// Kunci scroll halaman utama saat popup muncul
document.body.style.overflow = 'hidden';

return () => {
// Balikin scroll normal pas popup ditutup
document.body.style.overflow = 'auto';
};
}, []);
return (
<section className='sm:px-10 px-3 fixed top-0 right-0 flex justify-center items-center w-full h-full bg-black/40 z-50'>
    <div className='relative w-[550px] bg-white rounded-2xl px-10 pt-10 pb-36 flex flex-col items-center'>
        <h3 className='text-center sm:text-2xl text-xl font-semibold'>
            Are you sure want to <br />
            delete this task?
        </h3>
        {/* button */}
        <div className='absolute bottom-7 flex w-full px-7 justify-between items-center'>
            {/* Go back btn */}
            <button onClick={onClose} className='md:py-4 py-3 md:px-8 px-6 rounded-xl bg-[#F8F8F8] hover:bg-transparent duration-200'>
                <span>Go back</span>
            </button>
            {/* yes btn */}
            <button
                className='md:py-4 py-3 md:px-8 px-6 rounded-xl bg-black text-white hover:bg-transparent hover:text-black duration-100'>
                <span>I'm sure!</span>
            </button>
        </div>
    </div>
</section>
);
}

export default DeleteTaskPop;