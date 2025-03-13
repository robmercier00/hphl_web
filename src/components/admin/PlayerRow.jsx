import '../../styles/App.css';
import PropTypes from 'prop-types';

export default function PlayerRow({player}) {
  return (
    <>
      <tr className="row">
        <td className="col-6">{player.name}</td>
        <td className="col">
         { player.isGoalie ? "Yes" : "No" }
        </td>
        <td className="col">
          <a href={"/admin/player?player=" + player._id}>
            <button className="btn btn-primary">Edit</button>
          </a>
        </td>
      </tr>
    </>
  );
}

PlayerRow.propTypes = {
  player: PropTypes.object.isRequired
}