// Styled components
import styled from "styled-components";
// Modifiers
import { applyStyleModifiers } from "styled-components-modifiers";
// utils
import { typeScale, primaryFont } from "utils/texts";
import { BUTTON_MODIFIERS } from "./modifiers";
import { formatLanguageText } from "utils/texts";

// icons
// Loader icon
import { BiLoaderAlt } from "react-icons/bi";
// Error icon
import { BiError } from "react-icons/bi";

// styles
import styles from "./styles.module.sass";
const ButtonBase = styled.button`
  // Set font
  font-family: ${primaryFont};
`;
const PrimaryButton = styled(ButtonBase)`
  // Change background color between themes
  background-color: ${(props) => props.theme.buttons.primary.background};
  // Change text color between themes
  color: ${(props) => props.theme.buttons.primary.color};
  i,
  svg {
    color: ${(props) => props.theme.buttons.primary.color};
  }
  // Add border
  border: 2px solid ${(props) => props.theme.buttons.primary.background};
  // Hover
  &:hover {
    background-color: ${(props) =>
      props.theme.buttons.primary.hover.background};
    color: ${(props) => props.theme.buttons.primary.hover.color};
    i,
    svg {
      color: ${(props) => props.theme.buttons.primary.hover.color};
    }
  }
  // Disabled
  &:disabled {
    cursor: not-allowed;
    &:hover {
      background-color: ${(props) => props.theme.buttons.primary.background};
      color: ${(props) => props.theme.buttons.primary.color};
    }
  }
  // Apply modifiers
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;
const PrimaryButtonAlt = styled(PrimaryButton)`
  // Hover
  &:hover {
    color: ${(props) => props.theme.buttons.primary.hover.alt};
  }
`;
const SecondaryButton = styled(ButtonBase)`
  // Change background color between themes
  background-color: ${(props) => props.theme.buttons.secondary.background};
  // Change text color between themes
  color: ${(props) => props.theme.buttons.secondary.color};
  // Add border
  border: 2px solid transparent;
  i,
  svg {
    color: ${(props) => props.theme.buttons.secondary.color};
  }
  // Hover
  &:hover {
    background-color: ${(props) =>
      props.theme.buttons.secondary.hover.background};
    color: ${(props) => props.theme.buttons.secondary.hover.color};
    i,
    svg {
      color: ${(props) => props.theme.buttons.secondary.hover.color};
    }
  }
  // Disabled
  &:disabled {
    cursor: not-allowed;
    &:hover {
      background-color: ${(props) => props.theme.buttons.secondary.background};
      color: ${(props) => props.theme.buttons.secondary.color};
    }
  }
  // Apply modifiers
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;
const TertiaryButton = styled(ButtonBase)`
  // Change background color between themes
  background-color: ${(props) => props.theme.buttons.tertiary.background};
  // Change text color between themes
  color: ${(props) => props.theme.buttons.tertiary.color};
  // Hover
  &:hover {
    background-color: ${(props) =>
      props.theme.buttons.tertiary.hover.background};
    color: ${(props) => props.theme.buttons.tertiary.hover.color};
    i,
    svg {
      color: ${(props) => props.theme.buttons.tertiary.hover.color};
    }
  }
  // Disabled
  &:disabled {
    cursor: not-allowed;
    &:hover {
      background-color: ${(props) => props.theme.buttons.tertiary.background};
      color: ${(props) => props.theme.buttons.tertiary.color};
    }
  }
  // apply modifiers
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;
const FooterButton = styled(ButtonBase)`
  // Change background color between themes
  background: ${(props) => props.theme.buttons.secondary.background};
  color: ${(props) => props.theme.buttons.secondary.color};
  // Add border
  border: none;
  // Border radius
  border-radius: 0;
  // Font size
  font-size: ${typeScale.helperText};
`;

export const Button = ({
  type,
  disabled,
  onClick,
  modifiers,
  text,
  language,
  loading,
  error,
  icon,
  ...props
}) => {
  // Get button type
  const getButtonType = () => {
    switch (type) {
      case "primary":
        return PrimaryButton;
      case "primary-alt":
        return PrimaryButtonAlt;
      case "secondary":
        return SecondaryButton;
      case "tertiary":
        return TertiaryButton;
      case "footer":
        return FooterButton;
      default:
        return PrimaryButton;
    }
  };
  // Set button type
  const ButtonType = getButtonType();
  // Render
  return (
    <ButtonType
      disabled={disabled}
      onClick={onClick}
      modifiers={modifiers}
      className={styles.button}
      {...props}
    >
      {loading ? (
        <>
          <BiLoaderAlt className={styles.loader} />
          {language == "en" ? "Loading" : "Cargando"}
        </>
      ) : error && error.isError ? (
        <>
          <BiError className={styles.error} />{" "}
          {formatLanguageText({ language, en: error.en, es: error.es })}
        </>
      ) : (
        <>
          {icon && icon}
          {text && formatLanguageText({ language, en: text.en, es: text.es })}
        </>
      )}
    </ButtonType>
  );
};
