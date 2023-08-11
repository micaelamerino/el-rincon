import { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

export const Context = createContext();

export const DataContext = ({ children }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [books, setBooks] = useState([]);
  const [list, setList] = useState([]);

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
          "Ops! No se encontró la información solicitada, vuelva a intentar en un instante"
        );
      }
    };
    getData();
  }, []);

  const addBook = (book) => {
    const searchBook = list.find((b) => b.ISBN === book.ISBN);
    if (searchBook) {
      Swal.fire({
        title: "¿Qué pasó?",
        text: "Este libro ya existe en la lista, pruebe agregando otro",
        icon: "info",
        confirmButtonText: "Entendido",
        confirmButtonColor: "#ffb9b8",
      });
    } else {
      setList([...list, book]);
    }
  };

  return (
    <Context.Provider value={{ books, setBooks, data, error, addBook, list, setList }}>
      {children}
    </Context.Provider>
  );
};
