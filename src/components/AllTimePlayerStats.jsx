import { useState, useEffect } from 'react';
import '../styles/App.css';
import axios from 'axios';
import PlayerRow from './PlayerRow';

function AllTimePlayerStats() {
  const [players, setPlayers] = useState([]);
  const linkUri = import.meta.env.VITE_BASE_URI;

  useEffect(() => {
    axios
      .get(`${linkUri}api/players`, {
        params: { "isGoalie": false }
      })
      .then((res) => {
        setPlayers(res.data);
      })
      .catch((err) => {
        console.log('Error from AllTimePlayerStats');
        console.log(err);
      });
  }, [linkUri]);

  const playersList =
    players.length === 0
      ? <tr><td colSpan="6">No players found</td></tr>
      : players.map((player, k) => <PlayerRow player={player} key={k} />);

  return (
    <div className='AllTimePlayerStats'>
      <div className='container'>
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
  );
}

export default AllTimePlayerStats;