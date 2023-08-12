import { createContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const Context = createContext();

export const DataContext = ({ children }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [books, setBooks] = useState([]);
  const [list, setList] = useLocalStorage("list", []);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("books.json");
        const json = await response.json();
        const info = await json;
        setData(info.library.map((b) => b.book));
        setBooks(info.library.map((b) => b.book));
      } catch (error) {
        setError(
          " No fue posible encontrar la información solicitada, pruebe salir de la aplicación y volver a ingresar."
        );
      }
    };
    getData();
  }, []);

  return (
    <Context.Provider value={{ books, setBooks, data, error, list, setList }}>
      {children}
    </Context.Provider>
  );
};
