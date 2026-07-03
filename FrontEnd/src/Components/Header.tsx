import { useState } from "react";
import Logo from "../assets/logo.png";
import Navbar from "./Navbar";

const Head = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [disease, setDisease] = useState("Brain Tumor"); // ✅ useState instead of let

  const handleClick = () => {
    setShowNavbar(true); // open sidebar
  };

  return (
    <div className="border-b-2 z-50 border-gray-400 sticky top-0 w-full backdrop-blur-sm h-20 bg-white/30 flex justify-between items-center">
      <div className="flex ml-5 items-center h-full">
        <img
          src={Logo}
          alt="Logo"
          className="h-20 w-20 object-contain filter hue-rotate-60"
        />
        <h1 className="text-xl text-blue-950 font-semibold">NeuroScan AI</h1>
      </div>

      {/* Hide h1 when sidebar is open */}
      <div className="mr-7 ">
        
          <h1
            className="text-lg flex items-center
             font-bold text-black hover:scale-95 
             cursor-pointer transition-all duration-700 ease-in-out"
            onClick={handleClick}
          >
            <img className="h-4 w-4 mr-2" src="/right-arrow.png" />
            {disease} Detection
          </h1>
      </div>

      {/* Sidebar with smooth animation + transparency */}
      <div
        className={`backdrop-blur bg-white/90 fixed z-10 top-0 left-0 w-full h-64 scrollbar-auto overflow-y-auto transform transition-transform duration-500 ease-in-out 
    ${showNavbar ? "translate-y-20" : "-translate-y-full"} bg-white shadow-lg`}
      >
        <Navbar
          onClose={() => setShowNavbar(false)}
          showNavbar={showNavbar}
          onSelectDisease={(newDisease) => {
            setDisease(newDisease);
            setShowNavbar(false);
          }}
        />
      </div>
    </div>
  );
};

export default Head;
