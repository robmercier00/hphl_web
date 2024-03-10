import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import axios from 'axios';
import PlayerRow from './PlayerRow';

function ShowCurrentPlayerStats() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8082/players', {
        params: { "isGoalie": false }
      })
      .then((res) => {
        setPlayers(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowCurrentPlayerStats');
      });
  }, []);

  const playersList =
    players.length === 0
      ? <tr><td colSpan="6">No players found</td></tr>
      : players.map((player, k) => <PlayerRow player={player} key={k} />);

  return (
    <div className="card">
      <div className='ShowCurrentPlayerStats'>
        <div className='container'>
          <div className='col-md-12'>
              <h2 className='display-5 text-center'>Player Stats</h2>
          </div>

          <table className="table table-hover table-responsive table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Games</th>
                <th>Goals</th>
                <th>Assists</th>
                <th>Points</th>
                <th>Points Per Game</th>
              </tr>
            </thead>
            <tbody className="">{playersList}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ShowCurrentPlayerStats;