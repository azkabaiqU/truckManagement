// import React, { useState,  } from 'react'
import React, { useState, useEffect } from 'react';
;
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import MainTitle from './components/mainTitle';
import Dashboard from './pages/dashboard';
import Task from './pages/taskManagement';
import Profile from './pages/profile';

import NavbarMobile from './components/navbarMobile';


// Pop-up components
import CreateNewTaskPop from './components/createNewTaskPop';
import DeleteAccountPop from './components/deleteAccountPop';
import EditTaskPop from './components/editTaskPop';
import DeleteTaskPop from './components/deleteTaskPop';
import LogoutPop from './components/logoutPop';


function All() {
  const savedMenu = localStorage.getItem('selectedMenu');
  const [selectedMenu, setSelectedMenu] = useState(savedMenu || 'dashboard');



  // Pop-up state management
  const [showCreateNewTaskPop, setShowCreateNewTaskPop] = useState(false);
  const [showEditTaskPop, setShowEditTaskPop] = useState(false);
  const [showDeleteAccountPop, setShowDeleteAccountPop] = useState(false);
  const [showDeleteTaskPop, setShowDeleteTaskPop] = useState(false);
  const [showLogoutPop, setShowLogoutPop] = useState(false);

  // Mapping state ke text yang ingin ditampilkan
  const titleTextMap = {
    dashboard: 'Dashboard',
    task: 'Task Management',
    profile: 'Profile',
  };

  // Menyimpan selectedMenu ke localStorage setiap kali berubah
  useEffect(() => {
    localStorage.setItem('selectedMenu', selectedMenu);
  }, [selectedMenu]);

  return (
    <>
      {/* Pop-ups */}
      {showCreateNewTaskPop && <CreateNewTaskPop onClose={() => setShowCreateNewTaskPop(false)} />}
      {showDeleteAccountPop && <DeleteAccountPop onClose={() => setShowDeleteAccountPop(false)} />}
      {showEditTaskPop && <EditTaskPop onClose={() => setShowEditTaskPop(false)} />}
      {showDeleteTaskPop && <DeleteTaskPop onClose={() => setShowDeleteTaskPop(false)} />}
      {showLogoutPop && <LogoutPop onClose={() => setShowLogoutPop(false)} />}

      <MainTitle
        selectedMenu={selectedMenu}
        titleTextMap={titleTextMap}
      />
      <section className=" md:px-10 px-2 ">
        <Navbar setSelectedMenu={setSelectedMenu} selectedMenu={selectedMenu} />
        <NavbarMobile setSelectedMenu={setSelectedMenu} selectedMenu={selectedMenu} />
        <section className="flex-1 lg:pl-24 pl-0 lg:pb-0 pb-32">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route
              path="/Task"
              element={
                <Task
                  setShowCreateNewTaskPop={setShowCreateNewTaskPop}
                  setShowEditTaskPop={setShowEditTaskPop}
                  setShowDeleteTaskPop={setShowDeleteTaskPop}
                />
              }
            />
            <Route
              path="/Profile"
              element={<Profile setShowDeleteAccountPop={setShowDeleteAccountPop} setShowLogoutPop={setShowLogoutPop}  />}
            />
          </Routes>
        </section>
      </section>
    </>
  );
}

export default All;
