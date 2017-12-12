import { AlertConstants } from '../constants';

export function AlertReducer(state = {}, action) {
  switch (action.type) {
    case AlertConstants.SUCCESS:
      return {
        type: 'alert-success',
        message: action.message
      };
    case AlertConstants.ERROR:
      return {
        type: 'alert-danger',
        message: action.message
      };
    case AlertConstants.CLEAR:
      return {};
    default:
      return state
  }
}