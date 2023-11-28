import React from 'react';
import { Link, Routes, Route, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import SignIn from './pages/SignIn';
import styles from './app.module.css'

const App = () => {
  return (
    <div>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <Link to="/">Домой</Link>
          </li>
          <li>
            <Link to="about-us">О нас</Link>
          </li>
          <li>
            <Link to="sign-in">Войти</Link>
          </li>
        </ul>
      </nav>

      
      <Routes>
        <Route index element={<Home />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="sign-in" element={<SignIn />} />
      </Routes>

      <Outlet />
    </div>
  );
};

export default App;
