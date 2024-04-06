import '../styles/App.css';

function MainNav() {
  // use window pathname to determine active nav item
  const path = window.location.pathname;

  return (
    <>
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
              <a className={`${path === "/" ? "active-nav" : ""}`} href="/">
                HPHL Home
              </a>
            </li>

            <li className="nav-item ml-5 nav-box">
              <a className={`${path === "/schedule" ? "active-nav" : ""}`} href="/schedule">
                Schedule
              </a>
            </li>

            <li className="nav-item ml-5 nav-box">
              <a className={`${path === "/rosters" ? "active-nav" : ""}`} href="/rosters">
                Rosters
              </a>
            </li>

            <li className="nav-item ml-5 nav-box">
              <a className={`${path === "/standings" ? "active-nav" : ""}`} href="/standings">
                Standings
              </a>
            </li>

            <li className="nav-item ml-5 nav-box">
              <a className={`${path === "/playerStats" ? "active-nav" : ""}`} href="/playerStats">
                Player Stats
              </a>
            </li>

            <li className="nav-item ml-5 nav-box">
              <a className={`${path === "/pastSeasons" ? "active-nav" : ""}`}>
                Past Seasons
              </a>
            </li>

            <li className="nav-item ml-5 nav-box">
              <a className={`${path === "/records" ? "active-nav" : ""}`} href="/records">
                All-Time Records
              </a>
            </li>

            <li className="nav-item ml-5 nav-box">
              <a className={`${path === "/media" ? "active-nav" : ""}`} href="/media">
                Media
              </a>
            </li>

            <li className="nav-item ml-5 nav-box">
              <a className={`${path === "/rules" ? "active-nav" : ""}`} href="/rules">
                Rules
              </a>
            </li>

            <li className="nav-item ml-5 nav-box">
              <a className={`${path === "/about" ? "active-nav" : ""}`} href="/about">
                About
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default MainNav
