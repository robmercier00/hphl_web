import '../../styles/App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";

export default function Player({ token, unsetToken }) {
  const [isValidUser, setIsValidUser] = useState(false);
  const [player, setPlayer] = useState();
  const [playerName, setPlayerName] = useState();
  const [isGoalie, setIsGoalie] = useState(true);
  const [updateConfirmed, setUpdateConfirmed] = useState(false);
  const navigate = useNavigate();
  const linkUri = import.meta.env.VITE_BASE_URI;
  const playerId = window.location.search.split("=")[1];
  const tokenId = token;

  useEffect(() => {
    if (tokenId) {
      axios
        .get(`${linkUri}api/verify`, {
          params: { "token": tokenId }
        })
        .then((res) => {
          setIsValidUser(res.data.isValid);
  
          if (res && res.data && !res.data.isValid) {
            unsetToken();
          }
        })
        .catch((err) => {
          console.log('Error from Get Players');
          console.log(err);
        });
    } else {
      navigate("/admin");
    }
  }, [linkUri, tokenId, unsetToken, navigate]);

  useEffect(() => {
    if (isValidUser) {
      axios
        .get(`${linkUri}api/players/${playerId}`)
        .then((playerData) => {
          const player = playerData.data[0];
  
          setPlayer(player);
          setPlayerName(player.name);
          setIsGoalie(player.isGoalie);
        })
        .catch((err) => {
          console.log('Error from Get Players');
          console.log(err);
        });
    } else {
      navigate("/admin");
    }
  }, [linkUri, isValidUser, playerId, navigate]);

  const handleSubmit = async e => {
    e.preventDefault();

    const playerMetaData = {
      playerId: playerId,
      playerName: playerName,
      isGoalie: isGoalie
    };

    const playerUpdated = await axios
      .put(`${linkUri}api/players`, playerMetaData, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(response => {
        return response.data;
      })
      .catch((err) => {
        console.log('Error creating player');
        console.log(err);
      });

    if (playerUpdated.modifiedCount || playerUpdated.upsertedCount) {
      setUpdateConfirmed(!updateConfirmed);

      setTimeout(() => {
        setUpdateConfirmed(false);
      }, 500);
    }
  }

  if (!player) {
    return (
      <div className="col" colSpan="5">Loading...</div>
    )
  }

  return (
    <div className="card">
      <div className="player-form mb-4">
        <form onSubmit={handleSubmit}>
          <div className="form-floating row p-3">
            <input id="player-name" type="text" className="form-control col" value={playerName} onChange={e => setPlayerName(e.target.value)} />
            <label htmlFor="player-name" className="col">Player Name</label>
          </div>
          <div className="form-check m-2">
            <input type="checkbox" className="form-check-input d-sm-flex" onChange={() => setIsGoalie(!isGoalie)} value={isGoalie} checked={isGoalie} id="is-current-player" />
            <label className="form-check-label d-sm-flex" htmlFor="is-current-player">Is player a goalie?</label>
          </div>
          <div className="row">
            <button disabled={!playerName} type="submit" className="btn btn-primary mt-4 bi-arrow-right-circle col">&nbsp;&nbsp;&nbsp;Update Player&nbsp;&nbsp;&nbsp;</button>
          </div>
          <span className={`alert-success ${updateConfirmed ? 'alert-shown' : 'alert-hidden'}`}>Player Updated!</span>
        </form>
      </div>
    </div>
  )
}

Player.propTypes = {
  token: PropTypes.string,
  unsetToken: PropTypes.func.isRequired
};