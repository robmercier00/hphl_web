import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './styles/index.css'

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Components imports
import MainNav from "./components/MainNav.jsx";
import Footer from "./components/Footer.jsx";
import HomePage from "./components/HomePage.jsx";
import PlayerStats from "./components/PlayerStats.jsx";
import Media from "./components/Media.jsx";
import Rules from "./components/Rules.jsx";
import Records from "./components/Records.jsx";
import About from "./components/About.jsx";
import PastSeasons from "./components/PastSeasons.jsx";
import Schedule from "./components/Schedule.jsx";
import Rosters from "./components/Rosters.jsx";
import Standings from "./components/Standings.jsx";

// Routes
const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/playerStats", element: <PlayerStats /> },
  { path: "/media", element: <Media /> },
  { path: "/rules", element: <Rules /> },
  { path: "/records", element: <Records /> },
  { path: "/about", element: <About /> },
  { path: "/seasons", element: <PastSeasons /> },
  { path: "/schedule", element: <Schedule /> },
  { path: "/rosters", element: <Rosters /> },
  { path: "/standings", element: <Standings /> },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="main-body">
      <MainNav />
      <RouterProvider router={router} />
      <Footer />
    </div>
  </React.StrictMode>,
)
