import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';

const GoalieRow = ({player}) => {
  return (
    <>
      <tr>
        <td>{player.name}</td>
        <td>{player.gamesPlayed}</td>
        <td>{player.goalsAgainst}</td>
        <td>{player.shotsAgainst || null}</td>
        <td>{((+player.goalsAgainst) / (+player.gamesPlayed)).toFixed(2)}</td>
        <td>{player.savePercentage || null}</td>
        <td>{player.goals}</td>
        <td>{player.assists}</td>
      </tr>
    </>
  );
};

export default GoalieRow;
