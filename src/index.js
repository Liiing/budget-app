import React from 'react';
import ReactDOM from 'react-dom';
import Login from './views/Login.js';
import Dashboard from './views/Dashboard.js';
import Savings from './views/Savings.js';
import Signup from './views/Signup';
import './index.scss';
import { AuthProvider } from './AuthContext';
import PrivateRoute from './PrivateRoute';
import UnauthenticatedRoute from './UnauthenticatedRoute';
import {Provider} from 'react-redux';
import store from './redux/store.js';
// Main Imports of all files/views

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

// Frontend real vh 
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

const rootElement = document.getElementById('root') || document.createElement('div') ;

// Main render function for all sites/views
ReactDOM.render(
	<Router basename="/budget-app">
		<AuthProvider> 
			<Provider store={store}>
				<Switch>
					<UnauthenticatedRoute exact path="/login" component={Login} />
					<UnauthenticatedRoute exact path="/signup" component={Signup} />
					<PrivateRoute path="/dashboard" component={Dashboard} />
					<PrivateRoute path="/savings" component={Savings} />
					<PrivateRoute path="/"><Redirect to="/dashboard" /></PrivateRoute>
				</Switch>
			</Provider>
		</AuthProvider>
	</Router>,
	rootElement
);
