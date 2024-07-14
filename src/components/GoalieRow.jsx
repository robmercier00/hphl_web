import '../styles/App.css';

const GoalieRow = ({goalie}) => {
  return (
    <>
      <tr>
        <td>{goalie.name}</td>
        <td>{goalie.goalsAgainst || null}</td>
        <td>{goalie.shotsAgainst || null}</td>
        <td>{goalie.gaa || null}</td>
        <td>{goalie.savePercentage || null}</td>
        <td>{goalie.goals || null}</td>
        <td>{goalie.assists || null}</td>
      </tr>
    </>
  );
};

export default GoalieRow;
