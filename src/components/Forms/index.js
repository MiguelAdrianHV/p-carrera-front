import styled from "styled-components";
import { primaryFont } from "utils";

export const FieldSet = styled.fieldset`
  padding: 1.5rem 1rem;
  margin-bottom: 1rem;
  legend {
    font-family: ${primaryFont};
    font-size: 0.9rem;
  }
  border: 1px solid ${(props) => props.theme.form.borderColor};
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.form.background};
  accent-color: ${(props) => props.theme.form.accentColor};

  textarea {
    resize: none;
  }
  button {
    margin-top: 1rem;
  }
  label {
    font-size: 1.2rem;
    font-family: ${primaryFont};
    margin-bottom: 1rem;
    color: ${(props) => props.theme.form.color};
    display: flex;
    align-items: center;
    justify-content: space-between;
    svg {
      margin-left: 0.5rem;
    }
  }

  p {
    font-size: 0.9rem;
    text-align: justify;
    margin-bottom: 0;
    margin-top: 0;
  }
  input,
  textarea,
  select,
  option {
    font-family: ${primaryFont};
    border: 1px solid ${(props) => props.theme.form.borderColor};
    border-radius: 0.1rem;
    padding: 0.5rem;
    font-size: 1rem;
    color: ${(props) => props.theme.form.color};
    accent-color: ${(props) => props.theme.form.accentColor};
    transition: all 0.3s ease-in-out;
    &:focus {
      outline: none;
      box-shadow: 0 0 0.1rem ${(props) => props.theme.form.accentColor};
      border: 1px solid ${(props) => props.theme.form.borderColor};
    }
  }
  .label__checkbox {
    display: inline-block;
  }
  checkbox {
    display: inline-block;
  }
  .quill {
    margin-bottom: 0.5rem;
  }
  .input {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }
  .input__error{
    color: red;
    margin-top: 0.5rem;
    margin-bottom: 0;
    font-size: 0.8rem;
  }
  input[type="file"] {
    color: transparent;
    border: none;
    padding-left: 0;
    transition: all 0.3s ease-in-out;
    font-size: 0.7rem;
    width: fit-content;
    border: none;

    &:focus {
      outline: none;
      box-shadow: none;
      border: none;
    }
  }
  input[type="file"]::-webkit-file-upload-button {
    visibility: hidden;
  }
  input[type="file"]::before {
    content: "Seleccione un archivo";
    color: #333;
    display: inline-block;
    background: ${(props) => props.theme.form.inputFile.background};
    border: 1px solid #e6e6e6;
    padding: 5px 8px;
    outline: none;
    white-space: nowrap;
    -webkit-user-select: none;
    cursor: pointer;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    min-width: 110px;
    font-family: ${primaryFont};
  }
  input[type="file"]:hover::before {
    outline: none;
    box-shadow: 0 0 0.2rem ${(props) => props.theme.form.inputFile.background};
    border: 1px solid transparent;
  }
  input[type="file"]:active {
    outline: 0;
  }
  .image_form_container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    animation: appearPage 0.5s ease-in-out;
    img {
      display: block;
      margin: 15px 0;
      max-width: 330px;
      max-height: 250px;
    }
    span {
      font-size: 12px;
    }
  }
  .checkboxes {
    display: flex;
    align-items: center;
    input {
      margin-bottom: 0;
    }
    span {
      margin-left: 10px;
    }
  }
  .form__image__buttons {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }
  .form__image__preview {
    display: flex;
    flex-direction: column;
    margin: 1.5rem 0;
    gap: 1rem;
    img {
      width: 10rem;
      height: 10rem;
      object-fit: contain;
    }
    p {
      font-size: 0.7rem;
    }
  }
  /* type color */
  input[type="color"] {
    padding: 0;
  }
`;
