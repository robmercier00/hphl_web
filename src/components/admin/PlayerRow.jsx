import '../../styles/App.css';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";

export default function PlayerRow({ isValidUser, player }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isValidUser) {
      navigate("/admin");
    }
  }, [isValidUser, navigate]);

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
  isValidUser: PropTypes.bool,
  player: PropTypes.object.isRequired
}