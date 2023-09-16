import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavBarLanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleProfileMenuOpen = () => {
    setMenuOpen(true);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
    setMobileMenuOpen(false);
  };

  const handleMobileMenuOpen = () => {
    setMobileMenuOpen(true);
  };

  return (
    <div className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          Certoshi
        </Link>
        <div className="menu">
          <Link to="/admin">Central Authority Portal</Link>
          <Link to="/institute">Institute Portal</Link>
          <Link to="/view">View Certificate</Link>
        </div>
        <div className="profile">
          <Link to="/" onClick={handleProfileMenuOpen}>
            Profile
          </Link>
        </div>
        <div className="mobile-menu" onClick={handleMobileMenuOpen}>
          ☰
        </div>
      </div>

      {menuOpen && (
        <div className="dropdown-menu">
          <Link to="/">Home</Link>
          <Link to="/admin">Central Authority Portal</Link>
          <Link to="/institute">Institute Portal</Link>
          <Link to="/view">View Certificate</Link>
        </div>
      )}

      {mobileMenuOpen && (
        <div className="mobile-dropdown-menu">
          <Link to="/">Home</Link>
          <Link to="/admin">Central Authority Portal</Link>
          <Link to="/institute">Institute Portal</Link>
          <Link to="/view">View Certificate</Link>
        </div>
      )}
    </div>
  );
}

export default NavBarLanding;
