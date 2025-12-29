import { Route, Routes } from "react-router-dom";                                             // Imports the Route and Routes from the react-router-dom library
import "./App.css";                                                                           // Imports the App.css file 
import Navbar from  "./Components/Navbar/Navbar";                                             // Imports the Navbar component as variable Navbar
import ExternalResources from "./Components/RedirectButtons/RedirectButtons.jsx";             // Imports the RedirectButtons componenent as variable ExternalResources
import Carousel from "./Components/Carousel/Carousel";                                        // Imports the Carousel component as variable Carousel
import Login from "./Components/Pages/Login"                                                  // Imports the Login component as variable Login
import News from "./Components/NewsSection/NewsSection.jsx"                                   // Imports the News component as varaible News
import QuickLinks from "./Components/quickLinks/QuickLinks.jsx";                              // Imports the Quicklinks componet as variable QuickLinks
import Footer from "./Components/Footer/Footer.jsx";                                          // Imports footer component as variable Footer
import BackgroundLayout from "./Components/UnderConstruction/BackgroundLayout";               // Imports background layout component as variable BackgroundLayout
import { navRoutes } from "./Components/Navbar/navRoutes.jsx";                                // Imports navRoutes as variable navRoutes

function App() {
  return (
     
    // Fetch data when the component loads from mongo db database
  /*useEffect(() => {
    fetch("http://localhost:5000/api/disasters")
      .then((res) => res.json())
      .then((data) => setDisasters(data))
      .catch((err) => console.error("Error fetching disasters:", err));
  }, []); */
    // Wrapper for all the information on the App.jsx file styled by the app-container class located in the App.css file (Everything within here is displayed on the main page through the main.jsx file)
    <div>
      <Navbar />                                                           {/* Displays the navbar component */}
      
      {/* Wrapper container for everything else on the page styled by the main-content class */}
      <div>
      {/* This is another wrapper container for all defined Routes (Put all the Route tags here. Your telling the program what to display when the url equals the path) */}
      <Routes>
        <Route path="/" element = {<><Carousel /><div className="position-NextTo"><News /><QuickLinks /></div><ExternalResources /><Footer /></>} />   {/* This is a route that displays information on the home page only */}
        <Route element={<BackgroundLayout />}>                             {/* Displays everything within this route group with the backgroundLayout element which just essentially puts the underconstruction page for all of these links */}
          {/* flatMap function that handles all the routing to all the different pages. Similar to the map function but it returns a 1d array good for denesting arrays within arrays (Applies the route tag to everything within the route tag) */}
          {navRoutes.flatMap(route =>
          // Map function called here if there are children (nested elements) to convert those elements into route elements
            route.children?.map(child => (
        // Essentially tells the browser if the url equals this, display what I have within the element tag
        <Route
            key={child.path}                  // Key element that is needed for the map function to work properly
            path={child.path}                 // Path that the element goes to 
            element={child.element}           // Links back to the array displaying the information within element
        />
        ))
        
      )}
        {/* Sets up route for the login button */}
        <Route path="/login" element={<Login />} />            {/* If the URL shows /login display the login page */}
        </Route> 
      </Routes>
      </div>
    </div>
    
  );
} 
export default App;         // Export the whole App component for later use within the main.jsx file which is the file that displays everything on the page for you to see!

