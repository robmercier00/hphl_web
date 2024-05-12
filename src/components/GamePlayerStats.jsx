import "../styles/App.css"

function GamePlayerStats({ game }) {
  console.log("game");
  console.log(game);

  return (
    <tr className="collapse game-stats-collapse" id={game._id}>
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
            <tbody>
              <tr>
                <td>home name</td>
                <td>goals</td>
                <td>assists</td>
                <td>g + a</td>
              </tr>
            </tbody>
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
    </tr>
  )
}

export default GamePlayerStats;