import React from "react";                                                     // Imports the react library
import ReactDOM from "react-dom/client";                                       // Imports the ReactDOM library from the react-dom/client library
import App from "./App.jsx";                                                   // Imports the App.jsx file as the variable App 
import "./index.css";                                                          // Imports the index.css style file
import { BrowserRouter } from "react-router-dom";                              // Imports BrowserRouter from raect-router-dom library 

// ReactDOM is the modern React 18 API for mounting an application. Targets the element by the id of "root" (in this case it is a div container located in index.html) and uses the render function call to display the components within this function
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>                                                           {/* A wrapper that highlights any possible problems on the website through the command terminal */}
    <BrowserRouter>                                                            {/* Another wrapper that enables us to use client-side routing. Allows us to use the routes that we defined in the app.jsx file */}
      <App />                                                                  {/* App component declared from the app.jsx file */}
    </BrowserRouter>
  </React.StrictMode>
);