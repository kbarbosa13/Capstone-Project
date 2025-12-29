import React, { useState } from 'react';                 // Imports useStates from react library and react library itself. useState is a library allowing you to use hooks that will allow you to do re render elements. (This is how the slides work without this we wouldn't be able to change the slides)
import './Carousel.css';                                 // Imported Carousel.css
import hurricaneVideo from "../../assets/Hurricane.mp4"; // Imported hurricane video
import tornadoVideo from "../../assets/Tornado.mp4";     // Imported tornado video
import wildFireVideo from "../../assets/WildFire.mp4";   // Imported wildfire video
import floodingVideo from "../../assets/Flooding.mp4";   // Imported flooding video

/* This is a array of objects which stores all the information needed for the slideshow */
const slides = [
// This is the hurricane slide information 
{
    video: hurricaneVideo,                                                                // Imported video as a variable "hurricaneVideo"                                                              
    title: "Hurricane Readiness",                                                         // Title that will be displayed on the right text panel 
    text: "Stay ahead of tropical threats with real-time updates and impact analysis.",   // Paragraph of text underneath the title 
    button: "National Hurricane Center",                                                  // Text for the button of the slide
    link: "https://www.nhc.noaa.gov/"                                                     // The link that the button goes to 
  },
// This is the tornado slide information
  {
    video: tornadoVideo,                                                                  // Imported  video as a variable "tornadoVideo /*From Pinterest: https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F439101032407740001%2F&psig=AOvVaw0pzGAMZO0lUUUc1ULPaPNE&ust=1764450168192000&source=images&cd=vfe&opi=89978449&ved=0CBYQjhxqFwoTCICN0KDflZEDFQAAAAAdAAAAABAE */
    title: "Tornado Preparedness",                                                        // Title that will be displayed on the right text panel
    text: "Instant tornado and storm intelligence to keep communities safer.",            // Parapgraph underneath the title 
    button: "National Severe Storms Laboratory",                                          // Text for the button of the slide
    link: "https://www.nssl.noaa.gov/education/svrwx101/tornadoes/"                       // The link that the button goes to
  },
// This is the wildfire information 
  {
    video: wildFireVideo,                                                                 // Imported video as a variable "wildFireVideo" /* From Gif abyss: https://www.google.com/url?sa=i&url=https%3A%2F%2Fgifs.alphacoders.com%2Fgifs%2Fview%2F23360&psig=AOvVaw069KGU5XcnG2qsuR2ZyBcn&ust=1764457419669000&source=images&cd=vfe&opi=89978449&ved=0CBYQjhxqGAoTCPitsKX6lZEDFQAAAAAdAAAAABCsAQ */
    title: "Wildfire Recovery",                                                           // Title that will be displayed on the right text panel 
    text: "Critical situational awareness to help you prepare and respond efficiently.",  // Paragraph underneath the title
    button: "National Interagency Fire Center",                                           // Text for the button of the slide
    link: "https://www.nifc.gov/programs/post-fire-recovery"                              // The link that the button goes to
  },
// This is the flooding slide information 
  {
    video: floodingVideo,                                                                 // Imported as a variable "floodingVideo" /* From gif abyss: https://www.google.com/url?sa=i&url=https%3A%2F%2Fgifs.alphacoders.com%2Fgifs%2Fview%2F151175&psig=AOvVaw1OF-vMMKxZG1Jq1C7ujJtO&ust=1764460787412000&source=images&cd=vfe&opi=89978449&ved=0CBYQjhxqFwoTCIC-r_OGlpEDFQAAAAAdAAAAABBp */
    title: "Flood Ready",                                                                 // Title that will be displayed on the right text panel
    text: "Stay informed and prepared for incoming flooding.",                            // Paragraph of text underneath the title
    button: "FloodSmart",                                                                 // Text for the button of the slide
    link: "https://www.floodsmart.gov/"                                                   // The link that the button goes to
}
];

// This is a way to create a function by assigning said function to a varaible (Function expression using an arrow function)
const Carousel = () => {
/*------------------------------------------------------------------------- Defining -------------------------------------------------------------*/
    const [currentIndex, setCurrentIndex] = useState(0);                        // This is a call to react use state hook. It will create a state variable called currentIndex with an intial value of 0 which will hold the index position of the current slide. Then it will provide a function that will be used to update the slides by re-rendering the carousel component with the brand new index value.

    const currentSlide = slides[currentIndex];                                  // This will initialze a variable called currentSlide and then use current Index to set it equal to the specific information found within the slides array object defined earlier. (This will the website to figure out what exact information needs to be displayed currently)

    // Another function created and assigned to a variable through using an arrow function (for the previous button)
    const goPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));     // This works by passing in logic into the setCurrentIndex information that will determine if a condition occured to go to next slide. It works by having an arrow function that takes one argument called "prev" which represents the current value of currentIndex before the update. to the right of the arrow is the logic that breaks down to an if else statement. It will evaluate the a condition and returns one of two values. The condition works like this: if prev = 0 do the first option which would be "slides.length - 1" (this is done since if it is 0 then it means it is on the first slide so we go back one slide to go to the last one.) else if prev does not equal 0 it will do "prev - 1" which will give you the index for the previous slide
    };
    
    // Another function created and assigned to a variable through using an arrow function (for the next button)
    const goNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));    // Similar to the logic for the previous button. It will this time instead do the check if "prev" equals the slides.length - 1 (-1 since it would be out of bounds if not). Then if that is true set the index to 0 (meaning that you are on the last slide so you need to go back to the beginning) and if not set index to prev + 1 going to the next slide
    };

    // Another function created and assigned to a varible through using an arrow function (for the indicator circles)
    const goToIndex = (index) => {
    setCurrentIndex(index);                                                    // Sets currentIndex to the passed in index value when specific indicator button is clicked. 
    };

/*------------------------------------------------------------------- Logic for the carousel -----------------------------------------------------*/
    // Return statement that holds all the logic for slide switching 
    return (
    <div className="carousel-wrapper">               {/* div container for the whole carousel anything within here will have the styling of the "carousel-wrapper" unless overided later */}
        {/* Left: Full-width carousel */}
        <div className="carousel">                   {/* Same thing as above carousel-wrapper div container. This will take carousel class styling defined in Carousel.css file */}
        <div>
          {/* Uses the map function to display the information from the slides array. This is done by: calling the map function on said array you want to iterate over "slides.map" provide the callback function "(slides, indx)" then inside the callback function you transform the data into a single react component => (div + video). Then that return value of that callback is then collected into a new array. Which is then rendered into the document objects model */}
            {slides.map((slide, idx) => (            
            <div
            key={idx}
            className={`carousel_slide ${idx === currentIndex ? 'active' : ''}`} // This is the logic that applies the stlye to the current slide. the other section "${idx === currentIndex ? 'active' : ''}" this is a javascript template literal that will check to see if the idx equals currentIndex variable (slide currently on) if true gives the styling .active aswell to the slide if not don't add anything
            >
            {/* The map function needs a unique key value to work properly since without it. this will prevent react from being able to identify the items that have been changed. for instance we are using the idx value that we passed into the map function originally which is the index value of the array */}
            {/* This is the video tag that you use  */}
            <video
                src={slide.video} // source of the video taken from the slide variable passed into the map function. Since the new array is made using the map function we need to use the new variables  
                autoPlay          // Plays automatically when the slide is transitioned to
                muted             // Prevents any sound from being played if the video has sound
                loop              // Will replay the video when it reaches its end
                playsInline       // Crucial for keeping the video on mobile from opening up and playing in fullscreen. This will ensure that the video plays inline
            />
            
            </div>
        ))} {/* Closing tag for the whole slides.map function call */}
        </div>

        {/* Arrows */}
        <button className="carousel_arrow carousel_arrow--left" onClick={goPrev}> {/* Gives styling to the button as well as positioning through the Carousel.css file. onClick is a event checker that will wait for a click and then call the function goPrev */}
        ‹
        </button>
        <button className="carousel_arrow carousel_arrow--right" onClick={goNext}> {/* Gives styling to the button as well as positioning through the Carousel.css file. onClick is a event check that will wait for a click and then call the function goNext */} 
        ›
        </button>

        {/* Indicators (circles at the bottom of the slides) */}
        <div className="carousel_indicators">                                      {/* Gives styling to the indicators as designated by the class defines in the Carousel.css file */}
            {/* map function that will do the same as the last map funciton */}
            {slides.map((_, idx) => (                                               
            <button
            key={idx}                                                               // Unique key used is the index of the newly created array by the map function
            className={`indicator ${idx === currentIndex ? 'active' : ''}`}         // Applies the styling to the indicator which is the "indicator" styling defined in the Carousel.css file. Then their is a javascript check that sees if the current indicator is the current slide that we are on and if it is it applies the .active class as well to the indicator
            onClick={() => goToIndex(idx)}                                          // onClick handler that will check to see if an indicator is clicked on. Inline arrow function "() => goToIndex(idx)" no arguments are given since the sole purpose is to just call another function which will be the goToIndex function passing in the index of the newly created array with the map function
            />
        ))}
        </div>
    </div>

    {/* RIGHT: TEXT THAT CHANGES WITH SLIDE */}
      <div className="carousel-text-panel">              {/* Applies the carousel-text-panel style to anything within this section */}
        <h2>{currentSlide.title}</h2>                    {/* h2 tag is the header text for the text panel on the right side of the slides. grabbed from the slides data set array with currentSlide.title */}
        <p>{currentSlide.text}</p>                       {/* p tag is the paragraph text for the text panel on the right side of the slides. grabbed from the slides data set array with currenSlide.text */}

        {/* this a tag encompasses anything needed for the button */}
        <a 
            href={currentSlide.link}                     // Grabs the respective link from that same slides data set array that the button needs to go to when clicked
            target="_blank"                              // Makes the button when clicked go into a new tab 
            rel="noopener noreferrer"                    // Security measures for users noopener: Prevents newly opened browser from being able to access the original tabs window.opener javascript property protects from phishing attack called "reverse tabnabbing" noreferrer: stops the browser from sending the HTTP referrer header to the destination page prevent the destination websites analytics sytem from being able to see where the user came from. 
            className="carousel-cta-btn"                 // Styling for the button
        >
          {currentSlide.button}                          {/* The text for the button on the text panel on the right side which uses currentSlide.button to grab it from the array data set defined in slides */}
        </a>
        
      </div>

    </div>
  );
};

export default Carousel; // export the Carousel variable to another file (will be used in other file to display)