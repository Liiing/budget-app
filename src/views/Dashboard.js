import '../scss/dashboard/dashboard.scss';
import Logo from '../components/logo.js';
import React, { useState } from "react";

function Dashboard() {
	const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
  	<div class="dashboard">
		  <div className={`sidebar ${isActive ? "active" : "closed"}`}>
		  	<div className="container">
		  		<div className="menu-burger" onClick={handleToggle}>
		  			<span></span>
		  			<span></span>
		  			<span></span>
		  		</div>
		  		<div className="settings">
		  			<div className="settings-img"></div>
		  		</div>
		  	</div>
		  </div>
		  <div class="main-section">
		  	<Logo />
		  	<div class="main-dashboard">
		  		<div class="budget-component-here"><h1>Budget</h1></div>
		  		<div class="expense-component">
	  				<h2>test</h2>
		  		</div>
		  	</div>
		  </div>
		</div>
  );
}

export default Dashboard;