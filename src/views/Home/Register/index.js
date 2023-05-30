import { Form, Input, Button, TextComponent } from "components";
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
    <div className="register__screen">
      <div className="register__screen__left"></div>
      <div className="register__screen__right">
        <TextComponent
          text={{
            es: "Registro",
            en: "Register",
          }}
          type="h2"
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
              <Button
                text={{
                  es: "Anterior",
                  en: "Previous",
                }}
                type="secondary"
                onClick={handlePrevStep}
                disabled={state.register.loading}
                hidden={state.register.loading}
              />
            )}
            {/* Next step */}
            {state.step < state.totalSteps && (
              <Button
                text={{
                  es: "Siguiente",
                  en: "Next",
                }}
                type="secondary"
                onClick={handleNextStep}
                disabled={state.register.loading}
                hidden={state.register.loading}
              />
            )}

            {/* Submit */}
            {state.step === state.totalSteps && (
              <Button
                text={{
                  es: "Enviar",
                  en: "Submit",
                }}
                type="primary"
                onClick={handleSubmit}
                loading={state.register.loading}
              />
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
                  Already have an account? <a href="/login">Login</a>
                </>
              ),
            }}
          />
        </div>
      </div>
    </div>
  );
}
