import React from "react";
import useMode from "../hooks/useMode";

const Demo = ({ href }) => {
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
          <i className="fa-solid fa-globe mr-2 text-white text-2xl"></i>
          <span className="text-white">Ir al sitio web</span>
        </a>
      </div>
    </div>
  );
};

export default Demo;
