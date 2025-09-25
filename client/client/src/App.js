import React, { useEffect, useState } from "react";
import  {Footer} from "./components/Footer";
import {Header} from "./components/Header";
import { BrowserRouter, useLocation } from "react-router-dom";
import { AllRoutes } from "./pages/routes/AllRoutes";
import {AdminHeader} from "./components/AdminComponent/AdminHeader";
import Movie from "./components/movie";
import Navbar from "./components/Navbar";
import LoginModal from "./components/LoginModal";
import "./App.css";
function AppWrapper() {
  const location = useLocation();

  // If the current path is /admin, use AdminHeader
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {isAdminRoute ? <AdminHeader /> : <Header />}
      <AllRoutes />
      <Footer />
    </>
  );
}
function App() {
  const [movies, setMovies] = useState([]);
  const [loginOpen, setLoginOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/movies")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("auth_token");
    const email = localStorage.getItem("auth_email");
    if (token && email) setUser({ email });
  }, []);

  function handleLogout() {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("auth_email");
    setUser(null);
  }

  return (
    // <div className="app-container">
    //   <Navbar
    //     onLoginClick={() => setLoginOpen(true)}
    //     isLoggedIn={!!user}
    //     onLogout={handleLogout}
    //   />
    //   <h1 className="app-title">Now Showing</h1>
    //   <div className="movies-grid">
    //     {movies.map((m, idx) => (
    //       <Movie key={idx} data={m} />
    //     ))}
    //   </div>

    //   <LoginModal
    //     open={loginOpen}
    //     onClose={() => setLoginOpen(false)}
    //     onSuccess={(u) => setUser(u)}
    //   />
    // </div>

    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>


  );
}

export default App;