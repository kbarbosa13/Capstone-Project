import "./QuickLinks.css";                               // Imports the QuickLinks styling
import { linkRoutes } from "./linkRoutes"                // Imports the Routes for the quickLinks section
// Function called VerticalNav used to make the verticalNav components
function QuickLinks() {
  return (
    <div className="quick-links-container">                            {/* div container that encompasses everything within this section (style can be found within the VeriticalNav.css file) */}
      {/* Map function that creates a brand new array for use in creating a dynamic mapping for displaying all the links */}
      {linkRoutes.map((route, index) => (                              
        <div key={index}>                                              {/* Unique key that is required for mapping */}
          <h3 className="section-title">{route.title}</h3>           {/* Dynamically display all the header for the section of quick links */}
            <div className="quick-links">                              {/* Wrapper container for the quick links themselves (Style can be found within the VerticalNav.css file) */}
              {/* Another map function for handling the denesting of the children within the array */}
              {route.items.map((item, i) => (
                <a
                  key={i}                                               // Unique key needed for the mapping
                  href={item.url}                                       // Link dynamically applied to the link
                  target="_blank"                                       // Opens in a new tab
                  rel="noopener noreferrer"                             // noopener: Prevents new tab or window from accessing the orginal pages window.opener, noreferrer: Prevents browser from sending information about the original page to the destination website 
                  className="quick-link"                                // Styling for the link (found in VerticalNav.css)
                >
                  {item.label}                                          {/* Dynamically place the text that will hold the link */}
                </a>
              ))}
            </div>
        </div>
      ))}
    </div>
  );
}

export default QuickLinks;                                              // Export the VerticalNav component for later use in app.jsx
