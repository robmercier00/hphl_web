import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import axios from 'axios';
import StandingsModule from "./StandingsModule";

function Standings() {
  const [standings, setStandings] = useState([]);
  const linkUri = import.meta.env.VITE_BASE_URI;

  useEffect(() => {
    axios
      .get(`${linkUri}api/standings`)
      .then((res) => {
        setStandings(res.data);
      })
      .catch((err) => {
        console.log('Error from Standings');
        console.log(err);
      });
  }, [linkUri]);

  const standingsList =
    standings.length === 0
      ? <tr><td colSpan="6">No standings found</td></tr>
      : standings.map((standings, k) => <StandingsModule standings={standings} key={k} />);

  return (
    <div className="card">
      <div className='TeamStandings'>
        <div className='container'>
          <div className='col-md-12'>
              <h2 className='display-5 text-center'>Team Standings</h2>
          </div>
          <table className='table table-hover table-responsive table-striped standings-module'>
            <thead>
              <tr>
                <td>Team</td>
                <td>W</td>
                <td>L</td>
                <td>T</td>
                <td>Pts</td>
              </tr>
            </thead>
            <tbody>
              { standingsList }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Standings;