import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import {
	fileName,
	validFile,
	spinner,
} from '../../reducers/landingpage/landingpage.actions';

import Landingpage from './landingpage';
//---------------------------------------
// Imports and constants
//---------------------------------------
function mapStateToProps(state) {
	const { landingpage } = state;
	return { landingpage };
}

function mapDispatchToProps(dispatch) {
	const actions = bindActionCreators({ fileName, validFile, spinner }, dispatch);
	return { actions };
}

const LandingpageContainer = compose(
	connect(
		mapStateToProps,
		mapDispatchToProps
	),
	withHandlers({
		uploadFile: props => file => {
			props.actions.spinner();
			props.actions.validFile(true);
			props.actions.fileName(file);
			submitFile(file, props);
		}
	})
)(Landingpage);

export default LandingpageContainer;

function submitFile(file, props) {
	const formData = new FormData();
	formData.append('file', file[0]);
	axios
		.post(`/smc/postfile`, formData, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		})
		.then(res => {
			if (res) {
				props.actions.spinner();
			}
		})
		.catch(err => {
			props.actions.spinner();
			if (err) props.actions.validFile(false);
		});
}