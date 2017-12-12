import { combineReducers } from 'redux'
import { AuthReducer } from './AuthReducer';
import { AlertReducer } from './AlertReducer';
import { RegisterReducer } from './RegisterReducer';
import { UserReducer } from './UserReducer';

const rootReducer = combineReducers({
    AuthReducer,
    AlertReducer,
    RegisterReducer,
    UserReducer
});

export default rootReducer;