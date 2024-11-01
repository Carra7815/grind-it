import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="mr-3 flex h-screen w-1/4 flex-row">
      <div className="mx-auto flex flex-col items-center justify-between p-3">
        <Link to="/" className="font-dongle text-3xl">
          GRIND IT
        </Link>
      </div>
      <div className="border-quaternary my-10 border-r" />
    </nav>
  );
}

export default Navbar;
