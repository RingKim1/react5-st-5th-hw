import { createContext, useState } from "react";

export const Context = createContext(null);

export default function ContextProvider({ children }) {
  const [texts, setTexts] = useState(() =>
    localStorage.getItem("texts")
      ? JSON.parse(localStorage.getItem("texts"))
      : []
  );
  return (
    <Context.Provider value={{ texts, setTexts }}>{children}</Context.Provider>
  );
}
