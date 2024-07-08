import '../styles/App.css';

const PlayerRow = ({player}) => {
  const goals = +player.goals || 0;
  const assists = +player.assists || 0;
  return (
    <>
      <tr>
        <td>{player.name}</td>
        <td>{goals}</td>
        <td>{assists}</td>
        <td>{+goals + +assists}</td>
      </tr>
    </>
  );
};

export default PlayerRow;