import React from "react";
import useMode from "../hooks/useMode";

const Github = ({ href }) => {
  const { mode } = useMode();
  return (
    <div className="flex justify-center mt-6">
      <div
        className={`rounded-full py-2 px-4 font-medium  cursor-pointer transition-all ${
          mode ? " bg-slate-600 hover:bg-slate-500" : "bg-slate-800 hover:bg-slate-700 "
        }`}
      >
        <a
          href={href}
          target="_blank"
          className="flex justify-center items-center"
        >
          <i
            className="fa-brands fa-github mr-2 text-white text-2xl"
            alt="Icono de Github"
          ></i>
          <span className="text-white">Ver código fuente</span>
        </a>
      </div>
    </div>
  );
};

export default Github;
