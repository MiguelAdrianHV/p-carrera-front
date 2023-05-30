export const initialState = {
    aptitudes: {
        exterior: 0,
        mecanica: 0,
        calculo: 0,
        cientifica: 0,
        persuasiva: 0,
        artistica: 0,
        literaria: 0,
        musical: 0,
        servicio: 0,
        oficina: 0,
    },
    preguntaActual: 0,
    isFinished: false,
    aptitudFinal: "",
    registerAptitude: {
        loading: false,
        error: false,
        message: "",
    },
}