import React from 'react';
import ReactDOM from 'react-dom';
import Login from './views/Login.js';
import Dashboard from './views/Dashboard.js';
import Savings from './views/Savings.js';
import Signup from './views/Signup';
import './index.scss';
import { AuthProvider } from './AuthContext';
import PrivateRoute from './PrivateRoute';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

// Frontend real vh 
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

const rootElement = document.getElementById('root');

ReactDOM.render(
	<Router basename="/budget-app">
		<Route render={({ location }) => (
			<AuthProvider>
				<TransitionGroup>
						<CSSTransition
						key={location.pathname}
						classNames="fade"
						timeout={600}
						>
					<Switch location={location}>
						<Route exact path="/login" component={Login} />
						<Route exact path="/signup" component={Signup} />
						<PrivateRoute path="/dashboard" component={Dashboard} />
						<PrivateRoute path="/savings" component={Savings} />
						<PrivateRoute path="/"><Redirect to="/dashboard" /></PrivateRoute>
					</Switch>
					</CSSTransition>
				</TransitionGroup>
			</AuthProvider>
		)}>
		</Route>
	</Router>,
	rootElement
);
