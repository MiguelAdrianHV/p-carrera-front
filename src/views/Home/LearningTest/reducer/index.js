import { actions } from "./actions";
import { initialState } from "./constants";

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.SET_NEXT_QUESTION:
            return {
                ...state,
                preguntaActual: state.preguntaActual + 1,
            };
        case actions.IS_FINISHED:
            return {
                ...state,
                isFinished: true,
            };
        case actions.ADD_LEARNING_VISUAL:
            return {
                ...state,
                learning: {
                    ...state.learning,
                    visual: state.learning.visual + 1,
                },
            };
        case actions.ADD_LEARNING_AUDITIVO:
            return {
                ...state,
                learning: {
                    ...state.learning,
                    auditivo: state.learning.auditivo + 1,
                },
            };
        case actions.ADD_LEARNING_KINESTESICO:
            return {
                ...state,
                learning: {
                    ...state.learning,
                    kinestesico: state.learning.kinestesico + 1,
                },
            };
        case actions.SET_LEARNING_FINAL:
            return {
                ...state,
                learningFinal: action.payload,
            };
        case actions.REGISTER_LEARNING_REQUEST:
            return {
                ...state,
                registerLearning: {
                    ...state.registerLearning,
                    loading: true,
                    error: false,
                    message: "",
                },
            };
        case actions.REGISTER_LEARNING_SUCCESS:
            return {
                ...state,
                registerLearning: {
                    ...state.registerLearning,
                    loading: false,
                    error: false,
                    message: action.payload,
                },
            };
        case actions.REGISTER_LEARNING_FAILURE:
            return {
                ...state,
                registerLearning: {
                    ...state.registerLearning,
                    loading: false,
                    error: true,
                    message: action.payload,
                },
            };
        default:
            return state;
    }
};