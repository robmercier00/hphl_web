import { useState, useEffect } from 'react';
import '../styles/App.css';
import axios from 'axios';
import ScheduleModule from "./ScheduleModule";
import StandingsModule from "./StandingsModule";
import AnnouncementsModule from "./AnnouncementsModule";

function HomePage() {
  const [schedule, setSchedule] = useState([]);
  const [standings, setStandings] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const linkUri = import.meta.env.VITE_BASE_URI;

  // Get schedule
  useEffect(() => {
    axios
      .get(`${linkUri}api/schedule`, {
        params: { "currentSeason": true, "nextWeek": true }
      })
      .then((res) => {
        setSchedule(res.data);
      })
      .catch((err) => {
        console.log('Error from Schedule');
        console.log(err);
      });
  }, [linkUri]);

  // Get standings
  useEffect(() => {
    axios
      .get(`${linkUri}api/standings`)
      .then((res) => {
        setStandings(res.data);
      })
      .catch((err) => {
        console.log('Error from Standings');
        console.log(err);
      });
  }, [linkUri]);

  // Get announcements
  useEffect(() => {
    axios
      .get(`${linkUri}api/announcements`, {
        params: { "mostRecent": true }
      })
      .then((res) => {
        setAnnouncements(res.data);
      })
      .catch((err) => {
        console.log('Error from Announcements');
        console.log(err);
      });
  }, [linkUri]);

  // Set Schedule
  const scheduleList =
    schedule.length === 0
      ? <table><tbody><tr><td colSpan="6">No schedule found</td></tr></tbody></table>
      : Object.entries(schedule).map((schedule, k) => <ScheduleModule schedule={schedule} key={k} />);

  // Set Standings
  const standingsList =
    standings.length === 0
      ? <tr><td colSpan="6">No standings found</td></tr>
      : standings.map((standings, k) => <StandingsModule standings={standings} key={k} />);

  const announcementsList =
    announcements.length === 0
      ? <p></p>
      : announcements.map((announcement, k) => <AnnouncementsModule announcement={announcement} key={k} />)
  
  return (
    <div className="card">
      <div className='Home'>
        <div className='container'>
          <div className='col-md-12'>
            <h2 className='display-5 text-center'>Announcements</h2>
          </div>

          <div className="table">
            { announcementsList }
          </div>
        </div>

        <div className='container'>
          <div className="schedule-module">
            <h3>Schedule</h3>
            <div>
              <em>
                All captains are responsible for knowing the <a href="/rules">rules</a>, and for making their teams aware of the <a href="/rules">rules</a>.
              </em>
            </div>
            { scheduleList }
          </div>

          <div className="standings-module">
            <h3>Standings</h3>
            <table className='table table-hover table-responsive table-striped standings-module'>
              <thead>
                <tr>
                  <td>Team</td>
                  <td>W</td>
                  <td>L</td>
                  <td>T</td>
                  <td>Pts</td>
                </tr>
              </thead>
              <tbody>
                { standingsList }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
