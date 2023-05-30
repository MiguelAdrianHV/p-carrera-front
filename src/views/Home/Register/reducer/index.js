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
    case actions.REGISTER_REQUEST:
      return {
        ...state,
        register: {
          ...state.register,
          loading: true,
          error: null,
          success: false,
        },
      };
    case actions.REGISTER_SUCCESS:
      localStorage.setItem(
        "userInfo",
        JSON.stringify({
          ...action.payload.user,
          access: action.payload.access,
        })
      );
      return {
        ...state,
        register: {
          ...state.register,
          loading: false,
          error: null,
          success: true,
          data: action.payload,
        },
      };
    case actions.REGISTER_FAILURE:
      return {
        ...state,
        register: {
          ...state.register,
          loading: false,
          error: action.payload,
          success: false,
        },
      };
    case actions.SET_STEP:
      return {
        ...state,
        step: action.payload,
      };
    default:
      return state;
  }
};
export { reducer, actions, initialState };
