import '../styles/App.css';

function MainNav() {
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
              <a href="/">
                HPHL Home
              </a>
            </li>

            <li className="nav-item ml-5 nav-box">
              <a href="/schedule">
                Schedule
              </a>
            </li>

            <li className="nav-item ml-5 nav-box">
              <a href="/rosters">
                Rosters
              </a>
            </li>

            <li className="nav-item ml-5 nav-box">
              <a href="/standings">
                Standings
              </a>
            </li>

            <li className="nav-item ml-5 nav-box">
              <a href="/playerStats">
                Player Stats
              </a>
            </li>

            <li className="nav-item ml-5 nav-box">
              <a>
                Past Seasons
              </a>
            </li>

            <li className="nav-item ml-5 nav-box">
              <a href="/records">
                All-Time Records
              </a>
            </li>

            <li className="nav-item ml-5 nav-box">
              <a href="/media">
                Media
              </a>
            </li>

            <li className="nav-item ml-5 nav-box">
              <a href="/rules">
                Rules
              </a>
            </li>

            <li className="nav-item ml-5 nav-box">
              <a href="/about">
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
