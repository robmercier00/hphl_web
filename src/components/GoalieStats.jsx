import { useState, useEffect } from 'react';
import '../styles/App.css';
import axios from 'axios';
import GoalieRow from './GoalieRow';

function GoalieStats() {
  const [isCurrentSeason] = useState(true);
  const [goalies, setGoalies] = useState([]);
  const [sorting, setSorting] = useState({ field: 'gaa', ascending: false })
  const linkUri = import.meta.env.VITE_BASE_URI;

  useEffect(() => {
    axios
      .get(`${linkUri}api/players`, {
        params: { "isGoalie": true, "isCurrentSeason": isCurrentSeason }
      })
      .then((res) => {
        const goaliesCopy = [...res.data];

        goaliesCopy.map((goalie) => {
          goalie.gaa = !isNaN(parseFloat(goalie.goalsAgainst))
          ? ((+goalie.goalsAgainst) / (+goalie.gamesPlayed)).toFixed(2)
          : null;
        });

        // Apply sorting
        const sortedGoalies = goaliesCopy.sort((a, b) => {
          sorting.field = sorting.field || 'points';
          return +a[sorting.field] < +b[sorting.field] ? 1 : -1;
        });

        // Replace goalies with sorted goalies
        setGoalies(
          // Decide either players sorted by ascending or descending order
          sorting.ascending ? sortedGoalies : sortedGoalies.reverse()
        );
      })
      .catch((err) => {
        console.log('Error from GoalieStats');
        console.log(err);
      });
  }, [linkUri, sorting]);

  const goaliesList =
    goalies.length === 0
      ? <tr><td colSpan="6">No goalies found</td></tr>
      : goalies.map((goalie, k) => <GoalieRow goalie={goalie} key={k} />);

  function applySorting(key, ascending) {
    setSorting({ field: key, ascending: ascending });
  }

  return (
    <div className='GoalieStats'>
      <div className='container'>
        <table className="table table-hover table-responsive table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th className="sortable-header" onClick={() => applySorting('goalsAgainst', !sorting.ascending)}>Goals Against</th>
              <th className="sortable-header" onClick={() => applySorting('shotsAgainst', !sorting.ascending)}>Shots Against</th>
              <th className="sortable-header" onClick={() => applySorting('gaa', !sorting.ascending)}>GAA</th>
              <th className="sortable-header" onClick={() => applySorting('savePercentage', !sorting.ascending)}>Save %</th>
              <th className="sortable-header" onClick={() => applySorting('goals', !sorting.ascending)}>Goals</th>
              <th className="sortable-header" onClick={() => applySorting('assists', !sorting.ascending)}>Assists</th>
            </tr>
          </thead>
          <tbody className="">{goaliesList}</tbody>
        </table>
      </div>
    </div>
  );
}

export default GoalieStats;