import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import LoginAuth from './pages/auth/loginAuth';
import RegisterAuth from './pages/auth/registerAuth';
import All from './all'; // Import All.jsx

function App() {
  return (
    <Router>
      <Routes>
        {/* Rute untuk Login dan Register */}
        <Route path="/login" element={<LoginAuth />} />
        <Route path="/register" element={<RegisterAuth />} />

        {/* Rute utama yang akan menampilkan aplikasi setelah login */}
        <Route path="/*" element={<All />} />
      </Routes>
    </Router>
  );
}

export default App;
