// src/App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import React Router
import Navbar from './components/navbar'; // Navbar Komponen
import MainTitle from './components/mainTitle'; // Komponen MainTitle
import Dashboard from './pages/dashboard'; // Halaman Dashboard
import Task from './pages/taskManagement'; // Halaman Task Management
import Profile from './pages/profile'; // Halaman Profile


import CreateNewTaskPop from './components/createNewTaskPop'; // Halaman Profile
import DeleteAccountPop from './components/deleteAccountPop'; // Halaman Profile
import EditTaskPop from './components/editTaskPop'; // Halaman Profile
import DeleteTaskPop from './components/deleteTaskPop'; // Halaman Profile
import LogoutPop from './components/logoutPop'; // Halaman Profile





function  App() {
// State untuk menentukan text yang ditampilkan
const [selectedMenu, setSelectedMenu] = useState('dashboard');

// create new task pop up
const [showCreateNewTaskPop, setShowCreateNewTaskPop] = useState(false);

// edit task information pop up
const [showEditTaskPop, setShowEditTaskPop] = useState(false);

// delete account pop up
const [showDeleteAccountPop, setShowDeleteAccountPop] = useState(false);

// delete task pop up
const [showDeleteTaskPop, setShowDeleteTaskPop] = useState(false);

// logout pop up
const [showLogoutPop, setShowLogoutPop] = useState(false);




// Mapping state ke text yang ingin ditampilkan
const titleTextMap = {
dashboard: 'Dashboard',
task: 'Task Management',
profile: 'Profile'
};

return (
<Router>
    {/* pop up */}
      {showCreateNewTaskPop && (
        <CreateNewTaskPop onClose={() => setShowCreateNewTaskPop(false)} />
      )}

      {showDeleteAccountPop && (
        <DeleteAccountPop onClose={() => setShowDeleteAccountPop(false)} />
      )}

      {showEditTaskPop && (
        <EditTaskPop onClose={() => setShowEditTaskPop(false)} />
      )}

      {showDeleteTaskPop && (
        <DeleteTaskPop onClose={() => setShowDeleteTaskPop(false)} />
      )}

      {showLogoutPop && (
        <LogoutPop onClose={() => setShowLogoutPop(false)} />
      )}

    <MainTitle selectedMenu={selectedMenu} titleTextMap={titleTextMap} />
    


    <section className="relative w-full flex px-10">
        <Navbar setSelectedMenu={setSelectedMenu} selectedMenu={selectedMenu} />
        {/* Routes menentukan halaman mana yang akan dirender */}
        <section className='flex-1'>
            <Routes>
                <Route path="/Dashboard" element={<Dashboard />} /> 

                <Route   path="/Task"  
                element={<Task setShowCreateNewTaskPop={setShowCreateNewTaskPop} 
                setShowEditTaskPop={setShowEditTaskPop} 
                setShowDeleteTaskPop={setShowDeleteTaskPop} />} /> 

                <Route path="/Profile" element={<Profile 
                setShowDeleteAccountPop={setShowDeleteAccountPop}
                setShowLogoutPop={setShowLogoutPop}
                
                />} />
            </Routes>
        </section>

    </section>
</Router>
);
}

export default App;