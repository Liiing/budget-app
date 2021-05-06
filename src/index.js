import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './views/Login.js';
import Dashboard from './views/Dashboard.js';
import reportWebVitals from './reportWebVitals';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './index.scss';

const rootElement = document.getElementById('root');

ReactDOM.render(
	<Router>
		<Switch>
			<Route exact path="/budget-app" component={Login} />
        	<Route path="/Dashboard" component={Dashboard} />
		</Switch>
	</Router>,
	rootElement
);
