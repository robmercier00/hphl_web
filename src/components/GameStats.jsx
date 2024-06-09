import '../styles/App.css';

function GameStats({playerStats}) {
  const playerGoals = +playerStats[1].goals || null;
  const playerAssists = +playerStats[1].assists || null;
  const playerShotsAgainst = +playerStats[1].shotsAgainst || null;
  const savePercentage = playerStats[1].isGoalie
      ? (Math.round(((+playerStats[1].shotsAgainst - +playerStats[1].goalsAgainst) / +playerStats[1].shotsAgainst) * 1000) / 1000).toFixed(3)
      : null

  return (
    <>
      <tr>
        <td className={playerStats[1].isSub ? "sub-player" : ""}>{ playerStats[1].name + (playerStats[1].isGoalie ? " - G" : "") }</td>
        <td className={playerStats[1].isSub ? "sub-player" : ""}>{ playerGoals }</td>
        <td className={playerStats[1].isSub ? "sub-player" : ""}>{ playerAssists }</td>
        <td className={playerStats[1].isSub ? "sub-player" : ""}>{ playerShotsAgainst }</td>
        <td className={playerStats[1].isSub ? "sub-player" : ""}>{ savePercentage }</td>
      </tr>
    </>
  )
}

export default GameStats;
