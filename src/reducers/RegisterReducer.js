import { UserConstants } from '../constants';

export function RegisterReducer(state = {}, action) {
  switch (action.type) {
    case UserConstants.REGISTER_REQUEST:
      return { registering: true };
    case UserConstants.REGISTER_SUCCESS:
      return {};
    case UserConstants.REGISTER_FAILURE:
      return {};
    default:
      return state
  }
}