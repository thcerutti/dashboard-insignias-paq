import React from "react";
import { FaStar } from "react-icons/fa";

const EstrelaInsignia = ({ nivel }) => {
  const cor = {
    1: "#b87333", // copper
    2: "#c0c0c0", // silver
    3: "#ffd700", // gold
  };
  return (
    <span>
      <FaStar style={{ fill: cor[nivel] }} title={`Nível ${nivel}`} />
    </span>
  );
};

export default EstrelaInsignia;
