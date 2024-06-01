import '../styles/App.css';

function GameStats({playerStats}) {
  const playerGoals = +playerStats[1].goals || null;
  const playerAssists = +playerStats[1].assists || 0;
  const playerShotsAgainst = +playerStats[1].shotsAgainst || null;
  const savePercentage = playerStats[1].isGoalie
      ? (Math.round(((+playerStats[1].shotsAgainst - +playerStats[1].goalsAgainst) / +playerStats[1].shotsAgainst) * 1000) / 1000).toFixed(3)
      : null

  return (
    <>
      <tr>
        <td>{ playerStats[1].name + (playerStats[1].isGoalie ? " - G" : "") }</td>
        <td>{ playerGoals }</td>
        <td>{ +playerAssists }</td>
        <td>{ playerShotsAgainst }</td>
        <td>{ savePercentage }</td>
      </tr>
    </>
  )
}

export default GameStats;
