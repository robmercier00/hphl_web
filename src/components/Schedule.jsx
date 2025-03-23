import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import '../styles/App.css';
import axios from 'axios';
import PropTypes from "prop-types";
import ScheduleModule from "./ScheduleModule";

export default function Schedule({token, unsetToken}) {
  const [isValidUser, setIsValidUser] = useState(true);
  const [schedule, setSchedule] = useState([]);
  const linkUri = import.meta.env.VITE_BASE_URI;
  const location = useLocation();
  const tokenId = token;
  const isAdmin = location.pathname.split("/")[1] === 'admin';

  useEffect(() => {
    if (isAdmin && tokenId) {
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
    }
  }, [linkUri, tokenId, unsetToken, isAdmin]);

  useEffect(() => {
    axios
      .get(`${linkUri}api/schedule`, {
        params: { "currentSeason": true }
      })
      .then((res) => {
        setSchedule(res.data);
      })
      .catch((err) => {
        console.log('Error from Schedule');
        console.log(err);
      });
  }, [linkUri]);

  const scheduleList =
    schedule.length === 0
      ? <table><tbody><tr><td colSpan="6">No schedule found</td></tr></tbody></table>
      : Object.entries(schedule).map((schedule, k) => <ScheduleModule isAdmin={isAdmin} isValidUser={isValidUser} schedule={schedule} key={k} />);

  return (
    <div className="card">
      <div className='GamesSchedule'>
        <div className='container'>
          <div className='col-md-12'>
              <h2 className='display-5 text-center'>Games Schedule</h2>
          </div>
          {!isAdmin && 
          <div>
            <em>
              All captains are responsible for knowing the <a href="/rules">rules</a>, and for making their teams aware of the <a href="/rules">rules</a>.
            </em>
          </div>
          }
          { scheduleList }
        </div>
      </div>
    </div>
  )
}

Schedule.propTypes = {
  token: PropTypes.string,
  unsetToken: PropTypes.func
}
