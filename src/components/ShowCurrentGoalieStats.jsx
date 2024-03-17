import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import axios from 'axios';
import GoalieRow from './GoalieRow';

function ShowCurrentGoalieStats() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    axios
      .get("/players", {
        params: { "isGoalie": true }
      })
      .then((res) => {
        setPlayers(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowCurrentGoalieStats');
      });
  }, []);

  const playersList =
    players.length === 0
      ? <tr><td colSpan="6">No players found</td></tr>
      : players.map((player, k) => <GoalieRow player={player} key={k} />);

  return (
    <div className="card">
      <div className='ShowCurrentGoalieStats'>
        <div className='container'>
          <div className='col-md-12'>
              <h2 className='display-5 text-center'>Goalie Stats</h2>
          </div>

          <table className="table table-hover table-responsive table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Games</th>
                <th>Goals Against</th>
                <th>Shots Against</th>
                <th>GAA</th>
                <th>Save %</th>
                <th>Goals</th>
                <th>Assists</th>
              </tr>
            </thead>
            <tbody className="">{playersList}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ShowCurrentGoalieStats;