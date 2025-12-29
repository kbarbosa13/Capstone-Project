import React from "react";                       // Imports the react library
import "./NewsSection.css";                      // Imports the NewsSection.css style sheet
import { newsRoutes } from "./newsRoutes";       // Imports the routes as newsRoutes from the newsRoutes.jsx file (arrary of information we map through later)

// Define the NewsSection function that houses all the logic needed to display the content for the news section
function NewsSection() {
  return (
    <section className="news-section">           {/* Wrapper for the ebtire section styles everything within the section tags with the style defined by the class news-section located within the NewsSection.css file */}
        <h2>Featured News</h2>                   {/* H2 tag that houses the section title */}
    
      <div className="news-container">           {/* A wrapper container for all the news cards themselves styling them with the news-container class written in NewsSection.css file */}
        {/* Map function that creates another array that renders the data within the array */}
        {newsRoutes.map((route, index) => (     
          <a
            key={index}                           // Unique key needed for the map function to work uses the index varaible created for it
            href={route.link}                     // href is the link that anything within the a tag will link to when clicked
            target="_blank"                       // Forces the new link to open in a new browser
            rel="noopener noreferrer"             // noopener: Prevents news link from accessing the data from the old link. Noreferrer: prevents browser from sending HTTP referrer header to the destination website 
            className="news-card"                 // Styling for the everything within the a tag
          >
            <img src={route.image} alt={route.title} />  {/* Link to the image grabbed from the map function calling the specific labels within the array. alt: displays this instead of image in any case of the image not existing anymore */}
            <h3>{route.title}</h3>                       {/* H3 tag that displays the title of the news story */}
            <p>{route.subtext}</p>                       {/* P tag that displays brief section of the story (hardcoded currently within the array) */}
          </a>
      ))}
      </div>
    </section>
  );
}

export default NewsSection;                              // Exports the NewSection for later use within the app.jsx file