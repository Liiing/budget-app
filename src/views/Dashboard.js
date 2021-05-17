import '../scss/dashboard/dashboard.scss';
import Logo from '../components/logo.js';
import Settings from '../components/dashboard/settings.js';
import React, { useState } from "react";
import Logout from '../components/Logout.js';
import Budget from '../components/budget';
import NewMoneyActivity from '../components/new-money-activity';
import Savings from '../views/Savings.js';
import { Link, useHistory } from "react-router-dom";
import { NavLink } from 'react-router-dom';

function Dashboard() {
	const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
	<div className={`dashboard mobile-dash ${isActive ? "closed" : "active"}`}>
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
	  <Logout />
		<div className="main-section">
		  <Logo />
      <div className="main-dashboard">
        <Budget />
        <NewMoneyActivity />
        <h2>test</h2>
      </div>
    </div>
	</div>
  );
}

export default Dashboard;