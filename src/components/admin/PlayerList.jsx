import '../../styles/App.css';
import axios from 'axios';
import PropTypes from 'prop-types';
import PlayersList from './PlayersList.jsx';
import { useState, useEffect } from 'react';

export default function PlayerList({ unsetToken, token }) {
  const [isValidUser, setIsValidUser] = useState(false);
  const [playerName, setPlayerName] = useState();
  const [isGoalie, setIsGoalie] = useState();
  const [showHideCreate, setShowHideCreate] = useState(false);
  const [createConfirmed, setCreateConfirmed] = useState(false);
  const linkUri = import.meta.env.VITE_BASE_URI;
  const tokenId = token;

  useEffect(() => {
    axios
      .get(`${linkUri}api/verify`, {
        params: { "token": tokenId }
      })
      .then((res) => {
        setIsValidUser(res.data.isValid);

        if (res && !res.data.isValid) {
          unsetToken();
        }
      })
      .catch((err) => {
        console.log('Error from Get Players');
        console.log(err);
      });
  }, [linkUri, tokenId, unsetToken]);

  useEffect(() => {
  }, [isValidUser]);

  const playersList =
    isValidUser
    ? <PlayersList isValidUser={isValidUser} />
    : ''

  const handleSubmit = async e => {
    e.preventDefault();

    const linkUri = import.meta.env.VITE_BASE_URI;
    const playerMetaData = {
      playerName: playerName,
      isGoalie: isGoalie
    };
    const playerCreated = await axios
      .post(`${linkUri}api/players`, playerMetaData, {
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

    if (playerCreated._id) {
      setCreateConfirmed(!createConfirmed);

      setTimeout(() => {
        setCreateConfirmed(false);
      }, 500);

      setTimeout(() => {
        setPlayerName('');
        setIsGoalie(false);
        setShowHideCreate(false);
      }, 750);
    }
  }

  return (
    <div className="Players container">
      <div className="row mb-4">
        <div className="col">
          <div onClick={() => setShowHideCreate(!showHideCreate)}>
            <h2 className="show-hide-create">
              <i className={showHideCreate ? "bi-chevron-down" : "bi-chevron-right"} />
              Create a new player
            </h2>
          </div>
          { showHideCreate &&
          <form onSubmit={handleSubmit}>
            <div className="form-floating row p-3">
              <input id="season-name" type="text" className="form-control col" onChange={e => setPlayerName(e.target.value)} />
              <label htmlFor="season-name" className="col">Player Name</label>
            </div>
            <div className="form-check m-2">
              <input type="checkbox" className="form-check-input d-sm-flex" onChange={() => setIsGoalie(!isGoalie)} value={isGoalie} id="is-goalie" />
              <label className="form-check-label d-sm-flex" htmlFor="is-goalie">Is player a goalie?</label>
            </div>
            <div className="row">
              <button disabled={!playerName} type="submit" className="btn btn-primary mt-4 bi-arrow-right-circle col">&nbsp;&nbsp;&nbsp;Create Player&nbsp;&nbsp;&nbsp;</button>
            </div>
            <span className={`alert-success ${createConfirmed ? 'alert-shown' : 'alert-hidden'}`}>Player Created!</span>
          </form>
          }
        </div>
      </div>

      <div className="row mt-4">
        <div className="col">
          <h2>List Players</h2>
          {playersList}
        </div>
      </div>

    </div>
  );
}

PlayerList.propTypes = {
  token: PropTypes.string,
  unsetToken: PropTypes.func.isRequired
};
