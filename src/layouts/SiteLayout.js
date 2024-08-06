// src/layouts/SiteLayout.js
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";
import './SiteLayout.css';
import { Outlet, useLocation } from "react-router-dom";

export default function SiteLayout() {
  const location = useLocation();

  // Check if the current path is the login page
  const isLoginPage = location.pathname === '/login';
  return (
    <div className="App">
      <Navbar />
      <main>
        <div className="container my-5">
          <Outlet />
        </div>
      </main>
      {!isLoginPage && (
        <footer>
          <Footer />
        </footer>
      )}
    </div>
  );
}
