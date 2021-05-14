import '../scss/dashboard/dashboard.scss';
import Logo from '../components/logo.js';
import Settings from '../components/dashboard/settings.js';
import React, { useState } from "react";

function Dashboard() {
	const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
  	<div className="dashboard">
		  <div className={`sidebar ${isActive ? "closed" : "active"}`}>
		  	<div className="container">
		  		<div className="menu-burger" onClick={handleToggle}>
		  			<span></span>
		  			<span></span>
		  			<span></span>
		  		</div>
		  		<Settings />
		  	</div>
		  </div>
		  <div className="main-section">
		  	<Logo />
		  	<div className="main-dashboard">
		  		<div className="budget-component-here"><h1>Budget</h1></div>
		  		<div className="expense-component">
	  				<h2>test</h2>
		  		</div>
		  	</div>
		  </div>
		</div>
  );
}

export default Dashboard;