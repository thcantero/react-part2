import React from "react";
import { NavLink } from "react-router-dom";

/**
 * Navigation bar component with active link styling
 * Uses NavLink for automatic active class management
 */
function NavBar() {
  return (
    <nav className="NavBar" style={navStyles}>
      <div style={navContainerStyles}>
        <NavLink 
          to="/" 
          style={linkStyles}
          className={({ isActive }) => isActive ? "active" : ""}
        >
          Vending Machine
        </NavLink>
        <NavLink 
          to="/water" 
          style={linkStyles}
          className={({ isActive }) => isActive ? "active" : ""}
        >
          Water
        </NavLink>
        <NavLink 
          to="/chips" 
          style={linkStyles}
          className={({ isActive }) => isActive ? "active" : ""}
        >
          Chips
        </NavLink>
        <NavLink 
          to="/candy" 
          style={linkStyles}
          className={({ isActive }) => isActive ? "active" : ""}
        >
          Candy
        </NavLink>
      </div>
    </nav>
  );
}

// Styles
const navStyles = {
  backgroundColor: '#2c3e50',
  padding: '1rem 0',
  marginBottom: '2rem',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
};

const navContainerStyles = {
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'center',
  gap: '2rem'
};

const linkStyles = {
  color: '#ecf0f1',
  textDecoration: 'none',
  padding: '0.5rem 1rem',
  borderRadius: '4px',
  transition: 'all 0.3s ease',
  fontWeight: 'normal'
};

export default NavBar;