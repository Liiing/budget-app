import '../scss/logout.scss';
import { useAuth } from '../AuthContext'
import { useHistory } from 'react-router-dom';
import React, { useState } from "react";

function Logout() {
const {currentUser, logout} = useAuth();
const history = useHistory();
const [error, setError] = useState("");

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push('/login')
    } catch {
      setError('Failed to log out');
    }
  }

  return (
  	<button className="logout" onClick={handleLogout}>
		  Logout
		</button>
  );
}

export default Logout;