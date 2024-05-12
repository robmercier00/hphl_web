import '../styles/App.css';
import GamePlayerStats from "./GamePlayerStats";


function GameModule({ game }) {

  return (
    <>
      <tr
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
      <GamePlayerStats game={game}  />
    </>
  )
}

export default GameModule;