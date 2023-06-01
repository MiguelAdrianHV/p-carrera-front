import { useReducer } from "react";
import { reducer } from "./reducer";
import { initialState } from "./reducer/constants";
import { actions } from "./reducer/actions";
import { Navbar } from "components";
import { petition } from "api";
import { useNavigate } from "react-router-dom";
import "./styles.sass";
import aprendizajes from "./aprendizajes";
import preguntas from "./preguntas";

export default function LearningTest() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const navigate = useNavigate();

  function handleAnswerClick(answer) {
    if (state.preguntaActual < preguntas.length - 1) {
      dispatch({ type: actions.SET_NEXT_QUESTION });
    } else {
      dispatch({ type: actions.IS_FINISHED });
      let aprendizaje = "";
      let max = 0;
      for (const key in state.learning) {
        if (state.learning[key] > max) {
          max = state.learning[key];
          aprendizaje = key.toString();
        }
      }
      dispatch({ type: actions.SET_LEARNING_FINAL, payload: aprendizaje });
    }
    switch (answer) {
      case "visual":
        dispatch({ type: actions.ADD_LEARNING_VISUAL });
        break;
      case "auditivo":
        dispatch({ type: actions.ADD_LEARNING_AUDITIVO });
        break;
      case "kinestesico":
        dispatch({ type: actions.ADD_LEARNING_KINESTESICO });
        break;
      default:
        break;
    }
    console.log(state);
  }

  function handleRegisterLearning() {
    petition({
      url: `/user/tests/${userInfo.id}/learning`,
      method: "POST",
      constants: {
        REQUEST: actions.REGISTER_LEARNING_REQUEST,
        SUCCESS: actions.REGISTER_LEARNING_SUCCESS,
        FAILURE: actions.REGISTER_LEARNING_FAILURE,
      },
      dispatch: dispatch,
      body: {
        result: state.learningFinal,
      },
    });
    navigate("/");
  }

  if (state.isFinished) {
    let objetoAprendizaje = {};
    aprendizajes.forEach((aprendizaje) => {
      if (aprendizaje.name === state.learningFinal) {
        objetoAprendizaje = aprendizaje;
      }
    });
    console.log(objetoAprendizaje);
    console.log(state);
    return (
      <div>
        <Navbar />
        <div className="learning__test">
          <div className="container">
            <div className="learning__test--result">
              <h1 className="learning__test--result--title">
                Tu estilo de aprendizaje es:
              </h1>
              <h1 className="learning__test--result--learning">
                {objetoAprendizaje.realName}
              </h1>
              <p className="learning__test--result--description">
                {objetoAprendizaje.value}
              </p>
              <button
                className="learning__test--result--button"
                onClick={handleRegisterLearning}
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="learning__test">
        <div className="container">
          <div className="learning__test--question">
            <h1 className="learning__test--question--number">
              Pregunta {state.preguntaActual + 1} de {preguntas.length}
            </h1>
            <div className="learning__test--question--title">
              <h1>{preguntas[state.preguntaActual].pregunta}</h1>
            </div>
            <div className="learning__test--question--answers">
              {preguntas[state.preguntaActual].respuestas.map(
                (respuesta, index) => (
                  <button
                    className="learning__test--question--answer"
                    onClick={() => handleAnswerClick(respuesta.valor)}
                    key={index}
                  >
                    {respuesta.respuesta}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
