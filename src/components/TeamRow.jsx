import '../styles/App.css';
import {useState} from "react";
import PropTypes from "prop-types";
import axios from 'axios';
import TeamPlayerRow from './TeamPlayerRow';

export default function TeamRow ({team, isValidUser}) {
  const [teamName, setTeamName] = useState(team.name);
  const [teamColor, setTeamColor] = useState(team.color);
  const [updateConfirmed, setUpdateConfirmed] = useState();

  const sortedPlayers = team.players.sort((a, b) => {
    if (typeof a.isGoalie !== 'undefined' && typeof b.isGoalie !== 'undefined') {
      return 0;
    }

    if (typeof a.isGoalie !== 'undefined' && typeof b.isGoalie === 'undefined') {
      return 1;
    }

    if (typeof a.isGoalie === 'undefined' && typeof b.isGoalie !== 'undefined') {
      return -1;
    }
  });

  const handleSubmit = async e => {
    e.preventDefault();

    const linkUri = import.meta.env.VITE_BASE_URI;
    const teamMetaData = {
      teamId: team._id,
      teamName: teamName,
      teamColor: teamColor,
      season: team.season
    };

    if (isValidUser) {
      const teamCreated = await axios
        .put(`${linkUri}api/teams`, teamMetaData, {
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
        setUpdateConfirmed(!updateConfirmed);
  
        setTimeout(() => {
          setUpdateConfirmed(false);
        }, 500);
      }
    }
  }

  return (
    <table className="table table-hover table-responsive table-striped">
      <thead>
        <tr className="date-header text-center">
          <th colSpan="9">
            { isValidUser &&

              <form onSubmit={handleSubmit} className="row">
                <span className="col">
                  <label htmlFor="team-name">Team Name</label>
                  <input id="team-name" type="text" className="form-control" value={teamName} onChange={e => setTeamName(e.target.value)} />
                </span>
                <span className="col">
                  <label htmlFor="team-color" className="col">Team Color</label>
                  <input id="team-color" type="text" className="form-control" value={teamColor} onChange={e => setTeamColor(e.target.value)} />
                </span>
                <span className="col">
                  <button disabled={!teamName} type="submit" className="btn btn-primary mt-4 bi-arrow-right-circle">Update Team</button>
                </span>
              </form>

            }

            { !isValidUser && 
            <div>
              {team.name}{(team.color ? (" - " + team.color) : "")}
            </div>
            }
          </th>
        </tr>
        <tr>
          <td className="rosters-player">Player</td>
          <td className="text-center rosters-stats">Goals</td>
          <td className="text-center rosters-stats">Assists</td>
          <td className="text-center rosters-stats">Points</td>
          <td></td>
          <td className="text-center rosters-ga-stats">Goals Against</td>
          <td className="text-center rosters-stats">GAA</td>
          <td className="text-center rosters-stats">Shutouts</td>
        </tr>
      </thead>
      <tbody className="">
        { sortedPlayers.map((player, k) => <TeamPlayerRow player={player} key={k} />) }
      </tbody>
    </table>
  );
};

TeamRow.propTypes = {
  team: PropTypes.object.isRequired,
  isValidUser: PropTypes.bool
}
