import React from "react";
import { Link } from "react-router-dom";
import Navmenu from "./Navmenu";
function Navbar() {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-white">
          my website
        </Link>
        <ul className="flex items-center space-x-4">
          <li>
            <Link to="/about" className="text-white hover:text-blue-200">
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" className="text-white hover:text-blue-200">
              Projects
            </Link>
          </li>
          <li className="flex">
            <Navmenu />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
