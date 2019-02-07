// Just for viewing, this code will be changed/removed once the project is under go

import { createStore } from 'redux';
import LandingPage from './landingpage.reducer';

const initialState = {
	openWizard: false
};

const store = createStore(LandingPage);

it('should start with the correct initialState', () => {
	const state = store.getState();

	expect(state).toEqual(initialState);
});
