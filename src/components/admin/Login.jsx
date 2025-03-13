import { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import '../../styles/App.css';

async function loginUser(credentials) {
  const linkUri = import.meta.env.VITE_BASE_URI;

  // Post login creds
  const tokenValue = await axios
    .post(`${linkUri}api/login`, credentials, {
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

export default function Login({ setToken, setUser }) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleForgotPassword = async () => {
    const linkUri = import.meta.env.VITE_BASE_URI;
    // Post username
    const tokenValue = await axios
      .post(`${linkUri}api/verify`, {username: username}, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(response => {
        return response.data;
      })
      .catch((err) => {
        console.log('Error verifying user');
        console.log(err);
      });

    setUser(username);
    setToken(tokenValue.token);
  }

  const handleSubmit = async e => {
    e.preventDefault();

    const token = await loginUser({
      username,
      password
    });

    setToken(token);
  }

	return (
		<div className="card">
      <div className='Login'>
        <h3>Please log in</h3>
        <form className="login-fields" onSubmit={handleSubmit}>
          <div className="username-input">
            <input required placeholder="Username" type="text" className="form-control" onChange={e => setUsername(e.target.value)} />
          </div>
          <div>
            <input required onInvalid={e => e.target.setCustomValidity('Please enter your password')} placeholder="Password" type="password" className="form-control" onChange={e => setPassword(e.target.value)} />
          </div>
          <div>
            <button disabled={!username && !password} type="submit" className="btn btn-primary bi-arrow-right-circle"></button>
          </div>
        </form>
        { username &&
          <div>
            <span className="pwd" onClick={ () => handleForgotPassword() }>Forgot Password?</span>
          </div>
        }
			</div>
		</div>
	);

}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
  setUser: PropTypes.func
};
