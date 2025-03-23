import '../styles/App.css';
import { useState } from 'react';
import PropTypes from "prop-types";

export default function GameStats({ playerStats, setPlayers, canEdit }) {
  const [playerName, setPlayerName] = useState(playerStats.name ?? '');
  const [goals, setGoals] = useState(playerStats.goals ?? '');
  const [assists, setAssists] = useState(playerStats.assists ?? '');
  const [goalsAgainst, setGoalsAgainst] = useState(playerStats.goalsAgainst ?? '');
  const [shotsAgainst, setShotsAgainst] = useState(playerStats.shotsAgainst ?? '');
  const savePercentage = (playerStats.isGoalie || (playerStats.goalsAgainst &&playerStats.shotsAgainst))
      ? +playerStats.shotsAgainst > 0
        ? (Math.round(
          ((+playerStats.shotsAgainst - +playerStats.goalsAgainst) / +playerStats.shotsAgainst) * 1000
          ) / 1000).toFixed(3)
        : 0
      : null

  const setPlayerGameName = ((e) => {
    setPlayerName(e);
    playerStats.name = e;
    setPlayers(playerStats);
  })
  const setPlayerGoals = ((e) => {
    setGoals(+e);
    playerStats.goals = +e;
    setPlayers(playerStats);
  })
  const setPlayerAssists = ((e) => {
    setAssists(+e);
    playerStats.assists = +e;
    setPlayers(playerStats);
  })
  const setPlayerGoalsAgainst = ((e) => {
    setGoalsAgainst(+e);
    playerStats.goalsAgainst = +e;
    setPlayers(playerStats);
  })
  const setPlayerShotsAgainst = ((e) => {
    setShotsAgainst(+e);
    playerStats.shotsAgainst = +e;
    setPlayers(playerStats);
  })

  return (
    <>
      <tr>
        <td className={playerStats.isSub ? "sub-player" : ""}>
          {canEdit &&
            <input type="text" className="form-control col" value={ playerName ?? '' } onChange={e => setPlayerGameName(e.target.value)} />
          }
          {!canEdit &&
            <span>{ playerStats.name + (playerStats.isGoalie ? " - G" : "") }</span>
          }
        </td>
        <td className={playerStats.isSub ? "sub-player" : ""}>
          {canEdit &&
            <input type="number" min="0" className="form-control col" value={ goals ?? '' } onChange={e => setPlayerGoals(e.target.value)} />
          }
          {!canEdit &&
            <span>{ playerStats.goals }</span>
          }
        </td>
        <td className={playerStats.isSub ? "sub-player" : ""}>
          {canEdit &&
            <input type="number" min="0" className="form-control col" value={ assists ?? '' } onChange={e => setPlayerAssists(e.target.value)} />
          }
          {!canEdit &&
            <span>{ playerStats.assists }</span>
          }
        </td>

        <td className={playerStats.isSub ? "sub-player" : ""}>
          {canEdit &&
            <input type="number" min="0" className="form-control col" value={ goalsAgainst ?? '' } onChange={e => setPlayerGoalsAgainst(e.target.value)} />
          }
          {!canEdit &&
            <span>{ playerStats.goalsAgainst }</span>
          }
        </td>
        <td className={playerStats.isSub ? "sub-player" : ""}>
          {canEdit &&
            <input type="number" min="0" className="form-control col" value={ shotsAgainst ?? '' } onChange={e => setPlayerShotsAgainst(e.target.value)} />
          }
          {!canEdit &&
            <span>{ playerStats.shotsAgainst }</span>
          }
        </td>
        <td className={playerStats.isSub ? "sub-player" : ""}>
          {!canEdit &&
            <span>{ savePercentage }</span>
          }
        </td>
      </tr>
    </>
  )
}

GameStats.propTypes = {
  gameId: PropTypes.string.isRequired,
  homeAway: PropTypes.string.isRequired,
  playerStats: PropTypes.object,
  setPlayers: PropTypes.func,
  canEdit: PropTypes.bool
}
