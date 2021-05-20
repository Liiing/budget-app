import '../scss/dashboard/dashboard.scss';
import '../scss/dashboard/dashboard-views.scss';
import Logo from '../components/logo.js';
import Settings from '../components/dashboard/settings.js';
import React, { useState } from "react";
import Logout from '../components/Logout.js';
import Budget from '../components/dashboard/budget.js';
import NewMoneyActivity from '../components/dashboard/new-money-activity';
import Savings from '../views/Savings.js';
import { Link, useHistory } from "react-router-dom";
import { NavLink } from 'react-router-dom';

function Dashboard() {
  console.log("test");
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
		<div className="main-section">
		  <Logo />
      <div className="main-dashboard">
        <div className="budget-and-new-money-activity-container">
          <NewMoneyActivity />
          <Budget />
        </div>
        <h2>test</h2>
      </div>
    </div>
	</div>
  );
}

export default Dashboard;