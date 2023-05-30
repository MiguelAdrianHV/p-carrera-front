import { useReducer } from "react";
import respuestas from "./respuestas";
import aptitudes from "./aptitudes";
import { reducer } from "./reducer";
import { initialState } from "./reducer/constants";
import { actions } from "./reducer/actions";
import "./styles.css";

export const KuderTest = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleAnswerClick(answer) {
    if (state.preguntaActual < respuestas.length - 1) {
      dispatch({ type: actions.SET_NEXT_QUESTION });
    } else {
      dispatch({ type: actions.IS_FINISHED });
      let aptitud = "";
      let max = 0;
      for (const key in state.aptitudes) {
        if (state.aptitudes[key] > max) {
          max = state.aptitudes[key];
          aptitud = key.toString();
        }
      }
      dispatch({ type: actions.SET_APTITUDE_FINAL, payload: aptitud });
    }
    switch (answer) {
      case "exterior":
        dispatch({ type: actions.ADD_APTITUDE_EXTERIOR });
        break;
      case "mecanica":
        dispatch({ type: actions.ADD_APTITUDE_MECANICA });
        break;
      case "calculo":
        dispatch({ type: actions.ADD_APTITUDE_CALCULO });
        break;
      case "cientifica":
        dispatch({ type: actions.ADD_APTITUDE_CIENTIFICA });
        break;
      case "persuasiva":
        dispatch({ type: actions.ADD_APTITUDE_PERSUASIVA });
        break;
      case "artistica":
        dispatch({ type: actions.ADD_APTITUDE_ARTISTICA });
        break;
      case "literaria":
        dispatch({ type: actions.ADD_APTITUDE_LITERARIA });
        break;
      case "musical":
        dispatch({ type: actions.ADD_APTITUDE_MUSICAL });
        break;
      case "servicio":
        dispatch({ type: actions.ADD_APTITUDE_SERVICIO });
        break;
      case "oficina":
        dispatch({ type: actions.ADD_APTITUDE_OFICINA });
        break;
      default:
        break;
    }
  }

  if (state.isFinished) {
    let objetoAptitud = {}
    aptitudes.forEach((aptitud) => {
        if (aptitud.name === state.aptitudFinal) {
            objetoAptitud = aptitud;
        }
    })

    return (
      <main className="kuder-test">
        <div className="container">
          <div className="titulo-resultado">
            <h1>Resultados</h1>
          </div>
          <div className="resultado">
            <h1>Su aptitud es {objetoAptitud.realName}</h1>
          </div>
            <div className="descripcion-resultado">
                {objetoAptitud.value.map((value, index) => {
                    return <p key={index}>{value}</p>
                })}
            </div>
          <div className="boton-reiniciar">
            <button onClick={() => (window.location.href = "/")}>
              Reiniciar
            </button>
            
          </div>
        </div>
      </main>
    );
  }

  return (
    <div>
      <main className="kuder-test">
        <div className="container">
          <div className="numero-pregunta">
            <h1>
              Pregunta {state.preguntaActual + 1} de {respuestas.length}
            </h1>
          </div>
          <div className="titulo-pregunta">
            <h1>¿Qué prefieres?</h1>
          </div>
          <div className="respuesta">
            {respuestas[state.preguntaActual].map((answer, index) => {
              return (
                <button
                  className="boton-respuesta"
                  onClick={() => handleAnswerClick(answer.valor)}
                  key={index}
                >
                  {answer.texto}
                </button>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};
