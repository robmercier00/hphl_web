import '../../styles/App.css';
import axios from 'axios';
import PropTypes from 'prop-types';
import SeasonsList from './SeasonsList.jsx';
import { useState, useEffect } from 'react';

export default function SeasonList({ unsetToken, token }) {
  const [isValidUser, setIsValidUser] = useState(false);
  const [seasonName, setSeasonName] = useState();
  const [seasonStartDate, setSeasonStartDate] = useState();
  const [seasonEndDate, setSeasonEndDate] = useState();
  const [isCurrentSeason, setIsCurrentSeason] = useState(true);
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
        console.log('Error from Get Seasons');
        console.log(err);
      });
  }, [linkUri, tokenId, unsetToken]);

  useEffect(() => {
  }, [isValidUser]);

  const seasonsList =
    isValidUser
    ? <SeasonsList isValidUser={isValidUser} token={token} unsetToken={unsetToken} />
    : ''

  const handleSubmit = async e => {
    e.preventDefault();

    const linkUri = import.meta.env.VITE_BASE_URI;
    const seasonMetaData = {
      seasonName: seasonName,
      seasonStartDate: seasonStartDate,
      seasonEndDate: seasonEndDate,
      isCurrentSeason: isCurrentSeason
    };
    const seasonCreated = await axios
      .post(`${linkUri}api/seasons`, seasonMetaData, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(response => {
        return response.data;
      })
      .catch((err) => {
        console.log('Error creating season');
        console.log(err);
      });

    if (seasonCreated._id) {
      setCreateConfirmed(!createConfirmed);

      setTimeout(() => {
        setCreateConfirmed(false);
      }, 500);

      setTimeout(() => {
        setSeasonName('');
        setSeasonStartDate('');
        setSeasonEndDate('');
        setIsCurrentSeason(false);
        setShowHideCreate(false);
      }, 750);
    }
    return seasonCreated;
  }

  return (
    <div className="Seasons container">
      <div className="row mb-4">
        <div className="col">
          <div onClick={() => setShowHideCreate(!showHideCreate)}>
            <h2 className="show-hide-create">
              <i className={showHideCreate ? "bi-chevron-down" : "bi-chevron-right"} />
              Create a new season
            </h2>
          </div>
          { showHideCreate &&
          <form onSubmit={handleSubmit}>
            <div className="form-floating row p-3">
              <input id="season-name" type="text" className="form-control col" onChange={e => setSeasonName(e.target.value)} />
              <label htmlFor="season-name" className="col">Season Name (example: Spring 2024 Thursdays)</label>
            </div>
            <div className="form-floating row p-3">
              <input type="date" id="season-start-date" className="form-control col" onChange={e => setSeasonStartDate(e.target.value)} />
              <label htmlFor="season-start-date" className="col">Season Start</label>
            </div>
            <div className="form-floating row p-3">
              <input type="date" id="season-end-date" className="form-control col" onChange={e => setSeasonEndDate(e.target.value)} />
              <label htmlFor="season-end-date" className="col">Season End</label>
            </div>
            <div className="form-check m-2">
              <input type="checkbox" className="form-check-input d-sm-flex" onChange={() => setIsCurrentSeason(!isCurrentSeason)} value={isCurrentSeason} checked={isCurrentSeason} id="is-current-season" />
              <label className="form-check-label d-sm-flex" htmlFor="is-current-season">Current Season?</label>
              <div className="col">
                <button disabled={!seasonName || !seasonStartDate || !seasonEndDate} type="submit" className="btn btn-primary mt-4 bi-arrow-right-circle col">&nbsp;&nbsp;&nbsp;Create Season&nbsp;&nbsp;&nbsp;</button>
              </div>
              <span className={`alert-success ${createConfirmed ? 'alert-shown' : 'alert-hidden'}`}>Season Created!</span>
            </div>
          </form>
          }
        </div>
      </div>

      <div className="row mt-4">
        <div className="col">
          <h2>List Seasons</h2>
          {seasonsList}
        </div>
      </div>

    </div>
  );
}

SeasonList.propTypes = {
  token: PropTypes.string,
  unsetToken: PropTypes.func.isRequired
};
