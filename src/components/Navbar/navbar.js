import React from "react";
import NavbarIcons from "./NavbarIcons";

function Navbar() {
  return (
    <div className=" flex flex-1 justify-between items-center h-[10vh] pe-6  overflow-hidden ">
      <div>
        <img src="./assets/logo.png" className="h-20"></img>
      </div>
      <div>
        <NavbarIcons/>
      </div>
    </div>
  );
}

export default Navbar;
