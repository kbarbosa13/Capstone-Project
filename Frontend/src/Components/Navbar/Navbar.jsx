import React, { useState } from "react";                              // Imports React library and useState library also from react library 
import {Link, NavLink} from "react-router-dom";                       // Imports link and Navlink from the react-router-dom library
import "./Navbar.css";                                                // Imports the Navbar.css file (style sheet used for the navbar)
import Logo from "../../assets/Logo.png";                             // Imports logo from respective location in files and attaches it to variable called Logo
import { navRoutes } from "./navRoutes";                              // Imports navRoutes from the navRoutes.jsx file (need the curly braces since it is not a default export and don't need the .jsx at the end of the navRoutes since it is able to autodect the file since it is uniquely named within the folder.)

function Navbar(){
/*----------------------------------------------------------------- Defining ---------------------------------------------------------------------*/
    const [hamburgerOpen, setHamburgerOpen] = useState(false);        // Call to the useState hook. Creating a state variable called menuOpen set to the default of false and then provides a function called setMenuopen that will be used to update the state variable (This is used for the hamburger menu which will be remade later when mobile version is worked on)
    const [openDropdown, setOpenDropdown] = useState(false);          // Call to the useState hook. Creating a state variable called openDropdown set to the default of null then provides the setOpenDropdown function to update the variable when the dropdown is opened

    // Function created and assigned to a variable. Uses the label variable which is passed into the function (used to open the dropdown when clicked) 
    const toggleDropdown = (label) => { 
        setOpenDropdown(openDropdown === label ? false : label);      // Checks for to see if openDropwdown variable is equal to label and if it is updates the state to null and if not sets it equal to the label
    };

    // Function created and assigned to a variable. No passed in variable (Used to handle closing of the mobile menu and dropdown menu when link is clicked on)
    const handleLinkClick = () => { 
        setHamburgerOpen(false);                                      // Closes the hamburgerMenu for mobile by updating the state to false
        setOpenDropdown(false);                                       // Closes the openDropdown menu by updating the setOpenDropdown to false
    };

/*---------------------------------------------------------- Logic for the Navbar + Header  ----------------------------------------------------------------*/
    return( 
      <>                                                                                                      {/* This is here since a return statement needs to begin with some sort of parent element that will be wrapping everything else */}
{/*--------------------------------------------------------- Header Section ----------------------------------------------------------------------*/}
        {/* Wrapper for the header section of the website (Everthing here is styled by the top-header class defined within the Navbar.css file) */}
        <header className="top-header">
          <Link to="/" onClick={handleLinkClick}><img src={Logo} alt="Logo" className="header-logo" /></Link>   {/* This is similar to the a tag for linking to other pages. It is a part of the React Router library allowing us to take advantage of quickly changing the information on a page without needing to refresh the page when a link is accessed (link tags do this seemlessly without needing to refresh the entire page) */}
      
        {/* Wrapper for the search bar on the header section of website (Everything here is styled by the header-search class defined within the Navbar.css file) */}
          <div className="header-search">
            <input type="text" placeholder="Search..." onChange={(e) => console.log(e.target.value)} />           {/* Input tag defines a standard html input text box placeholder sets the default text within the textbox. The next section is an event handler that fires every time the value of the input changes. An arrow function is then used with the passed in variable e. Which then accesses the current value within the input search bar with the following line console.log(e.target.value). e.target refers to the specific react DOM event that triggered the event and the .value takes the current string entered by the user and then logs it to the browser console */}
            <button onClick={() => console.log("Search clicked")}>Go</button>                                     {/* This is the go button next to the search bar.  There is an onClick event handler that runs the arrow function which prints Search clicked to the browsers developer console the text that is between the opening and closing tags for the button is the text that gets displayed for the button */}
          </div>
        </header>
{/*--------------------------------------------------------- Navbar Section ----------------------------------------------------------------------*/}
{/*----------------------------------------------- Title Section above the Dropdown button -------------------------------------------------------*/}     
        {/* navbar wrapper for the whole navbar section (Everything here will be styles by the navbar class defined in Navbar.jsx) */}
        <nav className="navbar">
          {/* text above the navigation bar */}
          <p className ="nav-title">The Trusted Source for Curated, Comprehensive Disaster Readiness Intelligence.</p> {/* Paragraph tag that displays the text located between the open and closing tags (styled by the nav-title class located within the Navbar.css file) */}
        
          
          <hr className="nav-separator" />                               {/* This is a horizontal rule element which essentially just makes a horizontal line (Styled by the nav-seperator class that is defined in the Navbar.css) */}

{/*--------------------------------------------------------- Navigation buttons ------------------------------------------------------------------------*/}          
          {/* This is a wrapper for the positioning of the  styled by the nav-btn-positioning class that is defined within the Navbar.css file */}
          <div className="nav-btn-positioning">
            {/* This is a wrapper for the helping to create the hamburger menu that appears on mobile devices (currently not working since it needs to be reworked) */}
            <div onClick={() => {
                setHamburgerOpen(!hamburgerOpen);                         /* With the onClick handler this will activate the function declared within the arrow function every time the hamburgermenu is clicked on. The SetHamburgerOpen function will not the hamburgerOpen variable setting it to false if it is true and setting it to true if it is false */
            }}
            >
                <span></span>                                             {/* Each of these spans help us create the hamburger icon (currently not working since we don't have it coded in yet) */}
                <span></span>
                <span></span>
            </div>
            
{/*----------------------------------------------- Logic for the hamburger menu + creation of dropdown buttons -----------------------------------*/}
            <ul className={hamburgerOpen ? "open" : ""}>                  {/* Unordered list used for displaying the main dropdown buttons of the hamburger menu (class name is set to a check if the hamburgerOpen is set to true it will apply the open class and if not if will apply no class to the ul element) */}
                {/* This is using the navRoutes that we imported earlier and calling the map function to create another array for the function. */}
                {navRoutes.map((route) => (
                    <li key={route.label} className="dropdown">           {/* This sets the key needed for the map element to work the key being the route variable defined that we are passing into the map function calling the label within the navRoutes.jsx file. (Also applies the className dropdown which is a styling within the Navbar.css file to each listed item)*/}
                        {/* This is the button that we will be listing within the li tags (the main dropdown buttons that open the dropdown menu) */}
                        <button 
                            className="dropdown-btn"                      // Applies the dropdown-btn styling class that is defined in the Navbar.css file to said button
                            onClick={() => toggleDropdown(route.label)}   // On click event handler which will toggle the dropdown menu to open of when the specific label (dropdown button) is clicked
                        >
                          {route.label} ▼                                 {/* The arrow that appears right next to the dropdown buttons the route.label grabs the text (label) at the current position that the .map function is at in its array */}
                        </button>
                    </li>
                ))}
            </ul>

            {/* Defines the login button NavLink behaves pretty much exactly like Link only difference is that Navlink allows for styling to be added when mathcing the current url */}
            <NavLink to="/login" onClick={handleLinkClick} className="nav-login-btn">Login</NavLink>                  {/* to sets the path that appears in the url when clicked. Then there is a onClick handler that calls the handleLinkClick function and the it also applies the styling provided by the nav-login-btn class defined in the Navbar.css menu */}
          </div>

{/*-------------------------------------------------------------- Logic for dropdown menu --------------------------------------------------------*/}           
          
          {/* Conditional rendering statement code inside the parentheses will run only if openDropdown is set to true if true the div element is rendered */}
          {openDropdown && (
          <div className="menu-shared">                                                            {/* Wrapper for the shared menu all styled by the provided class menu-shared located within the Navbar.css file */}
            {/* Dynamically generates the list of links within the dropdown menu based off what is located within the navRoutes.jsx file */}
            {navRoutes
              .find((r) => r.label === openDropdown)                                        // Calls the find function on the navRoutes array looking for the specific label that equals that variable linked to the openDropdown variable 
              ?.children?.map((child) => (                                                  // ?.children is an optional chaining sequence that will only attempt to render the children of the dropdown button if there are children if not it will not run. It will then run through the array and render all the children elements 
                <NavLink                                                                    // Navlink that will provided for the each individual link
                  key={child.path}                                                          // Unique key defined for each item which the path value that is retrieved if from the child variable defined for the mapping calling the path variable defined within the navRoutes.jsx file
                  to={child.path}                                                           // This is what the url is set to grabbed from the navRoutes.jsx array
                  className={({isActive}) => "dropdown-link" + (isActive ? " active": "")}  // Sets the className with a conditional statement. the isActive variable is a true or false varaible provided to the className function. the function returns the dropdown-link class styling by default and if isActive is true it will add on the active styling to it aswell if not it will not add on the active class to it
                  onClick={handleLinkClick}                                                 // This is an onClick handler that will call the handleLinkClick function to when a link is clicked closing the dropdown menu when a link is clicked on
                >
                  {child.label}                                                             {/* This is the text that is dynamically created for each link grabbed from the label of the child elements */}
                </NavLink>
              ))}
          </div>
        )}
        </nav>
      </>
    );
}
               
export default Navbar;       // Exports the Navbar variable for later use within the app.jsx file