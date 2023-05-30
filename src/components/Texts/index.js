import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";
import { HEADERS_MODIFIERS } from "./modifiers";
export const formatLanguageText = ({ language, en, es }) => {
  if (language === "es") {
    return es;
  }
  return en;
};
export const TextComponent = ({
  language,
  text,
  type = "p",
  modifiers = [],
  disableLocales = false,
  ...props
}) => {
  const content = !disableLocales
    ? formatLanguageText({ language, en: text.en, es: text.es })
    : text;
  const Container = styled(type)`
    color: ${(props) => props.theme.textColor};
    ${applyStyleModifiers(HEADERS_MODIFIERS)}
  `;
  return (
    <Container modifiers={[...modifiers]} {...props}>
      {content}
    </Container>
  );
};
