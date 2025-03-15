import '../../styles/App.css';
import { useEffect } from "react";
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";

export default function SeasonRow({season, isValidUser}) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isValidUser) {
      navigate("/admin");
    }
  }, [isValidUser, navigate]);

  return (
    <>
      <tr className="row">
        <td className="col-6">{season.name}</td>
        <td className="col">{new Date(season.start_date).toLocaleDateString() || null}</td>
        <td className="col">{new Date(season.end_date).toLocaleDateString() || null}</td>
        <td className="col">
         { season.currentSeason ? "Yes" : "No" }
        </td>
        <td className="col">
          <a href={"/admin/season?season=" + season._id}>
            <button className="btn btn-primary">Edit</button>
          </a>
        </td>
      </tr>
    </>
  );
}

SeasonRow.propTypes = {
  season: PropTypes.object.isRequired,
  isValidUser: PropTypes.bool
}