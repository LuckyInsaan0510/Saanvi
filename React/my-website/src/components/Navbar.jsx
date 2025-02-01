import React from "react";
import "./Navbar.css"; // Import the CSS for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">My Website</div>
      <ul className="nav-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Features</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
