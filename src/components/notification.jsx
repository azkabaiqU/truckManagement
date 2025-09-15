import React, { useState, useEffect } from 'react';



const Notification = ({ message, type }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setVisible(true);
      setTimeout(() => {
        setVisible(false); // Animasi hilang setelah 3 detik
      }, 3000);
    }
  }, [message]); // Efek hanya dijalankan saat message berubah

  const getNotificationStyle = () => {
    switch (type) {
      case 'success':
        return 'bg-green-500';
      case 'error':
        return 'bg-red-500';
      case 'info':
        return 'bg-blue-500';
      default:
        return 'bg-green-500';
    }
  };

  return (
    <div
      className={`absolute right-0 top-5 p-4 text-white rounded-lg shadow-lg transform transition-all duration-500 ease-in-out ${
        visible ? 'translate-x-0' : 'translate-x-full'
      } ${getNotificationStyle()}`}
    >
      {message}
    </div>
  );
};

export default Notification;
