import '../../styles/App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";

export default function Season({ token, unsetToken }) {
  const [isValidUser, setIsValidUser] = useState(true);
  const [season, setSeason] = useState();
  const [seasonName, setSeasonName] = useState();
  const [seasonStartDate, setSeasonStartDate] = useState();
  const [seasonEndDate, setSeasonEndDate] = useState();
  const [isCurrentSeason, setIsCurrentSeason] = useState(true);
  const [updateConfirmed, setUpdateConfirmed] = useState(false);
  const navigate = useNavigate();
  const linkUri = import.meta.env.VITE_BASE_URI;
  const seasonId = window.location.search.split("=")[1];
  const tokenId = token;

  useEffect(() => {
    if (tokenId) {
      (async () => {
        await axios
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
      });
    } else {
      navigate("/admin");
    }
  }, [linkUri, tokenId, unsetToken, navigate]);

  useEffect(() => {
    if (isValidUser) {
      axios
        .get(`${linkUri}api/seasons/${seasonId}`)
        .then((seasonData) => {
          const season = seasonData.data[0];
          const startDate = new Date(season.start_date).toISOString().split("T")[0];
          const endDate = new Date(season.end_date).toISOString().split("T")[0];

          setSeason(season);
          setSeasonName(season.name);
          setIsCurrentSeason(season.currentSeason);
          setSeasonStartDate(startDate);
          setSeasonEndDate(endDate);
        })
        .catch((err) => {
          console.log('Error from Get Seasons');
          console.log(err);
        });
    } else {
      navigate("/admin");
    }
  }, [linkUri, isValidUser, seasonId, navigate]);

  const handleSubmit = async e => {
    e.preventDefault();

    const seasonMetaData = {
      seasonId: seasonId,
      seasonName: seasonName,
      seasonStartDate: seasonStartDate,
      seasonEndDate: seasonEndDate,
      isCurrentSeason: isCurrentSeason
    };

    const seasonUpdated = await axios
      .put(`${linkUri}api/seasons`, seasonMetaData, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(response => {
        return response.data;
      })
      .catch((err) => {
        console.log('Error updating season');
        console.log(err);
      });

    if (seasonUpdated.modifiedCount || seasonUpdated.upsertedCount) {
      setUpdateConfirmed(!updateConfirmed);

      setTimeout(() => {
        setUpdateConfirmed(false);
      }, 500);
    }
  }

  if (!season) {
    return (
      <div className="col" colSpan="5">Loading...</div>
    )
  }

  return (
    <div className="card">
      <div className="season-form mb-4">
        <form onSubmit={handleSubmit}>
          <div className="form-floating row p-3">
            <input id="season-name" type="text" className="form-control col" value={seasonName} onChange={e => setSeasonName(e.target.value)} />
            <label htmlFor="season-name" className="col">Season Name (example: Spring 2024 Thursdays)</label>
          </div>
          <div className="form-floating row p-3">
            <input type="date" id="season-start-date" className="form-control col" value={seasonStartDate} onChange={e => setSeasonStartDate(e.target.value)} />
            <label htmlFor="season-start-date" className="col">Season Start</label>
          </div>
          <div className="form-floating row p-3">
            <input type="date" id="season-end-date" className="form-control col" value={seasonEndDate} onChange={e => setSeasonEndDate(e.target.value)} />
            <label htmlFor="season-end-date" className="col">Season End</label>
          </div>
          <div className="form-check m-2">
            <input type="checkbox" className="form-check-input d-sm-flex" onChange={() => setIsCurrentSeason(!isCurrentSeason)} value={isCurrentSeason} checked={isCurrentSeason} id="is-current-season" />
            <label className="form-check-label d-sm-flex" htmlFor="is-current-season">Current Season?</label>
          </div>
          <div className="row justify-content-end">
            <div className="col">
              <button disabled={!seasonName || !seasonStartDate || !seasonEndDate} type="submit" className="btn btn-primary mt-4 bi-arrow-right-circle">&nbsp;&nbsp;Update Season&nbsp;&nbsp;</button>
            </div>
          </div>
          <span className={`alert-success ${updateConfirmed ? 'alert-shown' : 'alert-hidden'}`}>Season Updated!</span>
        </form>
      </div>

      <div className="row align-self-start">
        <div className="col">
          <a href={"/admin/teams?season=" + seasonId}>
            <button className="btn btn-secondary">Manage Teams&nbsp;<i className="bi-arrow-right-circle"></i></button>
          </a>
        </div>
      </div>
    </div>
  )
}

Season.propTypes = {
  token: PropTypes.string,
  unsetToken: PropTypes.func.isRequired
};