import '../styles/App.css';

const TeamPlayerRow = ({player}) => {
  return (
    <>
      <tr>
        <td>
          {player.name}
          { (player.isGoalie) ? ' - G' : ''}
        </td>
        <td className="text-center rosters-games">{player.gamesPlayed}</td>
        <td className="text-center rosters-stats">{player.goals}</td>
        <td className="text-center rosters-stats">{player.assists}</td>
        <td className="text-center rosters-stats">{+player.goals + +player.assists}</td>
        <td></td>
        <td className="text-center rosters-ga-stats">{(player.isGoalie) ? player.goalsAgainst : ''}</td>
        <td className="text-center rosters-stats">{
          (player.isGoalie)
            ? !isNaN(parseFloat(player.goalsAgainst))
              ? (+player.goalsAgainst / +player.gamesPlayed).toFixed(2)
              : null
            : ''
        }</td>
        <td className="text-center rosters-stats">{(player.isGoalie) ? player.shutouts : ''}</td>
      </tr>
    </>
  );
};

export default TeamPlayerRow;