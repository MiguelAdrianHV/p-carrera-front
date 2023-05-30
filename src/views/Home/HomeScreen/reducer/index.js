import { actions } from "./actions";
import { initialState } from "./constants";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_SELECTED_USER:
      return {
        ...state,
        selectedUser: action.payload,
      };
    case actions.SET_USER_DATA_SOCKET:
      return {
        ...state,
        userDataSocket: action.payload,
      };
    default:
      return state;
  }
};
export { reducer, actions, initialState };
