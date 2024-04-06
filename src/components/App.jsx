import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
import '../styles/App.css';
// Components import
import HomePage from "./HomePage.jsx";
import PlayerStats from "./PlayerStats.jsx";
import Media from "./Media.jsx";
import Rules from "./Rules.jsx";
import Records from "./Records.jsx";
import About from "./About.jsx";
import PastSeasons from "./PastSeasons.jsx";
import Schedule from "./Schedule.jsx";
import Rosters from "./Rosters.jsx";
import Standings from "./Standings.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <button
              className="navbar-toggler"
              type="button" 
              data-bs-toggle="collapse"
              data-bs-target="#navbarMenu"
              aria-controls="navbarMenu"
              aria-expanded="false"
              aria-label="Toggle navigation"
          >
              <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarMenu">
            <ul className="navbar-nav">
              <li className="nav-item ml-5 nav-box">
                <NavLink to={"/"}>HPHL Home</NavLink>
              </li>

              <li className="nav-item ml-5 nav-box">
                <NavLink to={"/schedule"}>Schedule</NavLink>
              </li>

              <li className="nav-item ml-5 nav-box">
                <NavLink to={"/rosters"}>Rosters</NavLink>
              </li>

              <li className="nav-item ml-5 nav-box">
                <NavLink to={"/standings"}>Standings</NavLink>
              </li>

              <li className="nav-item ml-5 nav-box">
                <NavLink to={"/playerStats"}>Player Stats</NavLink>
              </li>

              <li className="nav-item ml-5 nav-box">
                <NavLink to={"/pastSeasons"}>Past Seasons</NavLink>
              </li>

              <li className="nav-item ml-5 nav-box">
                <NavLink to={"/records"}>
                  All-Time Records
                </NavLink>
              </li>

              <li className="nav-item ml-5 nav-box">
                <NavLink to={"/media"}>
                  Media
                </NavLink>
              </li>

              <li className="nav-item ml-5 nav-box">
                <NavLink to={"/rules"}>
                  Rules
                </NavLink>
              </li>

              <li className="nav-item ml-5 nav-box">
                <NavLink to={"/about"}>
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/playerStats" element={<PlayerStats />} />
          <Route path="/media" element={<Media />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/records" element={<Records />} />
          <Route path="/about" element={<About />} />
          <Route path="/seasons" element={<PastSeasons />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/rosters" element={<Rosters />} />
          <Route path="/standings" element={<Standings />} />
          <Route path="/pastSeasons" element={<PastSeasons />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
