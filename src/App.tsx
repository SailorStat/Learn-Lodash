import "./App.css";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Content from "./components/Content";

function App() {
  const router = createBrowserRouter([
    { path: "/Learn-Lodash/:block?", element: <Content /> },
    { path: "/", element: <Content /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
