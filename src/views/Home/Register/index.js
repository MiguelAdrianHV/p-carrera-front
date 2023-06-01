import { Form, Input, TextComponent } from "components";
import React, { useReducer, useEffect } from "react";
import { reducer, actions, initialState } from "./reducer";
import { formValidator } from "utils";
import "./styles.sass";
import { petition } from "api";
import { useNavigate } from "react-router-dom";
export default function RegisterScreen() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();
  const handleChange = (e) => {
    dispatch({
      type: actions.UPDATE_FORM_DATA,
      payload: { name: e.target.name, value: e.target.value },
    });
  };
  const handleSubmit = () => {
    var isPassed = formValidator({
      dispatch: dispatch,
      formConditions: state.formConditions,
      formData: state.formData,
      errors: state.errors,
      setErrors: actions.SET_ERRORS,
    });
    if (isPassed) {
      petition({
        url: "/user/new/",
        method: "POST",
        body: state.formData,
        dispatch: dispatch,
        constants: {
          REQUEST: actions.REGISTER_REQUEST,
          SUCCESS: actions.REGISTER_SUCCESS,
          FAILURE: actions.REGISTER_FAILURE,
        },
      });
    }
  };
  const handleNextStep = () => {
    const passedStep = formValidator({
      dispatch: dispatch,
      formConditions: state.formConditions,
      formData: state.formData,
      errors: state.errors,
      setErrors: actions.SET_ERRORS,
      step: state.step,
    });
    if (passedStep) {
      let register__form = document.getElementById("register__form");
      register__form.classList.add("next__step");
      setTimeout(() => {
        dispatch({
          type: actions.SET_STEP,
          payload: state.step + 1,
        });
        register__form.classList.remove("next__step");
      }, 300);
    }
  };
  const handlePrevStep = () => {
    let register__form = document.getElementById("register__form");
    // remove class to form
    register__form.classList.add("prev__step");
    setTimeout(() => {
      dispatch({
        type: actions.SET_STEP,
        payload: state.step - 1,
      });
      register__form.classList.remove("prev__step");
    }, 300);
  };
  useEffect(() => {
    if (state.register.success) {
      navigate("/");
    }
  }, [state.register.success, navigate]);
  return (
      <div className="register__screen__right">
        <TextComponent
          text={{
            es: "Registro",
            en: "Registro",
          }}
          type="h1"
        />
        <Form onSubmit={(e) => e.preventDefault()} id="register__form">
          {state.inputFields
            .filter((input) => input.step === state.step)
            .map((input, index) => (
              <Input
                {...input}
                name={input.name}
                type={input.type}
                placeholder={input.placeholder}
                label={input.label}
                onChange={handleChange}
                key={index}
                error={{
                  error: state.errors[input.name].error,
                  message: state.errors[input.name].message,
                }}
                value={state.formData[input.name]}
              />
            ))}
          <div className="action__buttons">
            {/* Previous step */}
            {state.step > 1 && (
              <button onClick={handlePrevStep}>
                Anterior
              </button>
            )}
            {/* Next step */}
            {state.step < state.totalSteps && (
              <button onClick={handleNextStep}>
                Siguiente
              </button>
            )}

            {/* Submit */}
            {state.step === state.totalSteps && (
              <button onClick={handleSubmit}>
                Enviar
              </button>
            )}
          </div>
        </Form>

        <div className="login__footer">
          <TextComponent
            type="h4"
            text={{
              es: (
                <>
                  ¿Ya tienes una cuenta? <a href="/login">Inicia sesión</a>{" "}
                </>
              ),
              en: (
                <>
                  ¿Ya tienes una cuenta? <a href="/login">Inicia sesión</a>{" "}
                </>
              ),
            }}
          />
        </div>
      </div>
  );
}
