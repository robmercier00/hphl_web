import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import axios from 'axios';
import TeamRow from './TeamRow';

function Rosters() {
  const [teams, setTeams] = useState([]);
  const linkUri = "/";

  useEffect(() => {
    axios
      .get(`${linkUri}api/teams`, {
        params: { "currentSeason": true }
      })
      .then((res) => {
        setTeams(res.data);
      })
      .catch((err) => {
        console.log('Error from Rosters');
        console.log(err);
      });
  }, []);

  const teamsList =
    teams.length === 0
      ? <tr><td colSpan="6">No teams found</td></tr>
      : teams.map((team, k) => <TeamRow team={team} key={k} />);

  return (
    <div className="card">
      <div className='Rosters'>
        <div className='container'>
          <div className='col-md-12'>
            <h2 className='display-5 text-center'>Current Season Rosters & Stats</h2>
          </div>
          {teamsList}
        </div>
      </div>
    </div>
  )
}

export default Rosters;