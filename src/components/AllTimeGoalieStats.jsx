import { useState, useEffect } from 'react';
import '../styles/App.css';
import axios from 'axios';
import GoalieRow from './GoalieRow';

function AllTimeGoalieStats() {
  const [goalies, setGoalies] = useState([]);
  const linkUri = import.meta.env.VITE_BASE_URI;

  useEffect(() => {
    axios
      .get(`${linkUri}api/players`, {
        params: { "isGoalie": true }
      })
      .then((res) => {
        setGoalies(res.data);
      })
      .catch((err) => {
        console.log('Error from AllTimeGoalieStats');
        console.log(err);
      });
  }, [linkUri]);

  const goaliesList =
    goalies.length === 0
      ? <tr><td colSpan="6">No goalies found</td></tr>
      : goalies.map((goalie, k) => <GoalieRow goalie={goalie} key={k} />);

  return (
    <div className='AllTimeGoalieStats'>
      <div className='container'>
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
          <tbody className="">{goaliesList}</tbody>
        </table>
      </div>
    </div>
  );
}

export default AllTimeGoalieStats;