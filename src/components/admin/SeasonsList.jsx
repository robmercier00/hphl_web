import { useState, useEffect } from 'react';
import '../../styles/App.css';
import axios from 'axios';
import PropTypes from 'prop-types';
import SeasonRow from './SeasonRow';
import { useNavigate } from "react-router-dom";

export default function SeasonsList({isValidUser}) {
  const navigate = useNavigate();
  const [seasons, setSeasons] = useState([]);
  const linkUri = import.meta.env.VITE_BASE_URI;

  useEffect(() => {
    if (isValidUser) {
      axios
      .get(`${linkUri}api/seasons`)
      .then((res) => {
        setSeasons(res.data);
      })
      .catch((err) => {
        console.log('Error from Get Seasons');
        console.log(err);
      });
    } else {
      navigate("/admin");
    }
  }, [linkUri, isValidUser, navigate]);

  const seasonsList =
    seasons.length === 0
    ? <tr><td colSpan="4">No Seasons found</td></tr>
    : seasons.map((season, k) => <SeasonRow isValidUser={isValidUser} season={season} key={k} />);

  return (
    <table className="table table-hover table-responsive table-striped">
      <thead>
        <tr className="row">
          <th className="col-6">Name</th>
          <th className="col">Start Date</th>
          <th className="col">End Date</th>
          <th className="col">Current?</th>
          <th className="col"></th>
        </tr>
      </thead>
      <tbody className="">{seasonsList}</tbody>
    </table>
  )
}

SeasonsList.propTypes = {
  isValidUser: PropTypes.bool.isRequired
}