import { Form, Input } from "components";
import React, { useReducer, useEffect } from "react";
import { reducer, actions, initialState } from "./reducer";
import { formValidator } from "utils";
import { TextComponent } from "components";
import { petition } from "api";
import { useNavigate } from "react-router-dom";
import "./styles.sass";
export default function LoginScreen() {
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
        url: "/user/login/",
        method: "POST",
        body: state.formData,
        constants: {
          REQUEST: actions.LOGIN_REQUEST,
          SUCCESS: actions.LOGIN_SUCCESS,
          FAILURE: actions.LOGIN_FAILURE,
        },
        dispatch: dispatch,
      });
    }
  };
  useEffect(() => {
    if (state.login.success) {
      navigate("/");
    }
  }, [state.login.success, navigate]);
  return (
    <div className="login__screen">
      <TextComponent
          type="h1"
          text={{
            en: "Iniciar sesión",
            es: "Iniciar sesión",
          }}
        />
        <Form onSubmit={(e) => e.preventDefault()}>
          {state.inputFields.map((input, index) => (
            <Input
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
              disabled={state.login.loading}
            />
          ))}
          <button  className="button-login" onClick={handleSubmit}>
            Iniciar Sesion
          </button>
        </Form>
        <div className="login__footer">
          <TextComponent
            type="h4"
            text={{
              es: (
                <>
                  ¿Aún no tienes una cuenta? <a onClick={() => navigate("/register")}>Regístrate</a>
                </>
              ),
              en: (
                <>
                  ¿Aún no tienes una cuenta? <a onClick={() => navigate("/register")}>Regístrate</a>
                </>
              ),
            }}
          />
        </div>
    </div>
  );
}
