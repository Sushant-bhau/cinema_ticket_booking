import React from "react";

function Navbar({ onLoginClick, isLoggedIn, onLogout }) {
  return (
    <header className="navbar">
      <div className="nav-inner">
        <div className="brand">
          <span className="brand-dot" />
          <span className="brand-name">QuickShow</span>
        </div>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#movie">Movies</a>
          <a href="#theaters">Theaters</a>
          <a href="#releases">Releases</a>
        </nav>
        <div className="nav-actions">
          <input className="nav-search" placeholder="Search" />
          {isLoggedIn ? (
            <button className="login-btn" onClick={onLogout}>Logout</button>
          ) : (
            <button className="login-btn" onClick={onLoginClick}>Login</button>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;