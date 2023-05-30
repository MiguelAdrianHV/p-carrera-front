export const initialState = {
  step: 1,
  totalSteps: 3,
  formData: {
    email: "",
    password: "",
    confirmPassword: "",
    first_name: "",
    last_name: "",
    identifier_number: "",
  },
  register: {
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
    confirmPassword: {
      message: "Error en la confirmación de contraseña",
      error: false,
    },
    first_name: {
      message: "Error en el nombre",
      error: false,
    },
    last_name: {
      message: "Error en el apellido",
      error: false,
    },
    identifier_number: {
      message: "Error en el número de identificación",
      error: false,
    },
    gender: {
      message: "Error en el género",
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
      step: 1,
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
      step: 3,
    },
    confirmPassword: {
      condition: (value) => {
        if (!value) {
          return {
            passed: false,
            error: "La confirmación de contraseña es requerida",
          };
        }
        return {
          passed: true,
        };
      },
      required: true,
      step: 3,
    },
    first_name: {
      condition: (value) => {
        if (!value) {
          return {
            passed: false,
            error: "El nombre es requerido",
          };
        }
        return {
          passed: true,
        };
      },
      required: true,
      step: 1,
    },
    last_name: {
      condition: (value) => {
        if (!value) {
          return {
            passed: false,
            error: "El apellido es requerido",
          };
        }
        return {
          passed: true,
        };
      },
      required: true,
      step: 1,
    },
    identifier_number: {
      condition: (value) => {
        if (!value) {
          return {
            passed: false,
            error: "El número de identificación es requerido",
          };
        }
        return {
          passed: true,
        };
      },
      required: true,
      step: 2,
    },
    gender: {
      condition: (value) => {
        if (!value) {
          return {
            passed: false,
            error: "El genero es requerido",
          };
        }
        return {
          passed: true,
        };
      },
      required: true,
      step: 2,
    },
  },
  inputFields: [
    {
      name: "first_name",
      type: "text",
      placeholder: "Nombre",
      label: "Nombre",
      required: true,
      step: 1,
    },
    {
      name: "last_name",
      type: "text",
      placeholder: "Apellido",
      label: "Apellido",
      required: true,
      step: 1,
    },
    {
      name: "email",
      type: "email",
      placeholder: "Correo electrónico",
      label: "Correo electrónico",
      required: true,
      step: 1,
    },
    {
      name: "identifier_number",
      type: "text",
      placeholder: "Número de identificación",
      label: "Número de identificación",
      required: true,
      step: 2,
    },
    {
      name: "password",
      type: "password",
      placeholder: "Contraseña",
      label: "Contraseña",
      required: true,
      step: 3,
    },
    {
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirmar contraseña",
      label: "Confirmar contraseña",
      required: true,
      step: 3,
    },
    {
      name: "gender",
      type: "select",
      placeholder: "Género",
      label: "Género",
      messageError: "",
      required: true,
      options: [
        {
          value: "female",
          label: "Femenino",
        },
        {
          value: "male",
          label: "Masculino",
        },
        {
          value: "not_specified",
          label: "Prefiero no responder",
        },
      ],
      step: 2,
    },
  ],
};
