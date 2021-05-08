import React from 'react';
import ReactDOM from 'react-dom';
import Login from './views/Login.js';
import Dashboard from './views/Dashboard.js';
import Signup from './views/Signup';
import './index.scss';
import { AuthProvider } from './AuthContext';
import PrivateRoute from './PrivateRoute';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

const rootElement = document.getElementById('root');

ReactDOM.render(
	<Router>
		<AuthProvider>
			<Switch>
				<Route exact path="/login" component={Login} />
				<Route exact path="/signup" component={Signup} />
				<PrivateRoute path="/dashboard" component={Dashboard} />
				<PrivateRoute path="/"><Redirect to="/dashboard" /></PrivateRoute>
			</Switch>
		</AuthProvider>
	</Router>,
	rootElement
);
