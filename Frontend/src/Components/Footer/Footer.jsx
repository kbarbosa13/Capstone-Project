import React from "react";  // Imports react library as React variable
import "./Footer.css";      // Imports the ./Footer.css file for styling of the footer

// Assign variable to function declaration
const Footer = () => {


  return (
    <footer className="footer">                                  {/* Acts pretty much the same as a div doesn't have its own functionality added to it. Styles the footer with said className defined in the Footer.css file */}
      <div className="footer-content">                           {/* div container styled by the said className defined in the footer.css file */}

        <p className="footer-text">                                          {/* text above the links to the other pages down below styled by the footer-text class defined in Footer.css file */}
          © {new Date().getFullYear()} DisasterReady — All Rights Reserved   {/* new Date().getFullYear() returns the full year from the users device and displays that  */}
        </p>
        {/* All the different footer links styled by the footer-links class defined in Footer.css */}
        <div className="footer-links">
          <a href="/privacy">Privacy Policy</a>                   {/* Goes to the Privacy Policy page */}
          <a href="/terms">Terms of Service</a>                   {/* Goes to the Terms of Service page */}
          <a href="/contact">Contact</a>                          {/* Goes to the Contact page */}
        </div>

      </div>
    </footer>
  );
}

export default Footer; // Export the footer variable to be used elsewhere in the app.jsx file for display