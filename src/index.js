import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Eligibility from "./pages/Eligibility";
import Enrollment from "./pages/Enrollment";
import Aboutus from "./pages/AboutUs";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import FAQ from "./pages/FAQ";
import Alumni from "./pages/Alumni";
// import Events from "./Components/events/Events";
// import FAQ from "./pages/FAQ.jsx";
import Protected from "./components/Protected";
import { Routes, Route } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "enrollment",
    element: <Enrollment />,
  },
  {
    path: "eligibility",
    element: <Eligibility />,
  },
  {
    path: "aboutus",
    element: <Aboutus />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
  // {
  //   path: "faq",
  //   element: <FAQ />,
  // },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "alumni",
    element: <Alumni />,
  },
  {
    path: "home",
    element: <Home />,
  },
  {
    path: "FAQ",
    element: <FAQ />,
  },
  // {
  //   path: "events",
  //   element: <Events />,
  // },
  // {
  //   path: "home",
  //   element: <Protected />,
  //   children: [
  //     {
  //       path: "/",
  //       index: true,
  //       element: <Home />,
  //     },
  //   ],
  // },
]);

{
  /* <Routes>
  <Route path="/home" element={<Home />} />
  <Route path="/login" element={<Login />} />
</Routes> */
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />{" "}
  </React.StrictMode>
);

reportWebVitals();
