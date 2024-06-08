import { useState, useEffect } from 'react';
import "../styles/App.css";
import axios from 'axios';
import GameStats from "./GameStats";

function GamePlayerStats({ gameId }) {
  const [playerStats, setPlayerStats] = useState([]);
  const linkUri = import.meta.env.VITE_BASE_URI;

  useEffect(() => {
    axios
      .get(`${linkUri}api/gamePlayerStats`, {
        params: { "gameId": gameId }
      })
      .then((res) => {
        setPlayerStats(res.data);
      })
      .catch((err) => {
        console.log('Error from Game Player Stats');
        console.log(err);
      });
  }, [gameId, linkUri]);

  const homePlayerStatsList =
    playerStats.length === 0
      ? <tr><td colSpan="6">No data to show</td></tr>
      : Object.entries(playerStats.homeTeamPlayers).map((homePlayerStats, k) => <GameStats playerStats={homePlayerStats} key={k} />);

  const awayPlayerStatsList =
    playerStats.length === 0
      ? <tr><td colSpan="6">No data to show</td></tr>
      : Object.entries(playerStats.awayTeamPlayers).map((awayPlayerStats, k) => <GameStats playerStats={awayPlayerStats} key={k} />);

  return (
    <td colSpan="6">
      <div className="game-player-stats">
        <table className="table table-hover table-responsive table-striped schedule-module">
          <thead>
            <tr>
              <td><span className="game-team-identifier">Home </span>Player</td>
              <td> G </td>
              <td> A </td>
              <td> SA </td>
              <td> Sv % </td>
            </tr>
          </thead>
          <tbody>
            { homePlayerStatsList }
          </tbody>
        </table>
      </div>
      <div className="game-player-stats">
        <table className="table table-hover table-responsive table-striped schedule-module">
          <thead>
            <tr>
              <td><span className="game-team-identifier">Away </span>Player</td>
              <td> G </td>
              <td> A </td>
              <td> SA </td>
              <td> Sv % </td>
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

export default GamePlayerStats;