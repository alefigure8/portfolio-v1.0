import React from "react";
import useMode from "../hooks/useMode";

const Linkedin = ({ href, text="Ver código fuente" }) => {
  const { mode } = useMode();
  return (
    <div className="flex justify-center">
      <div
        className={`rounded-full py-2 px-4 font-medium border-line cursor-pointer transition-all ${
          mode ? " bg-slate-600" : "bg-slate-800 hover:bg-slate-700 "
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
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
            <path d="M8 11l0 5"></path>
            <path d="M8 8l0 .01"></path>
            <path d="M12 16l0 -5"></path>
            <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
          </svg>
          <span className="text-white">{text}</span>
        </a>
      </div>
    </div>
  );
};

export default Linkedin;
