import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Users from './pages/Users';
import UserProfile from './pages/UserProfile';
import Navbar from './components/Navbar';

const users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
  { id: 3, name: 'Bob Johnson' },
];

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users users={users} />} />
        <Route path="/user/:userID" element={<UserProfile users={users} />} />
      </Routes>
    </>
  );
}

export default App;
