import React from "react";

import { Routes, Route, useHref, useNavigate } from "react-router-dom";

import { RouterProvider } from "react-aria-components";

import Navbar from "@views/Navbar";
import Home from "@views/Home";

function App() {
  let navigate = useNavigate();

  return (
    <RouterProvider navigate={navigate} useHref={useHref}>
      <div className="flex flex-row">
        <Navbar />
        <Routes className="grow overflow-auto">
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </RouterProvider>
  );
}

export default App;
