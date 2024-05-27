import '../styles/App.css';

function GameStats({playerStats}) {
  return (
    <>
      <tbody>
        <tr>
          <td>{ playerStats.name }</td>
          <td>{ playerStats.goals }</td>
          <td>{ playerStats.assists }</td>
          <td>{ +playerStats.goals + +playerStats.assists }</td>
        </tr>
      </tbody>
    </>
  )
}

export default GameStats;