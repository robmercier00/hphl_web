import '../styles/App.css';

function Records() {
    return (
      <div className="card">
        <div className='Records'>
          <div className='container'>
            <div className='col-md-12'>
                <h2 className='display-5 text-center'>League Records</h2>
            </div>

            <div className="table">
              <ul>
                <li><b>Most points, single season</b></li>
                <ul>
                  <li>Ronnie Perry - 88 (55 g, 33a) in 15 games, 2015</li>
                </ul>
                <li><b>Most goals, single season</b></li>
                <ul>
                  <li>Ronnie Perry - 55 in 15 games, 2015</li>
                  <li>Dan Lopes - 55 in 15 games, 2015</li>
                </ul>
                <li><b>Most assists, single season</b></li>
                <ul>
                  <li>Boris Diapella - 44 in 12 games, 2011</li>
                </ul>
                <li><b>Fastest to 50 goals, single season</b></li>
                <ul>
                  <li>Mike Grages - 50 in 12 games, 2011</li>
                </ul>
                <li><b>Most 50 goal seasons</b></li>
                <ul>
                  <li>Ronnie Perry - 2 (50 goals in 14 games, 2012 and 55 goals in 15 games, 2015)</li>
                </ul>
                <li><b>Most OT games and wins, single season</b></li>
                <ul>
                  <li>Schlager Boys - 2 (2019)</li>
                </ul>
                <li><b>Most Perfect Seasons, Team</b></li>
                <ul>
                  <li>PYTOTC - 1 (12-0-0 Regular Season, 2-0-0 Playoffs, 2011)</li>
                </ul>
                <li><b>Most Perfect Seasons, Goalie</b></li>
                <ul>
                  <li>Josh Robert - 1 (PYTOTC 12-0-0, 2.08 GAA, 2011)</li>
                </ul>
                <li><b>First 0-0 Tie in League History</b></li>
                <ul>
                  <li>Josh Robert, Fonzarelli HC, 25 saves vs Shawn Morin, Weekend At Vernies, 20 saves (5/6/21)</li>
                </ul>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Records;