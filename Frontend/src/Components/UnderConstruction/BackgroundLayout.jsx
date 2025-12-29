import "./BackgroundLayout.css";                    // Imports the BackgroundLayout.css file for implementing the background image for underconstruction pages

/* This is a dynamic way that we can define a function. It contains anything that is within the <BackgroundLayout> tags. The actual function is containing what it will wrap the children in later defined later in the app.jsx file */
function BackgroundLayout({ children }) {
  return (
    <div className="bg-layout-wrapper">             {/* Wrapper for the background layout. defined by the bg-layout-wrapper class defined within the BackgroundLayout.css file */}
      {children}
    </div>
  );
}

export default BackgroundLayout;                     // Export the function for later use within app.jsx file