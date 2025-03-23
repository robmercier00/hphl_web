import '../../styles/App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from "prop-types";
import TeamRow from '../TeamRow';
import { useNavigate } from "react-router-dom";

export default function SeasonTeams({seasonId, isValidUser}) {
  const [teams, setTeams] = useState({});
  const [showHideCreate, setShowHideCreate] = useState(false);
  const [teamName, setTeamName] = useState();
  const [teamColor, setTeamColor] = useState();
  const [createConfirmed, setCreateConfirmed] = useState(false);
  const navigate = useNavigate();
  const linkUri = import.meta.env.VITE_BASE_URI;

  useEffect(() => {
    if (isValidUser) {
      axios
      .get(`${linkUri}api/teams`, {
        params: { seasonId: seasonId}
      })
      .then((seasonTeams) => {
        setTeams(seasonTeams.data);
      })
      .catch((err) => {
        console.log('Error from Get Seasons');
        console.log(err);
      });
    } else {
      navigate("/admin");
    }
  }, [linkUri, seasonId, isValidUser, navigate]);

  const handleSubmit = async e => {
    e.preventDefault();

    const linkUri = import.meta.env.VITE_BASE_URI;
    const teamMetaData = {
      teamName: teamName,
      teamColor: teamColor,
      season: seasonId
    };

    if (isValidUser) {
      const teamCreated = await axios
        .post(`${linkUri}api/teams`, teamMetaData, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        })
        .then(response => {
          return response.data;
        })
        .catch((err) => {
          console.log('Error creating team');
          console.log(err);
        });
  
      if (teamCreated._id) {
        setCreateConfirmed(!createConfirmed);
  
        setTimeout(() => {
          setCreateConfirmed(false);
        }, 500);
  
        setTimeout(() => {
          setTeamName('');
          setTeamColor('');
          setShowHideCreate(false);
        }, 750);
      }
    }
  }

  const teamsList =
    teams.length === 0
      ? <table><tbody><tr><td colSpan="6"><div>No teams found</div></td></tr></tbody></table>
      : Object.entries(teams).map((team, k) => <TeamRow team={team[1]} isValidUser={isValidUser} key={k} />);

  return (
    <div className="Teams container">
      <div className="row mb-4">
        <div className="col">
          <div onClick={() => setShowHideCreate(!showHideCreate)}>
            <h2 className="show-hide-create">
              <i className={showHideCreate ? "bi-chevron-down" : "bi-chevron-right"} />
              Add Team
            </h2>
          </div>
          { showHideCreate &&
          <form onSubmit={handleSubmit}>
            <div className="form-floating row p-3">
              <input id="team-name" type="text" className="form-control col" onChange={e => setTeamName(e.target.value)} />
              <label htmlFor="team-name" className="col">Team Name</label>
            </div>
            <div className="form-floating row p-3">
              <input id="team-color" type="text" className="form-control col" onChange={e => setTeamColor(e.target.value)} />
              <label htmlFor="team-color" className="col">Team Color</label>
            </div>
            <div className="row">
              <button disabled={!teamName} type="submit" className="btn btn-primary mt-4 bi-arrow-right-circle col">&nbsp;&nbsp;&nbsp;Create Team&nbsp;&nbsp;&nbsp;</button>
            </div>
            <span className={`alert-success ${createConfirmed ? 'alert-shown' : 'alert-hidden'}`}>Team Created!</span>
          </form>
          }
        </div>
      </div>
      <div className="row mt-4">
        <div className="col">
          <h2>List Teams</h2>
          {teamsList}
        </div>
      </div>
    </div>
  )
}

SeasonTeams.propTypes = {
  seasonId: PropTypes.string.isRequired,
  isValidUser: PropTypes.bool
}
