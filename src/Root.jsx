import React from "react";

import { Outlet, useHref, useNavigate } from "react-router-dom";

import { RouterProvider } from "react-aria-components";

// import Navbar from "./components/Navbar";
import Queuebar from "./components/Queuebar";
import { useState } from "react";
import Index from "./routes/Index";
import arithmatic from "./scripts/arithmatic";

function Root() {
  let navigate = useNavigate();

  const [queue, setQueue] = useState([]);

  const addItem = (newItem) => {
    if (!queue.some((item) => item.id === newItem.id)) {
      setQueue((prevQueue) => [...prevQueue, newItem]);
    }
  };

  const removeItem = (index) => {
    setQueue((prevQueue) => prevQueue.filter((_, i) => i !== index));
  };

  return (
    <RouterProvider navigate={navigate} useHref={useHref}>
      <div className="flex flex-row">
        {/* <Navbar /> */}
        <div className="mx-auto mt-4">
          <Index addItem={addItem} />
        </div>
        <Queuebar queue={queue} removeItem={removeItem} />
      </div>
    </RouterProvider>
  );
}

export default Root;
