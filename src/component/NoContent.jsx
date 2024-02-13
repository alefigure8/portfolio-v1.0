import React from "react";
import mode from "../hooks/useMode";

const NoContent = ({ msg }) => {
  return (
    <p
      className={`text-center parraph ${
        mode ? "text-zinc-400" : "text-zinc-800"
      }`}
    >
      {msg}
    </p>
  );
};

export default NoContent;
