import { actions } from "./actions";
import { initialState } from "./constants";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.UPDATE_QUERY:
      return {
        ...state,
        query: action.payload,
      };
    case actions.SEARCH_REQUEST:
      return {
        ...state,
        search: {
          ...state.search,
          loading: true,
          error: null,
          success: false,
        },
      };
    case actions.SEARCH_SUCCESS:
      return {
        ...state,
        search: {
          ...state.search,
          loading: false,
          error: null,
          success: true,
          data: action.payload.users || [],
        },
      };
    case actions.SEARCH_FAIL:
      return {
        ...state,
        search: {
          ...state.search,
          loading: false,
          error: action.payload,
          success: false,
        },
      };
    case actions.SET_SELECTED_USER:
      return {
        ...state,
        selectedUser: action.payload,
      };
    case actions.GET_ACTIVE_CONVERSATIONS_REQUEST:
      return {
        ...state,
        getActiveConversations: {
          ...state.getActiveConversations,
          loading: true,
          error: null,
          success: false,
        },
      };
    case actions.GET_ACTIVE_CONVERSATIONS_SUCCESS:
      return {
        ...state,
        getActiveConversations: {
          ...state.getActiveConversations,
          loading: false,
          error: null,
          success: true,
          data: action.payload.message || [],
        },
      };
    case actions.GET_ACTIVE_CONVERSATIONS_FAIL:
      return {
        ...state,
        getActiveConversations: {
          ...state.getActiveConversations,
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
