import React from 'react';



export default function profile({setShowDeleteAccountPop, setShowLogoutPop}) {
return (
<>
        <div className='relative px-7 pb-7 pt-6 flex gap-5 w-full   '>
            <div className='lg:w-[450px] w-full h-[700px] p-16 bg-white rounded-2xl flex flex-col justify-between'>
                {/* information profile */}
                <div>
                    <div>
                        <p>Gmail:</p>
                        <p>user@gmail.com</p>
                    </div>
                    <div className='mt-10'>
                        <p>Create date:</p>
                        <p>01-01-2022</p>
                    </div>
                </div>

                {/* logout / Delete account */}
                <div className='mt-10'>
                    <button onClick={() => setShowLogoutPop(true)} className='w-full  text-red-700 text-left'>Logout</button>
                    <button onClick={() => setShowDeleteAccountPop(true)} className='w-full  text-red-700 text-left mt-3'>Delete Account</button>

                </div>
            </div>
        </div>
</>
);
}