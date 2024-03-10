import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import axios from 'axios';
import ScheduleModule from "./ScheduleModule";
import StandingsModule from "./StandingsModule";

function HomePage() {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8082/schedule", {
        params: { "currentSeason": true }
      })
      .then((res) => {
        setSchedule(res.data);
        // console.log(res.data)
      })
      .catch((err) => {
        console.log('Error from Schedule');
      });
  }, []);

  const scheduleList =
    schedule.length === 0
      ? <tr><td colSpan="6">No schedule found</td></tr>
      : Object.entries(schedule).map((schedule, k) => <ScheduleModule schedule={schedule} key={k} />);
  return (

      <div className="card">
        <div className='Home'>
          <div className='container'>
            <div className='col-md-12'>
              <h2 className='display-5 text-center'>Announcements</h2>
            </div>

            <div className="table">
              <p>
                  New season is fast approaching! Contact the commish to get on the roster of available players!
              </p>
              <p>
                  Draft date/time is still TBD.
              </p>
              <p>
                All captains are responsible for knowing the <a href="/rules">rules</a>, and for making their teams aware of the <a href="/rules">rules</a>.
              </p>
            </div>
          </div>

          <div className='container'>
            <div className="schedule-module">
              <h3>Schedule</h3>
              { scheduleList }
            </div>

            <div className="standings-module">
              <StandingsModule />
            </div>
          </div>
        </div>
      </div>

  )
}

export default HomePage
