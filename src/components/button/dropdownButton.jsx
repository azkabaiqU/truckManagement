import React from "react";

export default function DropDownButton({ id, openId, setOpenId, label, icon, items = [] }) {
  const isOpen = openId === id;

  return (
    <div className="relative inline-block z-20">
      {/* Tombol */}
      <button
        onClick={() => setOpenId(isOpen ? null : id)}
        className="px-6 h-[60px] w-60 bg-white rounded-2xl flex items-center justify-between"
      >
        <div className="flex items-center space-x-3">
          {icon && <img className="w-10" src={icon} alt="icon" />}
          <p>{label}</p>
        </div>
        <i
          className={`fa-solid fa-chevron-down text-gray-500 text-sm transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        ></i>
      </button>

      {/* List absolute */}
      <div
        className={`absolute left-0 top-9 w-60 bg-white rounded-b-2xl mt-2 overflow-hidden transition-all duration-500`}
        style={{
          maxHeight: isOpen ? "200px" : "0px", // expand / close
        }}
      >
        <ul className="flex flex-col p-6 space-y-4">
          {items.map((item, idx) => (
            <li
              key={idx}
              className="cursor-pointer hover:text-black/40 duration-100"
              onClick={() => {
                item.onClick && item.onClick();
                setOpenId(null); // otomatis nutup setelah pilih
              }}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
