import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import MainTitle from './components/mainTitle';
import Dashboard from './pages/dashboard';
import Task from './pages/taskManagement';
import Profile from './pages/profile';

import CreateNewTaskPop from './components/createNewTaskPop';
import DeleteAccountPop from './components/deleteAccountPop';
import EditTaskPop from './components/editTaskPop';
import DeleteTaskPop from './components/deleteTaskPop';
import LogoutPop from './components/logoutPop';

function App() {
  // Memulihkan state selectedMenu dari localStorage jika ada
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
    <Router>
      {/* Pop-ups */}
      {showCreateNewTaskPop && <CreateNewTaskPop onClose={() => setShowCreateNewTaskPop(false)} />}
      {showDeleteAccountPop && <DeleteAccountPop onClose={() => setShowDeleteAccountPop(false)} />}
      {showEditTaskPop && <EditTaskPop onClose={() => setShowEditTaskPop(false)} />}
      {showDeleteTaskPop && <DeleteTaskPop onClose={() => setShowDeleteTaskPop(false)} />}
      {showLogoutPop && <LogoutPop onClose={() => setShowLogoutPop(false)} />}

      <MainTitle selectedMenu={selectedMenu} titleTextMap={titleTextMap} />

      <section className="relative w-full flex px-10">
        <Navbar setSelectedMenu={setSelectedMenu} selectedMenu={selectedMenu} />
        <section className="flex-1">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Task" element={<Task setShowCreateNewTaskPop={setShowCreateNewTaskPop} setShowEditTaskPop={setShowEditTaskPop} setShowDeleteTaskPop={setShowDeleteTaskPop} />} />
            <Route path="/Profile" element={<Profile setShowDeleteAccountPop={setShowDeleteAccountPop} setShowLogoutPop={setShowLogoutPop} />} />
          </Routes>
        </section>
      </section>
    </Router>
  );
}

export default App;
