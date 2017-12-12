import { connect } from 'react-redux'
import { UserActions } from '../../actions/UserActions';
import RegisterFormView from './RegisterFormView';

const mapStateToProps = state => ({
    loggingIn: state.AuthReducer
});

const mapDispatchToProps = dispatch => ({
    register: (user) =>{
        if (user.firstName && user.lastName && user.username && user.password) {
            dispatch(UserActions.register(user));
        }
    }
});

const RegisterForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterFormView)

export default RegisterForm