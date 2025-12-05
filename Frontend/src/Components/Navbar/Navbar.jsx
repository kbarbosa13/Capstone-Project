import React, { useState } from "react";
import {Link, NavLink} from "react-router-dom";
import "./Navbar.css";
import Logo from "../../assets/Logo.png";
import { navRoutes } from "./navRoutes"; 

function Navbar(){

    const [menuOpen, setMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null); 

    const toggleDropdown = (label) => { 
        setOpenDropdown(openDropdown === label ? null : label); 
    };

    const handleLinkClick = () => { 
        setMenuOpen(false); //closes the mobile menu
        setOpenDropdown(null);  //closes any open dropdown
    }

    return( 
        <>
      {/* HEADER SECTION */}
      <header className="top-header">
        <Link to="/" onClick={handleLinkClick} className="title"><img src={Logo} alt="Logo" className="header-logo" /></Link>
      

      <div className="header-search">
        <input type="text" placeholder="Search..." onChange={(e) => console.log(e.target.value)} />
        <button onClick={() => console.log("Search clicked")}>Go</button>
      </div>
      </header>
      {/* NAVBAR */}
        
        <nav className="navbar">
        {/* text above the navigation bar */}
        <p className ="nav-subtitle" style={{ fontWeight: "bold", margin: "0", paddingBottom: "4px", fontSize: "0.80rem"}}>The Trusted Source for Curated, Comprehensive Disaster Readiness Intelligence. </p>
        
        {/* Horizontal Line */}
        <hr className="nav-separator" />
        
        <div className="nav-menu-login">
            {/* Mobile Hamburger */}
            <div className="menu" onClick={() => {
                setMenuOpen(!menuOpen);
            }}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
            
            {/* Main Menu */}
            <ul className={menuOpen ? "open" : ""}>
                {navRoutes.map((route) => (
                    <li key={route.label} className="dropdown">
                        {/* Parent button */}
                        <button 
                            className="dropdown-btn"
                            onClick={() => toggleDropdown(route.label)}
                    >
                        {route.label} ▼
                    </button>
                    </li>
                ))}
                </ul>

                {/* Login button */}
                    <NavLink to="/login" onClick={handleLinkClick} className="nav-login-btn">Login</NavLink>
                </div>
                
                {/* Shared dropdown area */}
                {openDropdown && (
          <div className="dropdown-shared">
            {navRoutes
              .find((r) => r.label === openDropdown)
              ?.children?.map((child) => (
                <NavLink
                  key={child.path}
                  to={child.path}
                  className={({isActive}) => "dropdown-link" + (isActive ? " active": "")}
                  onClick={handleLinkClick}
                >
                  {child.label}
                </NavLink>
              ))}
          </div>
        )}
                </nav>
            </>
    );
}
               

export default Navbar;