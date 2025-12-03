import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/NavbarComponent/Navbar";
const App = () => {
  return (
    <div className="w-full h-full overflow-y-auto overflow-x-hidden bg-black">
       <Navbar />
       <Outlet />
    </div>
  );
};

export default App;
