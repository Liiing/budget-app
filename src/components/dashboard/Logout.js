import '../../scss/dashboard/logout.scss';
import { useAuth } from '../../AuthContext'
import { useHistory } from 'react-router-dom';
import React, { useState } from "react";

// Logout function to handle logout on button click / uses logout function from firebase
function Logout() {
const {currentUser, logout} = useAuth();
const history = useHistory();
const [error, setError] = useState("");

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push('/login');
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