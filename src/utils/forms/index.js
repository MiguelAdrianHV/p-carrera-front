export const createFormData = (data) => {
  const formData = new FormData();
  for (var key in data) {
    formData.append(key, data[key]);
  }
  return formData;
};

export const formValidator = ({
  formData,
  formConditions,
  dispatch,
  errors,
  setErrors,
  step,
}) => {
  // Destructuring
  let errorsAux = { ...errors };
  let passedStep = true;

  // Validate formData
  Object.keys(formConditions).forEach((key) => {
    let { passed, error } = formConditions[key].condition(formData[key]);
    if (passed || !formConditions[key].required) {
      errorsAux[key].error = false;
    } else {
      if (step) {
        if (step == formConditions[key].step) {
          errorsAux[key].error = true;
          errorsAux[key].message = error;
          passedStep = false;
        }
      } else {
        errorsAux[key].error = true;
        errorsAux[key].message = error;
      }
    }
  });
  dispatch({ type: setErrors, payload: errorsAux });
  if (step) {
    if (passedStep === false) {
      return false;
    }
  } else {
    if (Object.values(errorsAux).filter((error) => error.error).length > 0) {
      return false;
    }
  }

  return true;
};
