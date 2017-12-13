/* eslint-disable flowtype/require-valid-file-annotation */

import { connect } from 'react-redux'
import { UserActions } from '../actions/UserActions';
import LayoutLoggedView from './LayoutLoggedView';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
    logout: () =>{
      dispatch(UserActions.logout());
    }
});

const LayoutLogged = connect(
  mapStateToProps,
  mapDispatchToProps
)(LayoutLoggedView)

export default LayoutLogged