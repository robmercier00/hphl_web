import { useState, useEffect } from 'react';
import '../../styles/App.css';
import axios from 'axios';
import PropTypes from 'prop-types';
import SeasonTeams from "./SeasonTeams.jsx"

export default function TeamsList({token, unsetToken}) {
  const [teams, setTeams] = useState([]);
  const [season, setSeason] = useState();
  const [isValidUser, setIsValidUser] = useState(false);
  const tokenId = token;
  const seasonId = window.location.search.split("=")[1];
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

  useEffect(() => {
    axios
      .get(`${linkUri}api/seasons/${seasonId}`)
      .then((res) => {
        setSeason(res.data[0]);
      })
      .catch((err) => {
        console.log('Error from Get Seasons');
        console.log(err);
      });
  }, [linkUri, seasonId]);

  return (
    <div className="card">
      <div><h2>{season && season.name}</h2></div>
      <SeasonTeams seasonId={seasonId} isValidUser={isValidUser} />
    </div>
  )
}

TeamsList.propTypes = {
  token: PropTypes.string
}