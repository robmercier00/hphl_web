import { useState, useEffect } from 'react';
import '../../styles/App.css';
import axios from 'axios';
import PropTypes from 'prop-types';
import SeasonTeams from "./SeasonTeams.jsx";
import { useNavigate } from 'react-router-dom';

export default function TeamsList({token, unsetToken}) {
  const [isValidUser, setIsValidUser] = useState(true);
  const [season, setSeason] = useState();
  const seasonId = window.location.search.split("=")[1];
  const navigate = useNavigate();
  const linkUri = import.meta.env.VITE_BASE_URI;
  const tokenId = token;

  useEffect(() => {
    if (tokenId) {
      (async () => {
        await axios
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
      });
    } else {
      navigate("/admin");
    }
  }, [linkUri, tokenId, unsetToken, navigate]);

  useEffect(() => {
    if (isValidUser) {
      axios
        .get(`${linkUri}api/seasons/${seasonId}`)
        .then((res) => {
          setSeason(res.data[0]);
        })
        .catch((err) => {
          console.log('Error from Get Seasons');
          console.log(err);
        });
    } else {
      navigate("/admin");
    }
  }, [linkUri, seasonId, isValidUser, navigate]);

  return (
    <div className="card">
      <div><h2>{season && season.name}</h2></div>
      <SeasonTeams seasonId={seasonId} isValidUser={isValidUser} />
    </div>
  )
}

TeamsList.propTypes = {
  token: PropTypes.string,
  unsetToken: PropTypes.func
}