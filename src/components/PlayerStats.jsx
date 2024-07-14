import { useState, useEffect } from 'react';
import '../styles/App.css';
import axios from 'axios';
import PlayerRow from './PlayerRow';

function PlayerStats() {
  const [isCurrentSeason] = useState(true);
  const [players, setPlayers] = useState([]);
  const [sorting, setSorting] = useState({ field: 'points', ascending: false })
  const linkUri = import.meta.env.VITE_BASE_URI;

  useEffect(() => {
    axios
      .get(`${linkUri}api/players`, {
        params: { "isGoalie": false, "isCurrentSeason": isCurrentSeason }
      })
      .then((res) => {
        // Copy array to prevent data mutation
        const playersCopy = [...res.data];
        playersCopy.map((player) => {
          player.goals = +player.goals || 0;
          player.assists = +player.assists || 0;
          player.points = (+player.goals + +player.assists) || 0;
        });

        // Apply sorting
        const sortedPlayers = playersCopy.sort((a, b) => {
          sorting.field = sorting.field || 'points';
          return +a[sorting.field] > +b[sorting.field] ? 1 : -1;
        });

        // Replace players with sorted players
        setPlayers(
          // Decide either players sorted by ascending or descending order
          sorting.ascending ? sortedPlayers : sortedPlayers.reverse()
        );
      })
      .catch((err) => {
        console.log('Error from PlayerStats');
        console.log(err);
      });
  }, [linkUri, sorting]);

  const playersList =
    players.length === 0
      ? <tr><td colSpan="6">No players found</td></tr>
      : players.map((player, k) => <PlayerRow player={player} key={k} />);

  function applySorting(key, ascending) {
    setSorting({ field: key, ascending: ascending });
  }

  return (
    <div className='PlayerStats'>
      <div className='container'>
        <table className="table table-hover table-responsive table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th className="sortable-header" onClick={() => applySorting('goals', !sorting.ascending)}>Goals</th>
              <th className="sortable-header" onClick={() => applySorting('assists', !sorting.ascending)}>Assists</th>
              <th className="sortable-header" onClick={() => applySorting('points', !sorting.ascending)}>Points</th>
            </tr>
          </thead>
          <tbody className="">{playersList}</tbody>
        </table>
      </div>
    </div>
  );
}

export default PlayerStats;