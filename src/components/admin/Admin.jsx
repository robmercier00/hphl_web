import '../../styles/App.css';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Login from "./Login.jsx";
import PasswordReset from "./PasswordReset.jsx";

export default function Admin({ token, setToken, unsetToken}) {
  const [user, setUser] = useState();

  if(!token) {
    return <Login setToken={setToken} setUser={setUser} />
  } else if (token && token === 'reset-password') {
    return <PasswordReset setToken={setToken} user={user} />
  }

	return (
		<div className="card">
      <div className='Admin row'>
        <div className="col">
          <a href="/admin/manage-seasons">Manage Seasons</a>
        </div>
        <div className="col">
          <a href="/admin/manage-schedule">Manage Current Season Schedule</a>
        </div>
        <div className="col">
          <a href="/admin/manage-players">Manage Players</a>
        </div>
			</div>
		</div>
	);

}

Admin.propTypes = {
  token: PropTypes.string,
  setToken: PropTypes.func.isRequired,
  unsetToken: PropTypes.func.isRequired
};
