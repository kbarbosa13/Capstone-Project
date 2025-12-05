import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from  "./Components/Navbar/Navbar";
import Home from "./Components/Pages/Home";
import Carousel from "./Components/Carousel/Carousel";
import Login from "./Components/Pages/Login"
import News from "./Components/NewsSection.jsx"
import VerticalNav from "./Components/VerticalNav.jsx";
import Footer from "./Components/Footer/Footer.jsx";

import BackgroundLayout from "./Components/BackgroundLayout";
import { navRoutes } from "./Components/Navbar/navRoutes.jsx";

function App() {
  return (
     
    // Fetch data when the component loads from mongo db database
  /*useEffect(() => {
    fetch("http://localhost:5000/api/disasters")
      .then((res) => res.json())
      .then((data) => setDisasters(data))
      .catch((err) => console.error("Error fetching disasters:", err));
  }, []); */
  
    <div className="app-container">
      <Navbar />
      
      <div className="main-content">
      <Routes>
        <Route path="/" element = {<><Carousel /><div className="content-layout"><News /><VerticalNav /></div><Home /></>} />
       <Route element={<BackgroundLayout />}>
    {navRoutes.flatMap(route =>
      route.children?.map(child => (
          <Route
            key={child.path}
            path={child.path}
            element={child.element}
          />
        ))
        
      )}
      <Route path="/login" element={<Login />} />
  </Route>
        
      </Routes>
      </div>

      <Footer />
    </div>
    
  );
} 
export default App;

