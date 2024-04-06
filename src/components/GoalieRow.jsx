import React from 'react';
import '../styles/App.css';

const GoalieRow = ({goalie}) => {
  return (
    <>
      <tr>
        <td>{goalie.name}</td>
        <td>{goalie.gamesPlayed || 0}</td>
        <td>{goalie.goalsAgainst || null}</td>
        <td>{goalie.shotsAgainst || null}</td>
        <td>{
          !isNaN(parseFloat(goalie.goalsAgainst))
            ? ((+goalie.goalsAgainst) / (+goalie.gamesPlayed)).toFixed(2)
            : null
        }</td>
        <td>{goalie.savePercentage || null}</td>
        <td>{goalie.goals || null}</td>
        <td>{goalie.assists || null}</td>
      </tr>
    </>
  );
};

export default GoalieRow;
