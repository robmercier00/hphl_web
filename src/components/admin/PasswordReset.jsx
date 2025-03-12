import { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import '../../styles/App.css';

async function loginUser(credentials) {
  const linkUri = import.meta.env.VITE_BASE_URI;

  // Post login creds
  const tokenValue = await axios
    .put(`${linkUri}api/login`, credentials, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    .then(response => {
      return response.data.token;
    })
    .catch((err) => {
      console.log('Error logging in');
      console.log(err);
    });

    return tokenValue;
}

export default function PasswordReset({ setToken, user }) {
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();

    if (user && password) {
      const token = await loginUser({
        user,
        password
      });
      setToken(token);
    }
  }

	return (
		<div className="card">
      <div className='PasswordReset'>
        <h3>Please enter a new password</h3>
        <form className="login-fields" onSubmit={handleSubmit}>
          <div className="username-input">
            <input required placeholder={user} type="text" className="form-control" disabled />
          </div>
          <div>
            <input required onInvalid={e => e.target.setCustomValidity('Please enter your password')} placeholder="New Password" type="password" className="form-control" onChange={e => setPassword(e.target.value)} />
          </div>
          <div>
            <button disabled={!password} type="submit" className="btn btn-primary bi-arrow-right-circle"></button>
          </div>
        </form>
			</div>
		</div>
	);

}

PasswordReset.propTypes = {
  setToken: PropTypes.func.isRequired,
  user: PropTypes.string
};
