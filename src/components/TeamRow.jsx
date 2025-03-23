import '../styles/App.css';
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from 'axios';
import TeamPlayerRow from './TeamPlayerRow';

export default function TeamRow ({team, isValidUser}) {
  const [showHideCreate, setShowHideCreate] = useState(false);
  const [teamName, setTeamName] = useState(team.name);
  const [teamColor, setTeamColor] = useState(team.color);
  const [updateConfirmed, setUpdateConfirmed] = useState();
  const [searchPlayerNames, setSearchPlayerNames] = useState('');
  const [playersNames, setPlayersNames] = useState([]);
  const [searchOptions, setSearchOptions] = useState([]);
  const linkUri = import.meta.env.VITE_BASE_URI;

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

  useEffect(() => {
    if (isValidUser && searchPlayerNames.length > 2) {
      // retrieve players with names containing this string
      console.log("searchPlayerNames");
      console.log(searchPlayerNames);
      axios
      .get(`${linkUri}api/players`, {
        params: { search: true, searchString: searchPlayerNames}
      })
      .then((searchPlayers) => {
        setSearchOptions(searchPlayers.data);
      })
      .catch((err) => {
        console.log('Error from Get Seasons');
        console.log(err);
      });
    }
  }, [isValidUser, linkUri, searchPlayerNames, setSearchOptions]);

  const searchOptionsList = (!searchOptions)
    ? <option>No players found</option>
    : searchOptions.map((player, k) => <option value={player._id} key={k}>{player.name}</option>);

  console.log("searchOptionsList");
  console.log(searchOptionsList)
  const handleSubmit = async e => {
    e.preventDefault();

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
                  <input id="team-color" type="text" className="form-control" value={teamColor} onChange={e => setSearchPlayerNames(e.target.value)} />
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
        { isValidUser &&
          <tr>
            <td colSpan="7">
              <span onClick={() => setShowHideCreate(!showHideCreate)}>
                <i className={showHideCreate ? "bi-chevron-down" : "bi-chevron-right"} />
                Add Player to {teamName}
              </span>
              { showHideCreate &&
              <div>
                
                <input placeholder="player name search" type="text" className="form-control col" onChange={e => setSearchPlayerNames(e.target.value)} />
                { searchOptionsList.length > 0 &&
                <select >
                  { searchOptionsList }
                </select>
                }
              </div>
              }
            </td>
          </tr>
        }
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
