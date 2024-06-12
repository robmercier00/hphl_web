import '../styles/App.css';

function StandingsModule({ standings }) {
  return (
    <>
      <tr>
        <td>{standings.name}</td>
        <td>{standings.win}</td>
        <td>{standings.loss}</td>
        <td>{standings.tie}</td>
        <td>{standings.points}</td>
        <td>{standings.goalsFor}</td>
        <td>{standings.goalsAgainst}</td>
      </tr>
    </>
  )
}

export default StandingsModule;