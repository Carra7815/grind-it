import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import Root from "./Root.jsx";
import Error from "./routes/Error.jsx";
import Index from "./routes/Index.jsx";

export default [
  {
    path: "/",
    file: "./routes/layout.jsx",
    children: [
      {
        index: true,
        file: "./routes/index.jsx",
      },
    ],
  },
];
