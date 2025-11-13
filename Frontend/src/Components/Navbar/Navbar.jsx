import React from 'react'
import './Navbar.css'
import myGif from '../../assets/Logo.gif';

const Navbar = () => {
    return (
        <header className="header">
            <a href="/" className="logo"><img src={myGif} alt ="Animated hurricane" className ="logo-gif" /></a>
            {/*Navbar links (they are displayed below changing the text between the a tags modifies the text for them on website directly)*/}
            <nav className="navbar">
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Portfolio</a>
                <a href="/">Services</a>   
                <a href="/">Contact</a>

                {/*<HoverDropdown title="Services">
                    <a href="/service-a" className="menu-item">Service A</a>
                    <a href="/service-b" className="menu-item">Service B</a>
                    <a href="/service-c" className="menu-item">Service C</a>
                </HoverDropdown>*/}
            </nav>
        </header>
    )
}

export default Navbar