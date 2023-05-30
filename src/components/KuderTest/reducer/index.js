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
        case actions.ADD_APTITUDE_EXTERIOR:
            return {
                ...state,
                aptitudes: {
                    ...state.aptitudes,
                    exterior: state.aptitudes.exterior + 1,
                },
            };
        case actions.ADD_APTITUDE_MECANICA:
            return {
                ...state,
                aptitudes: {
                    ...state.aptitudes,
                    mecanica: state.aptitudes.mecanica + 1,
                },
            };
        case actions.ADD_APTITUDE_CALCULO:
            return {
                ...state,
                aptitudes: {
                    ...state.aptitudes,
                    calculo: state.aptitudes.calculo + 1,
                },
            };
        case actions.ADD_APTITUDE_CIENTIFICA:
            return {
                ...state,
                aptitudes: {
                    ...state.aptitudes,
                    cientifica: state.aptitudes.cientifica + 1,
                },
            };
        case actions.ADD_APTITUDE_PERSUASIVA:
            return {
                ...state,
                aptitudes: {
                    ...state.aptitudes,
                    persuasiva: state.aptitudes.persuasiva + 1,
                },
            };
        case actions.ADD_APTITUDE_ARTISTICA:
            return {
                ...state,
                aptitudes: {
                    ...state.aptitudes,
                    artistica: state.aptitudes.artistica + 1,
                },
            };
        case actions.ADD_APTITUDE_LITERARIA:
            return {
                ...state,
                aptitudes: {
                    ...state.aptitudes,
                    literaria: state.aptitudes.literaria + 1,
                },
            };
        case actions.ADD_APTITUDE_MUSICAL:
            return {
                ...state,
                aptitudes: {
                    ...state.aptitudes,
                    musical: state.aptitudes.musical + 1,
                },
            };
        case actions.ADD_APTITUDE_SERVICIO:
            return {
                ...state,
                aptitudes: {
                    ...state.aptitudes,
                    servicio: state.aptitudes.servicio + 1,
                },
            };
        case actions.ADD_APTITUDE_OFICINA:
            return {
                ...state,
                aptitudes: {
                    ...state.aptitudes,
                    oficina: state.aptitudes.oficina + 1,
                },
            };
        case actions.SET_APTITUDE_FINAL:
            return {
                ...state,
                aptitudFinal: action.payload,
            };
        default:
            return state;
    }
};