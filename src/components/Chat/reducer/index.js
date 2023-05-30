import { actions } from "./actions";
import { initialState } from "./constants";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.VALIDATE_CONVERSATION:
      return {
        ...state,
        validateConversation: {
          ...state.validateConversation,
          loading: true,
          error: null,
          success: false,
          data: null,
        },
      };
    case actions.VALIDATE_CONVERSATION_SUCCESS:
      return {
        ...state,
        validateConversation: {
          ...state.validateConversation,
          loading: false,
          error: null,
          success: true,
          data: action.payload,
        },
        chatMessages: action.payload.message,
      };
    case actions.VALIDATE_CONVERSATION_FAIL:
      return {
        ...state,
        validateConversation: {
          ...state.validateConversation,
          loading: false,
          error: action.payload,
          success: false,
          data: null,
        },
      };
    case actions.START_CONVERSATION:
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      return {
        ...state,
        startConversation: {
          ...state.startConversation,
          loading: true,
          error: null,
          success: false,
          data: null,
        },
        message: "",
        chatMessages: [
          ...state.chatMessages,
          {
            message: state.message,
            created_at: new Date(),
            user: {
              id: userInfo.id,
            },
          },
        ],
      };
    case actions.START_CONVERSATION_SUCCESS:
      return {
        ...state,
        startConversation: {
          ...state.startConversation,
          loading: false,
          error: null,
          success: true,
          data: action.payload,
        },
      };
    case actions.START_CONVERSATION_FAIL:
      return {
        ...state,
        startConversation: {
          ...state.startConversation,
          loading: false,
          error: action.payload,
          success: false,
          data: null,
        },
      };
    case actions.UPDATE_MESSAGE:
      return {
        ...state,
        message: action.payload,
      };
    case actions.SET_USER_SELECTED_REAL_TIME_INFO:
      return {
        ...state,
        userSelectedStatus: action.payload,
      };
    case actions.ADD_MESSAGE_RECEIVED:
      return {
        ...state,
        chatMessages: [
          ...state.chatMessages,
          {
            message: action.payload.message,
            created_at: new Date(),
            user: {
              ...action.payload.user,
            },
          },
        ],
      };
    default:
      return state;
  }
};
export { reducer, actions, initialState };
