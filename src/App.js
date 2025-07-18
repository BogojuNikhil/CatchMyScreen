// App.js
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Movies from './pages/Movies';
import MovieDetails from './pages/MovieDetails';
import MyBookings from './pages/MyBookings';
import Footer from './components/Footer';
import Favourite from './pages/Favourite';
import { Toaster } from 'react-hot-toast';
import Seatlayout from './pages/Seatlayout';

const AppLayout = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <>
      <Toaster/>
      {!isAdminRoute && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/movies/:id/:date" element={<Seatlayout />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/favorites" element={<Favourite />} />
      </Routes>

      {!isAdminRoute && <Footer />}
    </>
  );
};

export default AppLayout;