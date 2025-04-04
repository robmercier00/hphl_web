import { useState } from 'react';

export default function useToken() {
  const getToken = () => {
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken
  };

  const [token, setToken] = useState(getToken());

  const saveToken = userToken => {
    sessionStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken);
  };

  const deleteToken = () => {
    sessionStorage.removeItem('token');
  }

  return {
    unsetToken: deleteToken,
    setToken: saveToken,
    token: token
  }
}
