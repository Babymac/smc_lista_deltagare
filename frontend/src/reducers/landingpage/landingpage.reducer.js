const initialState = {
	openWizard: false
};

const landingpage = (state = initialState, action) => {
	switch (action.type) {
		case 'ENGAGEWIZARD':
			return {
				...state,
				openWizard: !state.openWizard
			};

		default:
			return state;
	}
};

export default landingpage;
