import React from "react";
import useMode from "../hooks/useMode";

const SocialNetwork = ({network}) => {

  const { mode } = useMode();

  return (
    <a href={network.link} target="_blank" key={network.social}>
      <button
        className={`social-link py-3 px-4 rounded-lg parraph-social ${
          mode
            ? "text-teal-200  underline-link "
            : "text-teal-700 underline-link-light underline-link-light"
        }`}
      >
        <i
          className={`${network.icon} mr-2 ${mode && "color-link"}`}
          alt={`Icono de ${network.social}`}
        ></i>
        {network.user}
      </button>
    </a>
  );
};

export default SocialNetwork;
