import '../../styles/App.css';
import { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from 'prop-types';

export default function SeasonRow({season, token, unsetToken}) {
  const [isValidUser, setIsValidUser] = useState(false);
  const tokenId = token;
  const linkUri = import.meta.env.VITE_BASE_URI;

  useEffect(() => {
    axios
      .get(`${linkUri}api/verify`, {
        params: {token: tokenId}
      })
      .then((res) => {
        setIsValidUser(res.data.isValid);

        if (res && !res.data.isValid) {
          unsetToken();
        }
      })
      .catch((err) => {
        console.log('Error from Get Seasons');
        console.log(err);
      });
  }, [linkUri, tokenId, unsetToken]);

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
  token: PropTypes.string,
  unsetToken: PropTypes.func
}