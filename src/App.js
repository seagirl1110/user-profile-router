import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Users from './pages/Users';
import UserProfile from './pages/UserProfile';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/userProfile" element={<UserProfile />} />
      </Routes>
    </>
  );
}

export default App;
