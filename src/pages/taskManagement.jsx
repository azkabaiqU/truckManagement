// import { Container } from 'postcss';
import React from 'react';

export default function Task({ setShowCreateNewTaskPop, setShowEditTaskPop, setShowDeleteTaskPop }) {

return (
<>
        <section className='px-7 pb-7 pt-6 flex gap-5 w-full  '>
            {/* left */}
            <div className='w-[550px] h-full   rounded-3xl '>
                <div className='p-3 bg-white rounded-2xl'>
                    <input className='bg-[#F8F8F8] w-full py-4 px-4 rounded-xl' type="text" id="searchInput"
                        placeholder="Search your tasks..."></input>
                    <button 
                        onClick={() => setShowCreateNewTaskPop(true)}
                        className='w-full py-4 rounded-xl bg-black text-white mt-3 flex items-center justify-center gap-3'>
                        <p className='flex items-center'><i className="text-white fa-solid fa-plus mr-2"></i>Create new
                            Task
                        </p> 
                    </button>
                </div>
                {/* bottom */}
                <div className='p-3 bg-white rounded-2xl mt-5 h-[760px]'>
                    <div class="bg-white rounded-xl p-4 w-full h-full overflow-y-auto space-y-6">

                        {/*
                        <!-- Card 1 --> */}
                        <button class="w-full text-left">
                            <div class="relative border-b pb-4">
                                <div class="flex justify-between">
                                    <h2 class="font-semibold">Rot# 123</h2>
                                    <span class="bg-gray-100 text-gray-600 px-4 py-2 rounded-lg text-sm">Delayed</span>
                                </div>
                                <p class="mt-2">Job# 2234</p>
                                <p>Customer: ABC Sdn Bhd</p>
                                <p>Pickup:</p>
                                <p>Drop off:</p>
                            </div>
                        </button>

                        {/*
                        <!-- Card 2 --> */}
                        <button class="w-full text-left">
                            <div class="relative border-b pb-4">
                                <div class="flex justify-between">
                                    <h2 class="font-semibold">Rot# 124</h2>
                                    <span
                                        class="bg-green-100 text-green-600 px-4 py-2 rounded-lg text-sm">Completed</span>
                                </div>
                                <p class="mt-2">Job# 2234</p>
                                <p>Customer: ABC Sdn Bhd</p>
                                <p>Pickup:</p>
                                <p>Drop off:</p>
                            </div>
                        </button>

                        {/*
                        <!-- Card 3 --> */}
                        <button class="w-full text-left">
                            <div class="relative border-b pb-4">
                                <div class="flex justify-between">
                                    <h2 class="font-semibold">Rot# 125</h2>
                                    <span
                                        class="bg-yellow-100 text-yellow-600 px-4 py-2 rounded-lg text-sm">Picked</span>
                                </div>
                                <p class="mt-2">Job# 2234</p>
                                <p>Customer: ABC Sdn Bhd</p>
                                <p>Pickup:</p>
                                <p>Drop off:</p>
                            </div>
                        </button>

                        {/*
                        <!-- Card 4 --> */}
                        <button class="w-full text-left">
                            <div class="relative border-b pb-4">
                                <div class="flex justify-between">
                                    <h2 class="font-semibold">Rot# 126</h2>
                                    <span class="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg text-sm">Holding</span>
                                </div>
                                <p class="mt-2">Job# 2234</p>
                                <p>Customer: ABC Sdn Bhd</p>
                                <p>Pickup:</p>
                                <p>Drop off:</p>
                            </div>
                        </button>

                        {/*
                        <!-- Card 4 --> */}
                        <button class="w-full text-left">
                            <div class="relative">
                                <div class="flex justify-between">
                                    <h2 class="font-semibold">Rot# 126</h2>
                                    <span class="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg text-sm">Holding</span>
                                </div>
                                <p class="mt-2">Job# 2234</p>
                                <p>Customer: ABC Sdn Bhd</p>
                                <p>Pickup:</p>
                                <p>Drop off:</p>
                            </div>
                        </button>

                    </div>
                </div>
            </div>

            {/* right */}
            <div className="bg-white rounded-2xl p-10 relative w-full h-full">

                {/*
                <!-- Rot & Job Absolute --> */}
                <div className="absolute top-6 right-6 text-sm font-medium text-gray-700 space-y-1">
                    <div>Rot# 124</div>
                    <div>Job# 341</div>
                </div>

                <div className="grid grid-cols-2">
                    {/*
                    <!-- Left side --> */}
                    <div className="space-y-12 pr-6">
                        {/*
                        <!-- Driver --> */}
                        <div className="flex items-start space-x-3">
                            <div className='mr-3 flex items-center justify-center w-16 h-16 rounded-full bg-[#FAFAFA]'>

                                <svg width="32" height="32" viewBox="0 0 28 28" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <mask id="mask0_67_15" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="28"
                                        style={{ maskType: "alpha" }}>
                                        <rect width="28" height="28" fill="#D9D9D9" />
                                    </mask>
                                    <g mask="url(#mask0_67_15)">
                                        <path
                                            d="M24.698 24.3556C24.698 22.0886 23.555 19.9144 21.5204 18.3114C19.4858 16.7084 16.7263 15.8079 13.849 15.8079C10.9717 15.8079 8.21218 16.7084 6.1776 18.3114C4.14302 19.9144 3 22.0886 3 24.3556L3.68705 24.3556C3.68705 22.2321 4.75769 20.1957 6.66342 18.6942C8.56916 17.1927 11.1539 16.3492 13.849 16.3492C16.5441 16.3492 19.1289 17.1927 21.0346 18.6942C22.9403 20.1957 24.011 22.2321 24.011 24.3556H24.698Z"
                                            fill="black" />
                                        <path
                                            d="M19.4378 7.58888C19.4378 10.6755 16.9355 13.1778 13.8489 13.1778C10.7622 13.1778 8.26001 10.6755 8.26001 7.58888C8.26001 4.50223 10.7622 2 13.8489 2C16.9355 2 19.4378 4.50223 19.4378 7.58888ZM8.8189 7.58888C8.8189 10.3669 11.0709 12.6189 13.8489 12.6189C16.6269 12.6189 18.8789 10.3669 18.8789 7.58888C18.8789 4.81089 16.6269 2.55889 13.8489 2.55889C11.0709 2.55889 8.8189 4.81089 8.8189 7.58888Z"
                                            fill="black" />
                                    </g>
                                </svg>

                            </div>

                            <div>
                                <h2 className="font-medium text-2xl my-3">Driver</h2>
                                <div className='space-y-3'>
                                    <p>Name:</p>
                                    <p>Driving license no:</p>
                                    <p>License type:</p>
                                    <p>License expiry date:</p>
                                    <p>Availability: full time/night</p>
                                </div>
                            </div>
                        </div>

                        {/*
                        <!-- Truck --> */}
                        <div className="flex items-start space-x-3">
                            <div className='mr-3 flex items-center justify-center w-16 h-16 rounded-full bg-[#FAFAFA]'>
                                <svg width="22" height="22" viewBox="0 0 17 17" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M15.4487 2.64315H15.0194L14.1509 0.883511C13.8835 0.339388 13.3545 -0.00122634 12.7788 3.31822e-06H4.22061C3.64434 -0.00122634 3.1159 0.339388 2.84793 0.883511L1.98007 2.64315H1.55075C0.694983 2.64438 0.00115254 3.38463 0 4.29765V5.83472C0 6.08926 0.193627 6.29584 0.432203 6.29584C0.67078 6.29584 0.864407 6.08926 0.864407 5.83472V4.29765C0.864983 3.89371 1.17214 3.56601 1.55075 3.56539H14.3267V13.6141C14.3255 14.4319 13.7037 15.0946 12.9373 15.0946H4.06271C3.29685 15.094 2.67563 14.4312 2.67505 13.6141V10.1711C3.41729 10.9513 4.28976 12.0777 5.44576 11.9965H11.5542H14.6743V11.135C14.6743 11.135 11.5341 11.0743 11.5542 11.0743H5.44576C5.01183 11.0755 4.59461 10.8935 4.28515 10.5689L2.67159 8.88242V3.23003C2.67159 2.63058 1.80834 2.62504 1.80719 3.23003V13.6141C1.80719 14.9594 2.84793 16.0439 4.10766 16.0169C4.10824 16.4012 4.02353 16.9803 4.53986 17C5.0562 16.9803 4.97149 16.4005 4.97207 16.0169H12.0314C12.032 16.4012 11.9473 16.9803 12.4636 17C12.9799 16.9803 12.8952 16.4005 12.8958 16.0169C14.1532 16.0403 15.1899 14.9569 15.1899 13.6141V3.56539C15.6625 3.50575 16.1258 3.7357 16.1356 4.29765V5.83472C16.1379 6.43725 16.9977 6.43848 17 5.83472V4.29765C16.9971 3.38463 16.3044 2.64561 15.4487 2.64315ZM2.95685 2.64315L3.61322 1.31328C3.73193 1.07288 3.9659 0.922245 4.22061 0.922245H12.7788C13.0335 0.922245 13.2675 1.07288 13.3862 1.31328L14.0432 2.64315H2.95685Z"
                                        fill="black" />
                                    <path
                                        d="M11.3333 13.0333C11.3461 13.7889 12.4542 13.7889 12.4666 13.0333C12.4537 12.2778 11.3456 12.2778 11.3333 13.0333Z"
                                        fill="black" />
                                    <path
                                        d="M4.53345 13.0333C4.54633 13.7889 5.65444 13.7889 5.66678 13.0333C5.6539 12.2778 4.54579 12.2778 4.53345 13.0333Z"
                                        fill="black" />
                                    <path
                                        d="M7.23856 12.4667C6.65477 12.4697 6.65298 13.597 7.23856 13.6H9.76154C10.3453 13.597 10.3471 12.4697 9.76154 12.4667H7.23856Z"
                                        fill="black" />
                                </svg>

                            </div>

                            <div>
                                <h2 className="font-medium text-2xl my-3">Truck</h2>
                                <div className='space-y-3'>
                                    <p>Reg. number</p>
                                    <p>Model:</p>
                                    <p>Year:</p>
                                    <p>Type:</p>
                                    <p>Road Tax expiry date:</p>
                                </div>
                            </div>
                        </div>

                        {/*
                        <!-- Container --> */}
                        <div className="flex items-start space-x-3">
                            <div className='mr-3 flex items-center justify-center w-16 h-16 rounded-full bg-[#FAFAFA]'>
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.5 11H8.5" stroke="black" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path
                                        d="M11.5 1.5V21M11.5 21L20.8714 17.2514C21.251 17.0996 21.5 16.7319 21.5 16.323V5.67703C21.5 5.26813 21.251 4.90042 20.8714 4.74856L11.7811 1.11245C11.5978 1.03913 11.3969 1.0217 11.2037 1.06238L6.34207 2.08588M11.5 21L6.34207 19.9141M6.34207 19.9141L2.10189 19.0215C2.03415 19.0072 1.96442 19.003 1.89673 18.9885C1.54591 18.9131 1 18.4479 1 17C1 15.4 1 8 1 4.5C1 3.87929 1.43344 3.11411 1.89675 3.01155C1.96435 2.99659 2.03415 2.99281 2.10189 2.97855L6.34207 2.08588M6.34207 19.9141V2.08588"
                                        stroke="black" />
                                </svg>

                            </div>

                            <div>
                                <h2 className="font-medium text-2xl my-3">Container</h2>
                                <div className='space-y-3'>
                                    <p>Container number:</p>
                                    <p>Size:</p>
                                    <p>Year:</p>
                                    <p>Type:</p>
                                    <p>Ro:</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*
                    <!-- Right side --> */}
                    <div className="pl-10 space-y-12 border-l-[0.5px] border-[#89898999]">
                        {/*
                        <!-- Pickup details --> */}

                        <div>
                            <h2 className="font-medium text-2xl my-3">Pickup details</h2>
                            <div className='space-y-3'>
                                <p>Company:</p>
                                <p>Address:</p>
                                <p>Phone number</p>
                                <p>Pickup date:</p>
                                <p>Pickup time</p>
                                <p>Container type: cold storage</p>
                                <p>Container size: 40 feet</p>
                                <p>Special requirement: Tipper</p>
                            </div>
                        </div>

                        {/*
                        <!-- Drop-off details --> */}

                        <div>
                            <h2 className="font-medium text-2xl my-3">Drop-off details</h2>
                            <div className='space-y-3'>
                                <p>Company:</p>
                                <p>Address:</p>
                                <p>Phone number</p>
                                <p>Pickup date:</p>
                                <p>Pickup time</p>
                                <p>Container type: cold storage</p>
                                <p>Container size: 40 feet</p>
                                <p>Special requirement: Tipper</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/*
                <!-- Bottom Section --> */}
                <div className="flex justify-between items-center mt-6">

                    {/* Status */}
                    <div className="flex items-center">
                        <select
                            className="appearance-none py-3 px-4 pr-8 rounded-lg bg-[#F8F8F8] text-gray-700 focus:outline-none"
                            defaultValue="Delayed">
                            <option value="Delayed">Delayed</option>
                            <option value="Completed">Completed</option>
                            <option value="Picked">Picked</option>
                            <option value="Holding">Holding</option>
                        </select>
                        <i className="fa-solid fa-chevron-down -ml-7 text-gray-500 text-sm pointer-events-none"></i>
                    </div>


                    {/*
                    <!-- Edit button --> */}
                    <div className="flex items-center space-x-4">
                        <button onClick={() => setShowDeleteTaskPop(true)} className='py-3 px-4 rounded-full bg-[#F8F8F8] hover:bg-transparent duration-200'>
                            <i className="fa-regular fa-trash-can text-gray-600"></i>
                        </button>

                        <button onClick={() => setShowEditTaskPop(true)} className='py-3 px-6 rounded-lg bg-[#F8F8F8] hover:bg-transparent duration-200'>
                            <span>Edit information</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
</>
);
}