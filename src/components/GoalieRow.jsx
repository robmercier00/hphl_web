import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';

const GoalieRow = ({player}) => {
  return (
    <>
      <tr>
        <td>{player.name}</td>
        <td>{player.gamesPlayed || 0}</td>
        <td>{player.goalsAgainst || null}</td>
        <td>{player.shotsAgainst || null}</td>
        <td>{
          !isNaN(parseFloat(player.goalsAgainst))
            ? ((+player.goalsAgainst) / (+player.gamesPlayed)).toFixed(2)
            : null
        }</td>
        <td>{player.savePercentage || null}</td>
        <td>{player.goals || null}</td>
        <td>{player.assists || null}</td>
      </tr>
    </>
  );
};

export default GoalieRow;
