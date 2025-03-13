import { useState, useEffect } from 'react';
import '../../styles/App.css';
import axios from 'axios';
import PropTypes from 'prop-types';
import PlayerRow from './PlayerRow';

export default function PlayersList({isValidUser}) {
  const [players, setPlayers] = useState([]);
  const linkUri = import.meta.env.VITE_BASE_URI;

  useEffect(() => {
    axios
      .get(`${linkUri}api/players?allPlayers=true`)
      .then((res) => {
        if (isValidUser) {
          setPlayers(res.data);
        }
      })
      .catch((err) => {
        console.log('Error from Get Players');
        console.log(err);
      });
  }, [linkUri, isValidUser]);

  const playersList =
    players.length === 0
    ? <tr><td colSpan="4">No Players found</td></tr>
    : players.map((player, k) => <PlayerRow player={player} key={k} />);

  return (
    <table className="table table-hover table-responsive table-striped">
      <thead>
        <tr className="row">
          <th className="col-6">Name</th>
          <th className="col">Is Goalie?</th>
          <th className="col"></th>
        </tr>
      </thead>
      <tbody className="">{playersList}</tbody>
    </table>
  )
}

PlayersList.propTypes = {
  isValidUser: PropTypes.bool.isRequired
}