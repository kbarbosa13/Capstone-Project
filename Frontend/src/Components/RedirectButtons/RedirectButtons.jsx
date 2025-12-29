import { RedirectRoutes } from "./RedirectRoutes.jsx";                // Importing the Redirect buttton generating code as variable external resources
import "./RedirectButton.css";                                       // Importing the Redirect button css styling sheet
import Button from "./Button.jsx";

function ExternalResources() {
    return (
   // Beginning wrapper for the section required for the function
   <>
        {/* Wrapper for the entire external resources section */}
        <div className = "redirect-Wrapper">
            <h2>External Resources</h2>                                 {/* h2 tag that displays the "External Resources" header (Styled within the RedirectButton.css file) */}
            <div className="resources-grid">                            {/* This is a wrapper container that is styled by the resource-grid class style declared within the RedirectButton.css file */}
                                                                        {/* The outer map function creates the columns while the inner map function creates the buttons */}
                {RedirectRoutes.map((column, colIndex) => (
                    <div className="resources-column" key={colIndex}>
                        {column.children.map((item, itemIndex) => (
                        <Button                                          // Uses the Button component (Created in Button.jsx). Essentially a call to the button function 
                            key={`${item.label}-${itemIndex}`}           // Makes a template string literal in the form of label-index so for example FEMA-1 for a unique key that the mapping function uses 
                            label={item.label}                           // Grabs that label from the newly made array (The text to be displayed for the button) 
                            to={item.to}                                 // Grabs the destination of the button (The link the button brings you to)
                        />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    </>
    );
}

export default ExternalResources;                                        // Exports the External Resources function to use later in the app.jsx file 