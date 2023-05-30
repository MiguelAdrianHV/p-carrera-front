import React from "react";

export const Input = ({
  name,
  value,
  onChange,
  type,
  placeholder,
  label,
  error,
  disabled,
  key,
  ...props
}) => {
  return (
    <div className="input" key={key}>
      {label && <label htmlFor={name}>{label}</label>}
      {type !== "select" && (
        <input
          name={name}
          value={value}
          onChange={onChange}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          {...props}
        />
      )}
      {type === "select" && (
        <select
          name={name}
          value={value}
          onChange={onChange}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          {...props}
        >
          {props.options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      )}

      {error?.error && <p className="input__error">{error.message}</p>}
    </div>
  );
};
