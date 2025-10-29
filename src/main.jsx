import { Children, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Component } from "react";
import Root from "./Router/Root.jsx";
import Home from "./component/Home/Home.jsx";
import Navber from "./component/Navber/Navber.jsx";
import Footer from "./component/Footer/Footer.jsx";
import Bannar from "./component/Bannar/Bannar.jsx";
import ErrorPage from "./component/ErrorPage/ErrorPage.jsx";
import Services from "./component/Services/Services.jsx";
import Login from "./component/Login/Login.jsx";
 const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    Children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/Navber",
        Component: Navber,
      },
      {
        path: "Bannar",
        Component: Bannar,
      },
      {
        path: '/Footer',
        Component: Footer
      },
      {
        path : "/services",
        Component : Services,
      },
      {
        path : '/login',
        Component: Login,
      }

    ]
  }
 ])
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
