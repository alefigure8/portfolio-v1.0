import { createContext, useState, useEffect } from "react";

const ModeContext = createContext();

const ModeProvider = ({ children }) => {
  const localMode =
    JSON.parse(localStorage.getItem("mode")) == null
      ? true
      : JSON.parse(localStorage.getItem("mode"));
  const [mode, setMode] = useState(localMode);

  useEffect(() => {
    const getMode = () => {
      if (localStorage.getItem("mode") === null) {
        localStorage.setItem("mode", JSON.stringify(mode));
      }

      setMode(mode);
    };

    getMode();
  }, []);

  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(mode));
  }
  , [mode]);

  return (
    <ModeContext.Provider
      value={{
        mode,
        setMode,
      }}
    >
      {children}
    </ModeContext.Provider>
  );
};

export { ModeContext };

export default ModeProvider;
