import '../scss/dashboard/dashboard.scss';
import '../scss/dashboard/savings.scss';
import Logo from '../components/logo.js';
import Settings from '../components/dashboard/settings.js';
import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import NewGoal from '../components/dashboard/new-goal';
import Goals from '../components/dashboard/goals';


function Savings() {
	const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
	<div className={`dashboard saving mobile-dash ${isActive ? "closed" : "active"}`}>
		<div className={`sidebar mobile ${isActive ? "closed" : "active"}`}>
        <div className="container">
          <div className="menu-burger" onClick={handleToggle}>
              <span></span>
              <span></span>
              <span></span>
          </div>
          <div className="dashboard-views">
            <NavLink activeClassName="active" to="/dashboard">D</NavLink>
            <NavLink activeClassName="active" to="/savings">S</NavLink>
          </div>
          <Settings />
         </div>
		</div>
		<div className="main-section">
		  <Logo />
      <NewGoal />
      <Goals />
		</div>
	</div>
  );
}

export default Savings;