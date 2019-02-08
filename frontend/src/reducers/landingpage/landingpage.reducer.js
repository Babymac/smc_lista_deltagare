const initialState = {
	spinner: false,
	validFile: true,
	file: {
		fileName: '',
		preview: '',
		size: 0,
		type: ''
	},
};

const landingpage = (state = initialState, action) => {
	switch (action.type) {
		case 'SPINNER':
			return {
				...state,
				spinner: !state.spinner
			};

		case 'VALID_FILE':
			return {
				...state,
				validFile: action.data
			};

		case 'FILE':
			const { name, preview, size, type } = action.data[0];
			return {
				...state,
				file: {
					fileName: name,
					preview,
					size,
					type
				}
			};

		default:
			return state;
	}
};

export default landingpage;
