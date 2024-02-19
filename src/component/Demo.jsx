import React from "react";
import useMode from "../hooks/useMode";

const Demo = ({ href }) => {
  const { mode } = useMode();
  return (
    <div className="flex justify-center">
      <div
        className={`rounded-full py-2 px-4 font-medium cursor-pointer transition-all border-line ${
          mode
            ? " bg-slate-600"
            : "bg-slate-800 hover:bg-slate-700 "
        }`}
      >
        <a
          href={href}
          target="_blank"
          className="flex justify-center items-center"
        >
          <svg
            className="mr-2 text-white"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
          </svg>
          <span className="text-white">Ir al sitio web</span>
        </a>
      </div>
    </div>
  );
};

export default Demo;
