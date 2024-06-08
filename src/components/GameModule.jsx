import '../styles/App.css';
import { useState } from 'react';
import GamePlayerStats from "./GamePlayerStats";


function GameModule({ game }) {
  const [gamePlayerStatsList, setGamePlayerStatsList] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  function getGamePlayerStats() {
    setIsExpanded(!isExpanded);
    setGamePlayerStatsList(!isExpanded ? game._id[0] : '');
  }

  return (
    <>
      <tr
        onClick={getGamePlayerStats}
        className="game-expander"
        data-bs-toggle="collapse"
        data-bs-target={"#gs" + game._id[0]}>
        <td className='text-center sched-time'>
          <i className={ isExpanded ? 'bi-caret-down-fill expand-icon' : 'bi-caret-right-fill expand-icon'}></i> {game.time}
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
      <tr className="collapse game-stats-collapse" id={"gs"+game._id[0]}>
        { 
          gamePlayerStatsList.length === 0
            ? <td colSpan="6"></td>
            : <GamePlayerStats gameId={gamePlayerStatsList} />
        }
      </tr>
    </>
  )
}

export default GameModule;