import React from 'react';
import '../styles/App.css';
import TeamPlayerRow from './TeamPlayerRow';

const TeamRow = ({team}) => {
  const sortedPlayers = team.players.sort((a, b) => {
    if (typeof a.isGoalie !== 'undefined' && typeof b.isGoalie !== 'undefined') {
      return 0;
    }

    if (typeof a.isGoalie !== 'undefined' && typeof b.isGoalie === 'undefined') {
      return 1;
    }

    if (typeof a.isGoalie === 'undefined' && typeof b.isGoalie !== 'undefined') {
      return -1;
    }
  });

  return (
    <>
      <table className="table table-hover table-responsive table-striped">
        <thead>
          <tr className="date-header text-center"><td colSpan="9"><div>{team.name}</div></td></tr>
          <tr>
            <td className="rosters-player">Player</td>
            <td className="rosters-games">Games Played</td>
            <td className="text-center rosters-stats">Goals</td>
            <td className="text-center rosters-stats">Assists</td>
            <td className="text-center rosters-stats">Points</td>
            <td></td>
            <td className="text-center rosters-ga-stats">Goals Against</td>
            <td className="text-center rosters-stats">GAA</td>
            <td className="text-center rosters-stats">Shutouts</td>
          </tr>
        </thead>
        <tbody className="">
          { sortedPlayers.map((player, k) => <TeamPlayerRow player={player} key={k} />) }
        </tbody>
      </table>
    </>
  );
};

export default TeamRow;