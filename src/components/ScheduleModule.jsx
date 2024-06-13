import '../styles/App.css';
import GameModule from './GameModule';

function ScheduleModule({ schedule }) {
  const gameSchedule = schedule[1];
  const parseDateSchedule =
    (gameSchedule.length === 0)
      ? <table><tbody><tr><td colSpan="6">No games found</td></tr></tbody></table>
      : gameSchedule.map((game, k) => <GameModule game={game} key={k} />);

  return (
    <>
      <table className="table table-hover table-responsive table-striped schedule-module">
        <thead>
        <tr className='text-center date-header'>
          <td colSpan="5"><div>{new Date(schedule[0]).toDateString()}</div></td>
        </tr>
          <tr>
            <td className='text-center sched-time'>Time</td>
            <td className='sched-team'>Home</td>
            <td className='text-center sched-score'>Score</td>
            <td className='sched-team'>Away</td>
            <td className='text-center sched-score'>Score</td>
          </tr>
        </thead>
        <tbody>
          { parseDateSchedule }
        </tbody>
      </table>
    </>
  )
}

export default ScheduleModule;