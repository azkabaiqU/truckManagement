import React from 'react';
import containerImg from '../assets/imgs/container.png';
import dateImg from '../assets/imgs/date.png';


import truckImg from '../assets/imgs/truck-icon.png';

import DropDownButton from '../components/button/dropdownButton';

import Maps from './maps'; // Halaman Profile



export default function Dashboard() {
// const [open, setOpen] = useState(false);

// const [openId, setOpenId] = useState(null);

return (
<>
    <div className='px-7 pb-20 pt-6 flex gap-5 w-full   '>
        <div className='w-full'>

            {/* Dropdown */}
            <div className="flex sm:flex-row flex-col justify-between items-center w-full">
                <div className="overflow-hidden w-full">

                    <div
                        className="flex sm:flex-row flex-col items-center  sm:space-x-2 sm:space-y-0 space-y-2 sm:overflow-x-scroll overflow-x-hidden whitespace-nowrap p-2 rounded-xl">

                        <div
                            className="px-6 sm:h-[60px] h-[50px] space-x-2 rounded-2xl xl:w-60 sm:w-52 w-full flex items-center justify-center bg-white flex-shrink-0">
                            <img className="w-6" src={containerImg} alt="" />
                            <select className="w-full bg-transparent outline-none sm:text-base text-sm">
                                <option>All Container</option>
                                <option>Empty containers</option>
                                <option>Loaded containers</option>
                            </select>
                        </div>


                        <div
                            className="px-6 sm:h-[60px] h-[50px] space-x-2 rounded-2xl xl:w-60 sm:w-52 w-full flex items-center justify-center bg-white flex-shrink-0">
                            <img className="w-6" src={truckImg} alt="" />
                            <select className="w-full bg-transparent outline-none sm:text-base text-sm">
                                <option>All Truck</option>
                                <option>Online trucks</option>
                                <option>Offline trucks</option>
                            </select>
                        </div>


                        <div
                            className="px-6 sm:h-[60px] h-[50px] space-x-2 rounded-2xl xl:w-60 sm:w-52 w-full flex items-center justify-center bg-white flex-shrink-0">
                            <img className="w-6" src={dateImg} alt="" />
                            <select className="w-full bg-transparent outline-none sm:text-base text-sm">
                                <option>Date</option>
                                <option>20/04/25 to 21/05/25</option>
                                <option>21/04/25 to 22/05/25</option>
                            </select>
                        </div>
                    </div>
                </div>



                <button
                    className="sm:mt-0 mt-1 ml-4 px-6 sm:h-[60px] h-[50px] sm:w-auto w-full min-w-max flex-shrink-0 bg-black text-white sm:rounded-2xl rounded-lg flex items-center space-x-2">
                    <svg width="15" height="15" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M20.5612 0.438999C20.3726 0.250498 20.1371 0.115688 19.879 0.048456C19.621 -0.018776 19.3497 -0.0159996 19.093 0.0564992H19.079L1.08461 5.5165C0.792481 5.60069 0.53283 5.77166 0.340066 6.00676C0.147302 6.24185 0.0305249 6.52997 0.00521012 6.83294C-0.0201046 7.1359 0.047238 7.4394 0.198314 7.70323C0.34939 7.96705 0.577067 8.17874 0.851173 8.31025L8.81242 12.1877L12.6843 20.1443C12.8047 20.4013 12.9962 20.6185 13.2361 20.7701C13.476 20.9218 13.7542 21.0017 14.038 21.0002C14.0812 21.0002 14.1243 20.9984 14.1674 20.9946C14.4701 20.9701 14.7581 20.8536 14.9927 20.6607C15.2273 20.4678 15.3973 20.2078 15.4799 19.9156L20.9362 1.92119C20.9362 1.9165 20.9362 1.91181 20.9362 1.90712C21.0096 1.65115 21.0136 1.38024 20.9477 1.12223C20.8818 0.864215 20.7484 0.628396 20.5612 0.438999ZM14.0465 19.4862L14.0418 19.4993V19.4927L10.2862 11.7771L14.7862 7.27712C14.9209 7.13533 14.9949 6.94651 14.9924 6.75094C14.9899 6.55537 14.9111 6.36852 14.7728 6.23022C14.6345 6.09191 14.4476 6.01311 14.252 6.01061C14.0565 6.0081 13.8677 6.0821 13.7259 6.21681L9.22586 10.7168L1.50742 6.96119H1.50086H1.51399L19.4999 1.50025L14.0465 19.4862Z"
                            fill="white" />
                    </svg>
                    <span className="font-light">Submit</span>
                </button>
            </div>


            {/* maps */}
            <div className='relative w-full sm:h-[700px] h-[400px] bg-white rounded-2xl mt-5 overflow-hidden z-0'>
                <Maps />
            </div>

            {/* Table activity */}
            <section className=" w-full flex ">
                <div className="w-full h-auto mt-5 bg-white overflow-hidden rounded-2xl">

                    <div className='overflow-x-auto'>
                                            <table className="min-w-full table-auto  scrolling-touch">
                        <thead className="bg-black text-white text-xs">
                            <tr>
                                <th className="px-4 py-2 text-left font-normal">ROT #</th>
                                <th className="px-4 py-2 text-left font-normal">JOB #</th>
                                <th className="px-4 py-2 text-left font-normal">Customer</th>
                                <th className="px-4 py-2 text-left font-normal">Port Status</th>
                                <th className="px-4 py-2 text-left font-normal">Part timings</th>
                                <th className="px-4 py-2 text-left font-normal">Customer Status</th>
                                <th className="px-4 py-2 text-left font-normal">Customer timings</th>
                                <th className="px-4 py-2 text-left font-normal">Container #</th>
                                <th className="px-4 py-2 text-left font-normal">Truck #</th>
                                <th className="px-4 py-2 text-left font-normal">Driver</th>
                                <th className="px-4 py-2 text-left font-normal">Status</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-800 text-sm">
                            <tr>
                                <td className="px-4 py-5">12356</td>
                                <td className="px-4 py-5">12356</td>
                                <td className="px-4 py-5">ADBSNI Sdn Bhd</td>
                                <td className="px-4 py-5">kdaoodadaok dasdasdfe</td>
                                <td className="px-4 py-5">20 Nov 2025–21 Nov 2025</td>
                                <td className="px-4 py-5">Ready Pickup</td>
                                <td className="px-4 py-5">21 Nov 2025–22 Nov 2025</td>
                                <td className="px-4 py-5">292929929</td>
                                <td className="px-4 py-5">PLT234</td>
                                <td className="px-4 py-5">Fajri Banget</td>
                                <td className="px-4 py-5 bg-[#EBF0FD] text-[#1975D2] border-b-[2px] border-white">
                                    On way to Picks
                                </td>
                            </tr>
                            <tr>
                                <td className="px-4 py-5">12356</td>
                                <td className="px-4 py-5">12356</td>
                                <td className="px-4 py-5">ADBSNI Sdn Bhd</td>
                                <td className="px-4 py-5">kdaoodadaok dasdasdfe</td>
                                <td className="px-4 py-5">20 Nov 2025–21 Nov 2025</td>
                                <td className="px-4 py-5">Ready Pickup</td>
                                <td className="px-4 py-5">21 Nov 2025–22 Nov 2025</td>
                                <td className="px-4 py-5">292929929</td>
                                <td className="px-4 py-5">PLT234</td>
                                <td className="px-4 py-5">Fajri Banget</td>
                                <td className="px-4 py-5 bg-[#EBF0FD] text-[#1975D2] border-y-[2px] border-white">
                                    On way to Picks
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    </div>


                    <div className="pagination-container mt-10 m-5">
                        <nav>
                            <ul className="flex space-x-2 lg:justify-end justify-between">
                                <li>
                                    <button
                                        className="bg-[#F8F8F8] text-gray-700 w-10 h-10 flex justify-center items-center  rounded-full hover:bg-transparent">
                                        <svg width="6" height="9" viewBox="0 0 6 9" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M5.06201 1L1.7019 3.21716C0.460735 4.03614 0.515615 5.87504 1.80341 6.61855L5.06201 8.4999"
                                                stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>

                                    </button>
                                </li>
                                <div className='flex items-center text-sm px-4'>
                                    <p>1</p>
                                    <p>/</p>
                                    <p>1</p>
                                </div>
                                <li>
                                    <button
                                        className=" space-x-3 bg-[#F8F8F8] text-gray-700 px-5 h-10 flex justify-center items-center  rounded-full hover:bg-transparent">
                                        <p>Next</p>
                                        <div>
                                            <svg width="6" height="9" viewBox="0 0 6 9" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M1 1L4.36011 3.21716C5.60128 4.03614 5.5464 5.87504 4.25861 6.61855L1 8.4999"
                                                    stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </div>
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>

                </div>
            </section>
        </div>


    </div>
</>
);
}