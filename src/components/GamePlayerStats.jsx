import "../styles/App.css";
import { useLocation } from "react-router-dom";
import GameStats from "./GameStats";
import PropTypes from "prop-types";

export default function GamePlayerStats({ gameId, gameHomePlayerStatsList, setHomePlayers, gameAwayPlayerStatsList, setAwayPlayers, canEdit }) {
  const location = useLocation();
  const isAdmin = location.pathname.split("/")[1] === 'admin';
  const setHomePlayerStats = (() => {
    setHomePlayers(gameHomePlayerStatsList);
  });
  const setAwayPlayerStats = (() => {
    setAwayPlayers(gameAwayPlayerStatsList);
  });

  let homePlayerStatsList =
    gameHomePlayerStatsList.length === 0
      ? <tr><td colSpan="6">No data to show</td></tr>
      : gameHomePlayerStatsList.map((homePlayerStats, key) => <GameStats gameId={gameId} homeAway="home" playerStats={homePlayerStats} setPlayers={setHomePlayerStats} canEdit={canEdit} key={key} />);

  let awayPlayerStatsList =
    gameAwayPlayerStatsList.length === 0
      ? <tr><td colSpan="6">No data to show</td></tr>
      : gameAwayPlayerStatsList.map((awayPlayerStats, key) => <GameStats gameId={gameId} homeAway="away" playerStats={awayPlayerStats} setPlayers={setAwayPlayerStats} canEdit={canEdit} key={key} />);

  return (
    <td colSpan="6">
      <div className={canEdit && isAdmin ? 'game-player-stats-edit' : 'game-player-stats'}>
        <table className="table table-hover table-responsive table-striped schedule-module">
          <thead>
            <tr>
              <td>Home Player</td>
              <td> G </td>
              <td> A </td>
              <td> GA </td>
              <td> SA </td>
              {!canEdit && <td> Sv % </td> }
            </tr>
          </thead>
          <tbody>
            { homePlayerStatsList }
          </tbody>
        </table>
      </div>
      <div className={canEdit && isAdmin ? 'game-player-stats-edit' : 'game-player-stats'}>
        <table className="table table-hover table-responsive table-striped schedule-module">
          <thead>
            <tr>
              <td>Away Player</td>
              <td> G </td>
              <td> A </td>
              <td> GA </td>
              <td> SA </td>
              {!canEdit && <td> Sv % </td> }
            </tr>
          </thead>
          <tbody>
            { awayPlayerStatsList }
          </tbody>
        </table>
      </div>
    </td>
  )
}

GamePlayerStats.propTypes = {
  gameId: PropTypes.string.isRequired,
  gameHomePlayerStatsList: PropTypes.array,
  setHomePlayers: PropTypes.func,
  gameAwayPlayerStatsList: PropTypes.array,
  setAwayPlayers: PropTypes.func,
  canEdit: PropTypes.bool
}