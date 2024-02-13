import React from "react";
import useMode from "../hooks/useMode";

const Title = ({ title }) => {

  const { mode } = useMode();

  return <h4 className={mode ? "sub-title" : "sub-title-light"}>{title}</h4>;
};

export default Title;
