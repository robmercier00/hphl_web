import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import axios from 'axios';
import ScheduleModule from "./ScheduleModule";

function Schedule() {
  const [schedule, setSchedule] = useState([]);
  const linkUri = import.meta.env.VITE_BASE_URI;

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
      : Object.entries(schedule).map((schedule, k) => <ScheduleModule schedule={schedule} key={k} />);

  return (
    <div className="card">
      <div className='ShowGamesSchedule'>
        <div className='container'>
          <div className='col-md-12'>
              <h2 className='display-5 text-center'>Games Schedule</h2>
          </div>
          <div>
            <em>
              All captains are responsible for knowing the <a href="/rules">rules</a>, and for making their teams aware of the <a href="/rules">rules</a>.
            </em>
          </div>
          { scheduleList }
        </div>
      </div>
    </div>
  )
}

export default Schedule;