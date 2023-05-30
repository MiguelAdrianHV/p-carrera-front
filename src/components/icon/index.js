import React from "react";
import loadable from "@loadable/component";
export default function Icon({ nameIcon, onClick }) {
  const lib = nameIcon
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .split(" ")[0]
    .toLocaleLowerCase();
  const ElementIcon = loadable(() => import(`react-icons/${lib}/index.js`), {
    resolveComponent: (component) => {
      return component[nameIcon];
    },
  });

  return <ElementIcon onClick={onClick} />;
}
