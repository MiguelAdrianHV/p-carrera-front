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
    case actions.USER_TEST_REQUEST:
      return {
        ...state,
        userTest: {
          ...state.userTest,
          loading: true,
        },
      };
    case actions.USER_TEST_SUCCESS:
      return {
        ...state,
        userTest: {
          ...state.userTest,
          loading: false,
          data: action.payload,
        },
      };
    case actions.USER_TEST_FAILURE:
      return {
        ...state,
        userTest: {
          ...state.userTest,
          loading: false,
          error: action.payload,
        },
      };
    default:
      return state;
  }
};
export { reducer, actions, initialState };
