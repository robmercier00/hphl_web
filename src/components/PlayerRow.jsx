import '../styles/App.css';

const PlayerRow = ({player}) => {
  return (
    <>
      <tr>
        <td>{player.name}</td>
        <td>{player.goals}</td>
        <td>{player.assists}</td>
        <td>{+player.goals + +player.assists}</td>
      </tr>
    </>
  );
};

export default PlayerRow;