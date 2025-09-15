// import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function NavbarMobile({ setSelectedMenu }) {
    // navbar state change the background color when clicked
// const [clicked, setClicked] = useState(null);

// change the text for main title on antoher file conpoment


return (
<nav
    className="block lg:hidden fixed bottom-0 bg-[#F8F8F8] self-start flex justify-center items-center px-4 py-2 pb-3  space-x-11  w-screen border-t border-black/10 overflow-visible z-40">
    {/* Dashboard */}
    <NavLink to="/Dashboard" onClick={() => setSelectedMenu && setSelectedMenu('dashboard')}
        className={({ isActive }) =>
          `relative overflow-visible group sm:w-[65px] w-[50px] sm:h-[65px] h-[50px] rounded-full flex items-center justify-center transition-all
          duration-100 ${isActive ? 'bg-black text-white' : 'bg-white text-black'}`
        }
        >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"
            className="transition-colors duration-300">
            <path
                d="M7.2973 9.18919H1.89216C1.38676 9.18919 0.911351 8.99189 0.553784 8.63324C0.202703 8.28514 0 7.79757 0 7.2973V1.89189C0 1.38649 0.196757 0.911081 0.553784 0.553243C0.90973 0.196486 1.38514 0 1.89216 0H7.2973C7.80405 0 8.27946 0.196486 8.63568 0.553243C8.9927 0.911351 9.18919 1.38649 9.18919 1.89189V7.2973C9.18919 7.7973 8.98676 8.28487 8.63378 8.63514C8.27757 8.99189 7.80243 9.18919 7.2973 9.18919ZM1.89216 1.08108C1.67432 1.08108 1.47081 1.16486 1.31919 1.31703C1.16541 1.47054 1.08108 1.67486 1.08108 1.89189V7.2973C1.08108 7.51108 1.16703 7.71892 1.31703 7.86757C1.4727 8.02351 1.67622 8.10811 1.89216 8.10811H7.2973C7.51324 8.10811 7.71676 8.02351 7.87054 7.86946C8.02216 7.71919 8.10811 7.51108 8.10811 7.2973V1.89189C8.10811 1.67486 8.02378 1.47054 7.87027 1.31703C7.71865 1.16486 7.51514 1.08108 7.2973 1.08108H1.89216Z"
                fill="currentColor" />
            <path
                d="M7.2973 20H1.89216C1.38676 20 0.911351 19.8027 0.553784 19.444C0.202703 19.0959 0 18.6084 0 18.1081V12.7027C0 12.1973 0.196757 11.7219 0.553784 11.364C0.90973 11.0073 1.38514 10.8108 1.89216 10.8108H7.2973C7.80405 10.8108 8.27946 11.0073 8.63568 11.364C8.9927 11.7221 9.18919 12.1973 9.18919 12.7027V18.1081C9.18919 18.6081 8.98676 19.0957 8.63378 19.4459C8.27757 19.8027 7.80243 20 7.2973 20ZM1.89216 11.8919C1.67432 11.8919 1.47081 11.9757 1.31919 12.1278C1.16541 12.2813 1.08108 12.4857 1.08108 12.7027V18.1081C1.08108 18.3219 1.16703 18.5297 1.31703 18.6784C1.4727 18.8343 1.67622 18.9189 1.89216 18.9189H7.2973C7.51324 18.9189 7.71676 18.8343 7.87054 18.6803C8.02216 18.53 8.10811 18.3219 8.10811 18.1081V12.7027C8.10811 12.4857 8.02378 12.2813 7.87027 12.1278C7.71865 11.9757 7.51514 11.8919 7.2973 11.8919H1.89216Z"
                fill="currentColor" />
            <path
                d="M18.1081 9.18919H12.703C12.1975 9.18919 11.7221 8.99189 11.3646 8.63324C11.0135 8.28514 10.8108 7.79757 10.8108 7.2973V1.89189C10.8108 1.38649 11.0075 0.911081 11.3646 0.553243C11.7205 0.196486 12.1959 0 12.703 0H18.1081C18.6148 0 19.0903 0.196486 19.4465 0.553243C19.8035 0.911351 20 1.38649 20 1.89189V7.2973C20 7.7973 19.7975 8.28487 19.4446 8.63514C19.0884 8.99189 18.6132 9.18919 18.1081 9.18919ZM12.703 1.08108C12.4851 1.08108 12.2816 1.16486 12.13 1.31703C11.9762 1.47054 11.8919 1.67486 11.8919 1.89189V7.2973C11.8919 7.51108 11.9778 7.71892 12.1278 7.86757C12.2835 8.02351 12.487 8.10811 12.703 8.10811H18.1081C18.324 8.10811 18.5275 8.02351 18.6813 7.86946C18.833 7.71919 18.9189 7.51108 18.9189 7.2973V1.89189C18.9189 1.67486 18.8346 1.47054 18.6811 1.31703C18.5294 1.16486 18.3259 1.08108 18.1081 1.08108H12.703Z"
                fill="currentColor" />
            <path
                d="M18.1081 20H12.703C12.1975 20 11.7221 19.8027 11.3646 19.444C11.0135 19.0959 10.8108 18.6084 10.8108 18.1081V12.7027C10.8108 12.1973 11.0075 11.7219 11.3646 11.364C11.7205 11.0073 12.1959 10.8108 12.703 10.8108H18.1081C18.6148 10.8108 19.0903 11.0073 19.4465 11.364C19.8035 11.7221 20 12.1973 20 12.7027V18.1081C20 18.6081 19.7975 19.0957 19.4446 19.4459C19.0884 19.8027 18.6132 20 18.1081 20ZM12.703 11.8919C12.4851 11.8919 12.2816 11.9757 12.13 12.1278C11.9762 12.2813 11.8919 12.4857 11.8919 12.7027V18.1081C11.8919 18.3219 11.9778 18.5297 12.1278 18.6784C12.2835 18.8343 12.487 18.9189 12.703 18.9189H18.1081C18.324 18.9189 18.5275 18.8343 18.6813 18.6803C18.833 18.53 18.9189 18.3219 18.9189 18.1081V12.7027C18.9189 12.4857 18.8346 12.2813 18.6811 12.1278C18.5294 11.9757 18.3259 11.8919 18.1081 11.8919H12.703Z"
                fill="currentColor" />
        </svg>
    </NavLink>

    {/* Task Management */}
    <NavLink to="/Task" onClick={() => setSelectedMenu && setSelectedMenu('task')}
        className={({ isActive }) =>
          `relative overflow-visible group mt-3 sm:w-[65px] w-[50px] sm:h-[65px] h-[50px] rounded-full flex items-center justify-center
          transition-all duration-100 ${isActive ? 'bg-black text-white' : 'bg-white text-black'}`
        }
        >
        <svg width="29" height="10" viewBox="0 0 29 10" fill="none" xmlns="http://www.w3.org/2000/svg"
            className="transition-colors duration-300">
            <path d="M1 7L4.40953 9.13096C4.7644 9.35275 5.21984 9.33012 5.55098 9.07424L16 1" stroke="currentColor"
                strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13 7L16.4095 9.13096C16.7644 9.35275 17.2198 9.33012 17.551 9.07424L28 1" stroke="currentColor"
                strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    </NavLink>

    {/* Profile */}
    <NavLink to="/Profile" onClick={() => setSelectedMenu && setSelectedMenu('profile')}
className={({ isActive }) =>
          `relative overflow-visible group mt-3 sm:w-[65px] w-[50px] sm:h-[65px] h-[50px] rounded-full flex items-center justify-center
          transition-all duration-100 ${isActive ? 'bg-black text-white' : 'bg-white text-black'}`
        }
        >
        <svg width="18" height="26" viewBox="0 0 18 26" fill="none" xmlns="http://www.w3.org/2000/svg"
            className="transition-colors duration-300">
            <circle cx="8.9999" cy="5.57143" r="5.14286" stroke="currentColor" strokeWidth="0.857143" />
            <circle cx="9" cy="16.7143" r="8.57143" stroke="currentColor" strokeWidth="0.857143" />
        </svg>
    </NavLink>
</nav>
);
}

export default NavbarMobile;