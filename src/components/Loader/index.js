import React from "react";
import Icon from "components/icon";
import "./styles.sass";
export const Loader = () => {
  return (
    <div className="loader">
      <Icon nameIcon="FaSpinner" className="loader__icon" />
    </div>
  );
};
