import '../styles/App.css';
import { useState } from 'react';
import GamePlayerStats from "./GamePlayerStats";


function GameModule({ game }) {
  const [gamePlayerStatsList, setGamePlayerStatsList] = useState('');

  function getGamePlayerStats() {
    setGamePlayerStatsList(game._id);
  }

  return (
    <>
      <tr
        onClick={getGamePlayerStats}
        className="game-expander"
        data-bs-toggle="collapse"
        data-bs-target={"#" + game._id}>
        <td className='text-center sched-time'>
          {game.time}
        </td>
        <td className='sched-team'>
          {game.homeTeam}
        </td>
        <td className='text-center sched-score'>
          {game.homeTeamScore}
        </td>
        <td className='sched-team'>
          {game.awayTeam}
        </td>
        <td className='text-center sched-score'>
          {game.awayTeamScore}
        </td>
      </tr>
      <tr className="collapse game-stats-collapse" id={game._id}>
      { gamePlayerStatsList.length
        ? <GamePlayerStats game={game} />
        : <td></td>
      }
      </tr>
    </>
  )
}

export default GameModule;