import { connect } from 'react-redux'
import { UserActions } from '../../actions/UserActions';
import LoginFormView from './LoginFormView';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
    login: (username, password) =>{
        if (username && password) {
            dispatch(UserActions.login(username, password));
        }
    }
});

const LoginForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginFormView)

export default LoginForm