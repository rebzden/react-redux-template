import { UserConstants } from '../constants';

export function UserReducer(state = {}, action) {
  switch (action.type) {
    case UserConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case UserConstants.GETALL_SUCCESS:
      return {
        items: action.users
      };
    case UserConstants.GETALL_FAILURE:
      return { 
        error: action.error
      };
    case UserConstants.DELETE_REQUEST:
      // add 'deleting:true' property to user being deleted
      return {
        ...state,
        items: state.items.map(user =>
          user.id === action.id
            ? { ...user, deleting: true }
            : user
        )
      };
    case UserConstants.DELETE_SUCCESS:
      // remove deleted user from state
      return {
        items: state.items.filter(user => user.id !== action.id)
      };
    case UserConstants.DELETE_FAILURE:
      // remove 'deleting:true' property and add 'deleteError:[error]' property to user 
      return {
        ...state,
        items: state.items.map(user => {
          if (user.id === action.id) {
            // make copy of user without 'deleting:true' property
            const { deleting, ...userCopy } = user;
            // return copy of user with 'deleteError:[error]' property
            return { ...userCopy, deleteError: action.error };
          }

          return user;
        })
      };
    default:
      return state
  }
}