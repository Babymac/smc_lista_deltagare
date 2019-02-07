/* eslint-disable */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
// BrowserRouter, change HashRouter to this when github pages is up
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import LandingpageView from './components/landingpage';
import Store from './store/store';
//---------------------------------------
// Imports and constants
//---------------------------------------

class App extends Component {
	render() {
		return (
			<Provider store={Store}>
				<div>
					<Router>
						<div>
							<Route exact path="/" render={LandingpageView} />
						</div>
					</Router>
				</div>
			</Provider>
		);
	}
}

export default App;
