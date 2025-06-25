import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./components/Error";
import Cart from "./components/Cart";
import About from "./components/About";
import Contact from "./components/Contact";
import Restromenu from "./components/Restromenu";
import Login from "./components/Login";
import { Provider } from "react-redux";
import appstore from "./redux/store/appstore";

const App = () => {
  return (
    <>
      <Provider store={appstore}>
        <div className="app_wrapper">
          <Header />
          <Outlet />
          
        </div>
      </Provider>
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
        path: "/login",
        element: <Login />,
      },
      {
        path: "/restaurant/:id",
        element: <Restromenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routes} />);
