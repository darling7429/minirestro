import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./components/Error";

import About from "./components/About";
import Contact from "./components/Contact";
import Restromenu from "./components/Restromenu";
import Login from "./components/Login";

const App = () => {
  return (
    <>
      <div className="app_wrapper">
        <Header />
        <Outlet />
      </div>
    </>
  );
};

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path:"/login",element:<Login/>

      },
      {
        path: "/restaurant/:id",
        element: <Restromenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routes} />);
