import '../styles/App.css';
import PropTypes from "prop-types";
import GameModule from './GameModule';

export default function ScheduleModule({ isAdmin, isValidUser, schedule }) {
  const gameSchedule = schedule[1];
  const parseDateSchedule =
    (gameSchedule.length === 0)
      ? <table><tbody><tr><td colSpan="6">No games found</td></tr></tbody></table>
      : gameSchedule.map((game, k) => <GameModule isAdmin={isAdmin} isValidUser={isValidUser} game={game} key={k} />);

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

ScheduleModule.propTypes = {
  isAdmin: PropTypes.bool,
  isValidUser: PropTypes.bool,
  schedule: PropTypes.array.isRequired
}