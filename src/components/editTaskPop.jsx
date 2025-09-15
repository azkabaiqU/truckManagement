// src/components/Navbar.js
import React, { useEffect } from 'react';

function CreateNewTaskPop({ onClose }) {
useEffect(() => {
// Kunci scroll halaman utama saat popup muncul
document.body.style.overflow = 'hidden';

return () => {
// Balikin scroll normal pas popup ditutup
document.body.style.overflow = 'auto';
};
}, []);
return (
<section className=' fixed top-0 left-0 w-full h-full bg-black/40 z-50 flex justify-center items-center'>
  <div className="sm:mx-10 mx-0 w-full max-w-5xl bg-white sm:rounded-2xl rounded-none p-8 overflow-y-auto sm:h-[710px] h-screen">
    <h2 className="text-2xl font-medium mb-6 text-start">Edit Task Information</h2>
    <form className=''>
      <div className="flex md:flex-row flex-col gap-10">
        {/* Driver Section */}
        <div className='md:w-1/3 w-full'>
          <h3 className="font-medium text-xl mb-4">Driver</h3>
          <label className="block text-sm text-[#636363]" htmlFor="name">Name</label>
          <input type="text" id="name"
            className="mt-3 p-2 w-full border border-[#DFE1E2] rounded-md placeholder-[#000000]"
            placeholder="Asep susianto" />

          <label className="block text-sm text-[#636363] mt-4" htmlFor="licenseNo">Driving license no</label>
          <input type="text" id="licenseNo"
            className="mt-3 p-2 w-full border border-[#DFE1E2] rounded-md placeholder-[#000000]"
            placeholder="23DW234J" />

          <label className="block text-sm text-[#636363] mt-4" htmlFor="licenseType">License type</label>
          <select id="licenseType" className="mt-3 p-2 w-full border border-[#DFE1E2] rounded-md placeholder-[#000000]">
            <option>Class D</option>
            <option>Other</option>
          </select>

          <label className="block text-sm text-[#636363] mt-4" htmlFor="expiryDate">License expiry date</label>
          <input type="date" id="expiryDate"
            className="mt-3 p-2 w-full border border-[#DFE1E2] rounded-md placeholder-[#000000]" />

          <label className="block text-sm text-[#636363] mt-4">Availability</label>
          <div className="flex items-center mt-3">
            <input type="radio" id="full-time" name="availability" className="mr-2" />
            <label htmlFor="full-time" className="text-sm">Full time</label>
          </div>
          <div className="flex items-center mt-2">
            <input type="radio" id="night-time" name="availability" className="mr-2" />
            <label htmlFor="night-time" className="text-sm">Night time</label>
          </div>
        </div>

        {/* Truck Section */}
        <div className='md:w-1/3 w-full'>
          <h3 className="font-medium text-xl mb-4">Truck</h3>
          <label className="block text-sm text-[#636363]" htmlFor="truckReg">Reg</label>
          <input type="text" id="truckReg"
            className="mt-3 p-2 w-full border border-[#DFE1E2] rounded-md placeholder-[#000000]"
            placeholder="HB 234 " />

          <label className="block text-sm text-[#636363] mt-4" htmlFor="truckModel">Model</label>
          <input type="text" id="truckModel"
            className="mt-3 p-2 w-full border border-[#DFE1E2] rounded-md placeholder-[#000000]"
            placeholder="Hino 500 Series FM 260" />

          <label className="block text-sm text-[#636363] mt-4" htmlFor="truckYear">Year</label>
          <input type="text" id="truckYear"
            className="mt-3 p-2 w-full border border-[#DFE1E2] rounded-md placeholder-[#000000]" placeholder="2016" />

          <label className="block text-sm text-[#636363] mt-4" htmlFor="truckType">Type</label>
          <select id="truckType" className="mt-3 p-2 w-full border border-[#DFE1E2] rounded-md placeholder-[#000000]">
            <option>Box Truck</option>
            <option>Flatbed Truck</option>
            <option>Trailer Truck</option>
            <option>Reefer Truck</option>
            <option>Tanker Truck</option>
            <option>Dump Truck</option>
            <option>Curtain Side Truck</option>
            <option>Car Carrier</option>
            <option>Other</option>
          </select>

          <label className="block text-sm text-[#636363] mt-4" htmlFor="truckRO">RO</label>
          <input type="text" id="truckRO"
            className="mt-3 p-2 w-full border border-[#DFE1E2] rounded-md placeholder-[#000000]"
            placeholder="RO-2025-001" />
        </div>

        {/* Container Section */}
        <div className=' md:w-1/3 w-full'>
          <h3 className="font-medium text-xl mb-4">Container</h3>
          <div className='flex md:flex-col flex-row items-end space-x-2 '>

            <div className='md:w-full w-1/2'>
              <label className="block text-sm text-[#636363]" htmlFor="containerNumber">Container number</label>
              <input type="text" id="containerNumber"
                className="mt-3 p-2 w-full border border-[#DFE1E2] rounded-md placeholder-[#000000]"
                placeholder="XSDR45" />
            </div>

            <div className='md:w-full w-1/2'>
              <label className="block text-sm text-[#636363] md:mt-4 mt-0" htmlFor="containerSize">Size</label>
              <select id="containerSize"
                className="mt-3 p-2 w-full border border-[#DFE1E2] rounded-md placeholder-[#000000]">
                <option>20 ft (Standard)</option>
                <option>40 ft (Standard)</option>
                <option>40 ft High Cube</option>
                <option>45 ft High Cube</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          <div className='flex md:flex-col flex-row items-end space-x-2 '>
            <div className='md:w-full w-1/2'>
              <label className="block text-sm text-[#636363] mt-4" htmlFor="containerYear">Year</label>
              <input type="text" id="containerYear"
                className="mt-3 p-2 w-full border border-[#DFE1E2] rounded-md placeholder-[#000000]"
                placeholder="2016" />

            </div>
            <div className='md:w-full w-1/2'>
              <label className="block text-sm text-[#636363] mt-4" htmlFor="containerType">Type</label>
              <select id="containerType"
                className="mt-3 p-2 w-full border border-[#DFE1E2] rounded-md placeholder-[#000000]">
                <option>Dry Storage Container</option>
                <option>Reefer Container</option>
                <option>Open Top Container</option>
                <option>Flat Rack Container</option>
                <option>Tank Container</option>
                <option>Open Side Container</option>
                <option>Double Door Container</option>
                <option>High Cube Container</option>
                <option>Ventilated Container</option>
                <option>Insulated Container</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          <label className="block text-sm text-[#636363] mt-4" htmlFor="containerRO">RO</label>
          <input type="text" id="containerRO"
            className="mt-3 p-2 w-full border border-[#DFE1E2] rounded-md placeholder-[#000000]" placeholder="2016" />
        </div>
      </div>

      <div className="flex justify-between mt-10">
        <button onClick={onClose} type="button"
          className="md:py-4 py-3 md:px-8 px-6 rounded-xl bg-[#F8F8F8] hover:bg-transparent duration-200 md:text-base text-sm">Go back</button>

        <button type="submit"
          className="md:py-4 py-3 md:px-8 px-6 rounded-xl bg-black text-white hover:bg-transparent hover:text-black duration-100 md:text-base text-sm">Save
          edit</button>
      </div>
    </form>
  </div>
</section>
);
}

export default CreateNewTaskPop;