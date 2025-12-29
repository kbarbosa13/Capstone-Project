import { useNavigate } from "react-router-dom";                  // Imports the UseNavigate library from react-router-dom

// Declare a function called Redirect Button passing in variables of "label" and "to" to it
function Button({ label, to }) {

  // Sets a variable navigate equal to the function call useNavigate that we imported earlier
  const navigate = useNavigate();

  // Sets a variable "isExternal" equal to the to variable passed in calling a startsWith function that checks if the url starts with "http://" or "https://"
  const isExternal = to.startsWith("http://") || to.startsWith("https://");

  // Function handleClick created through arrows notation checks to if isExternal is true which if it is it will have the window call an open function opening the link in a new tab with
  const handleClick = () => {
    if (isExternal) {
      window.open(to, "_blank", "noopener,noreferrer");                       // If isExternal is true open link in new window
    } else {
      navigate(to);                                                           // If not navigate to link (this is for if any buttons go to links on the website itself)
    }
  };

  return (
    <button
      onClick={handleClick}                                                   // onClick handler calls the function handleClick above
      className="button-style"                                                // Styles the button with the button-style css class located within the RedirectButton.CSS file
    >
      {label}                                                                 {/* This is the text that is displayed for the button dynamic way of doing it taken from the label given to the RedirectButton function */}
    </button>
  );
}

export default Button;                                                 // Exports the component to be used later in app.jsx