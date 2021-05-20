import '../scss/dashboard/dashboard.scss';
import '../scss/dashboard/dashboard-views.scss';
import Logo from '../components/logo.js';
import Settings from '../components/dashboard/settings.js';
import React, { useState } from "react";
import Budget from '../components/dashboard/budget.js';
import ListOfMonthlyActivities from '../components/dashboard/list-of-monthly-activities';
import { NavLink } from 'react-router-dom';
import NewMoneyActivity from '../components/new-money-activities.js';x

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