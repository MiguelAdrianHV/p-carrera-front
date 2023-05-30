import { actions } from "./actions";
import { initialState } from "./constants";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_ERRORS:
      return {
        ...state,
        errors: action.payload,
      };
    case actions.UPDATE_FORM_DATA:
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.payload.name]: action.payload.value,
        },
      };
    case actions.LOGIN_REQUEST:
      return {
        ...state,
        login: {
          ...state.login,
          loading: true,
          error: null,
          success: false,
        },
      };
    case actions.LOGIN_SUCCESS:
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
      return {
        ...state,
        login: {
          ...state.login,
          loading: false,
          error: null,
          success: true,
          data: action.payload,
        },
      };
    case actions.LOGIN_FAILURE:
      return {
        ...state,
        login: {
          ...state.login,
          loading: false,
          error: action.payload,
          success: false,
        },
      };
    default:
      return state;
  }
};
export { reducer, actions, initialState };
