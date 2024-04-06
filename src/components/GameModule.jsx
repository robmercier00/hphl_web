import '../styles/App.css';


function GameModule({ game }) {
  return (
    <tbody>
      <tr>
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
    </tbody>
  )
}

export default GameModule;