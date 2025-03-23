import '../styles/App.css';
import { useState } from 'react';
import axios from 'axios';
import PropTypes from "prop-types";
import GamePlayerStats from "./GamePlayerStats";


export default function GameModule({ isAdmin, isValidUser, game }) {
  const canEdit = (isAdmin && isValidUser);
  const linkUri = import.meta.env.VITE_BASE_URI;

  const [isExpanded, setIsExpanded] = useState(canEdit ? true : false);
  const [gameHomePlayerStatsList, setGameHomePlayerStatsList] = useState(canEdit ? game.homeTeamPlayers : []);
  const [gameAwayPlayerStatsList, setGameAwayPlayerStatsList] = useState(canEdit ? game.awayTeamPlayers : []);
  const [homeTeamScore, setHomeTeamScore] = useState(game.homeTeamScore);
  const [awayTeamScore, setAwayTeamScore] = useState(game.awayTeamScore);
  const [updateConfirmed, setUpdateConfirmed] = useState(false);

  function getGamePlayerStats() {
    if (!canEdit) {
      setIsExpanded(!isExpanded);
      setGameHomePlayerStatsList(!isExpanded ? game.homeTeamPlayers : []);
      setGameAwayPlayerStatsList(!isExpanded ? game.awayTeamPlayers : []);
    }
  }

  const setHomeScore = (e => {
    game.homeTeamScore = +e;
    setHomeTeamScore(+e);
  });

  const setAwayScore = (e => {
    game.awayTeamScore = +e;
    setAwayTeamScore(+e);
  });

  const setHomePlayers = (() => {
    setGameHomePlayerStatsList(gameHomePlayerStatsList);
  });

  const setAwayPlayers = (() => {
    setGameAwayPlayerStatsList(gameAwayPlayerStatsList);
  });

  const handleSubmit = async e => {
    e.preventDefault();
    game._id = game._id.toString();
    game.homeTeam = game.homeTeam.toString();
    game.awayTeam = game.awayTeam.toString();
    game.season = game.season.toString();
    console.log("game");
    console.log(game);

    if (canEdit) {
      const scheduleUpdated = await axios
        .put(`${linkUri}api/schedule`, game, {
          params: { game },
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(response => {
          return response.data;
        })
        .catch((err) => {
          console.log('Error updating game');
          console.log(err);
        });
  
      if (scheduleUpdated) {
        setUpdateConfirmed(!updateConfirmed);
  
        setTimeout(() => {
          setUpdateConfirmed(false);
        }, 500);
      }
    }
  }

  return (
    <>
      <tr
        onClick={getGamePlayerStats}
        className="game-expander"
        data-bs-toggle="collapse"
        data-bs-target={"#gs" + game._id[0]}>
        <td className='text-center sched-time'>
          <i className={ isExpanded ? 'bi-caret-down-fill expand-icon' : 'bi-caret-right-fill expand-icon'}></i> {game.time}
        </td>
        <td className='sched-team'>
          <span>{game.homeTeamName}</span>
        </td>
        <td className='text-center sched-score'>
          {canEdit &&
            <div>
              <input id="home-team-score" type="number" min="0" className="form-control col" value={homeTeamScore ?? ''} onChange={e => setHomeScore(e.target.value)} />
            </div>
          }
          {!canEdit &&
            <span>{game.homeTeamScore}</span>
          }
        </td>
        <td className='sched-team'>
          {game.awayTeamName}
        </td>
        <td className='text-center sched-score'>
          {canEdit &&
            <div>
              <input id="home-team-score" type="number" min="0" className="form-control col" value={awayTeamScore ?? ''} onChange={e => setAwayScore(e.target.value)} />
            </div>
          }
          {!canEdit &&
            <span>{game.awayTeamScore}</span>
          }
        </td>
      </tr>
      {isExpanded &&
      <tr className="game-stats-collapse" id={"gs"+game._id[0]}>
        <GamePlayerStats
          gameId={game._id[0]}
          gameHomePlayerStatsList={gameHomePlayerStatsList}
          setHomePlayers={setHomePlayers}
          gameAwayPlayerStatsList={gameAwayPlayerStatsList}
          setAwayPlayers={setAwayPlayers}
          canEdit={canEdit} />
      </tr>
      }
      {canEdit &&
      <tr>
        <td colSpan="6">
          <div>
            <button type="submit" onClick={handleSubmit} className="btn btn-primary">Save Game</button>
          </div>
          <span className={`alert-success ${updateConfirmed ? 'alert-shown' : 'alert-hidden'}`}>Season Updated!</span>
        </td>
      </tr>
      }
    </>
  )
}

GameModule.propTypes = {
  isAdmin: PropTypes.bool,
  isValidUser: PropTypes.bool,
  game: PropTypes.object.isRequired
}