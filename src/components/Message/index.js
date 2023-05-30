import { TextComponent } from "components/Texts";
import React from "react";
import { getHumanReadableDate } from "utils";
import "./styles.sass";
const image =
  "https://i.pinimg.com/originals/f1/85/6d/f1856d7b4f814ae073384f404054a793.jpg";
export const Message = (props) => {
  return (
    <div
      className={`
    message__container
    ${
      props.myMessage
        ? "message__container--my-message"
        : "message__container--other-message"
    }
    `}
      key={props.key}
    >
      <div className="message__image">
        <img src={image} alt="user" />
      </div>
      <div className="message__content">
        <TextComponent type="p" text={props.message} disableLocales={true} />
        <TextComponent
          type="p"
          className="message__date"
          text={getHumanReadableDate(props.created_at)}
          disableLocales={true}
        />
      </div>
    </div>
  );
};
