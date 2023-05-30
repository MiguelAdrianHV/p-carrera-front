export const initialState = {
  formData: {
    email: "",
    password: "",
  },
  login: {
    loading: false,
    error: null,
    success: false,
    data: null,
  },
  errors: {
    email: {
      message: "Error en el correo",
      error: false,
    },
    password: {
      message: "Error en la contraseña",
      error: false,
    },
  },
  formConditions: {
    email: {
      condition: (value) => {
        if (!value) {
          return {
            passed: false,
            error: "El correo no puede estar vacio",
          };
        }
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
          return {
            passed: false,
            error: "Correo no valido",
          };
        }
        return {
          passed: true,
        };
      },
      required: true,
    },
    password: {
      condition: (value) => {
        if (!value) {
          return {
            passed: false,
            error: "La contraseña es requerida",
          };
        }
        return {
          passed: true,
        };
      },
      required: true,
    },
  },
  inputFields: [
    {
      name: "email",
      type: "email",
      placeholder: "Correo electrónico",
      label: "Correo electrónico",
      messageError: "",
      required: true,
    },
    {
      name: "password",
      type: "password",
      placeholder: "Contraseña",
      label: "Contraseña",
      messageError: "",
      required: true,
    },
  ],
};
