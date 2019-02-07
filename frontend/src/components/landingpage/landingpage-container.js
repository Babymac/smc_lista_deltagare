import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';
import { bindActionCreators } from 'redux';
import {} from '../../reducers/landingpage/landingpage.actions';
import Landingpage from './landingpage';
//---------------------------------------
// Imports and constants
//---------------------------------------
function mapStateToProps(state) {
	const { landingpage } = state;
	return { landingpage };
}

function mapDispatchToProps(dispatch) {
	const actions = bindActionCreators({}, dispatch);
	return { actions };
}

const LandingpageContainer = compose(
	connect(
		mapStateToProps,
		mapDispatchToProps
	),
	withHandlers({})
)(Landingpage);

export default LandingpageContainer;
