import "../styles/App.css";
import { useState, useEffect } from 'react';
import axios from 'axios';
import GameStats from "./GameStats";

function GamePlayerStats({ game }) {
  const [playerStats, setPlayerStats] = useState([]);
  const linkUri = import.meta.env.VITE_BASE_URI;

  useEffect(() => {
    axios
      .get(`${linkUri}api/gamePlayerStats`, {
        params: { "gameId": game._id}
      })
      .then((res) => {
        setPlayerStats(res.data);
      })
      .catch((err) => {
        console.log('Error from Game Player Stats');
        console.log(err);
      });
  }, [linkUri]);

  const playerStatsList =
    playerStats.length === 0
      ? <table><tbody><tr><td colSpan="6">No player stats</td></tr></tbody></table>
      : Object.entries(playerStats).map((gameStats, k) => <GameStats game={game} gameStats={gameStats} key={k} />);

  return (
    <td colSpan="5">
      <div className="game-player-stats">
        <table className="table table-hover table-responsive table-striped schedule-module">
          <thead>
            <tr>
              <td>Player</td>
              <td> G </td>
              <td> A </td>
              <td> Pts </td>
            </tr>
          </thead>
          {{ playerStatsList }}
        </table>
      </div>
      <div className="game-player-stats">
        <table className="table table-hover table-responsive table-striped schedule-module">
          <thead>
            <tr>
              <td>Player</td>
              <td> G </td>
              <td> A </td>
              <td> Pts </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>away name</td>
              <td>goals</td>
              <td>assists</td>
              <td>g + a</td>
            </tr>
          </tbody>
        </table>
      </div>
    </td>
  )
}

export default GamePlayerStats;