import { useContext, useState } from "react";
import { Context } from "../context/Context";
import { SearchIcon } from "./Icons";
import { useEffect } from "react";

const Filtros = () => {
  const { data, setBooks } = useContext(Context);
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState("");

  const [filter, setFilter] = useState({
    minPages: 43,
    maxPages: 1200,
    category: "Todos",
  });

  /*Filtro por buscador */
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchBookS = data.filter((b) =>
      b.title.toLowerCase().includes(search.toLowerCase())
    );

    if (searchBookS.length > 0) {
      setBooks(searchBookS);
      setMessage("");
    } else {
      setBooks(data);
      setMessage("No disponible, modifique el filtro");
    }
  };

  /*Filtro por rango*/
  const handleChangesMinPages = (e) => {
    setFilter((prevState) => ({
      ...prevState,
      maxPages: e.target.value,
    }));
  };

  useEffect(() => {
    const filterRange = () => {
      const searchBook = data.filter((b) => b.pages <= filter.maxPages);
      if (searchBook) {
        setBooks(searchBook);
      }
    };
    filterRange();
  }, [filter.maxPages]);

  /*Filtro por género */
  const handleChangeGenre = (e) => {
    setFilter((prevState) => ({
      ...prevState,
      category: e.target.value,
    }));
  };

  useEffect(() => {
    const filterGenre = () => {
      const searchBook = data.filter((b) => b.genre === filter.category);

      if (searchBook) {
        setBooks(searchBook);
      } else {
        setBooks(data);
      }

      if (filter.category.includes("Todos")) {
        setBooks(data);
      }
    };
    filterGenre();
  }, [filter.category]);

  return (
    <section className="px-10 mt-5 flex flex-col gap-5 xl:items-center">
      <h1 className="text-3xl font-semibold">Explorar todos los libros</h1>

      <div className="flex flex-wrap items-center gap-5 lg:gap-20 xl:gap-48">
        <div>
          <form className="flex items-center gap-2" onSubmit={handleSubmit}>
            <input
              className="border-b border-gris py-1 px-2"
              onChange={handleChange}
              placeholder="Buscar por título"
              value={search}
            />
            <button
              className="border border-gris hover:bg-gray-200 hover:duration-300 rounded py-1 px-2"
              type="submit"
            >
              <SearchIcon />
            </button>
          </form>
          <p className="text-red-600 mt-1">{message}</p>
        </div>

        <div className="flex items-center gap-2">
          <label htmlFor="range">Páginas</label>
          <input
            onChange={handleChangesMinPages}
            className="accent-gris"
            id="range"
            type="range"
            min="43"
            max="1200"
          />
          <span className="w-20">{`Máx ${filter.maxPages}`}</span>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="generos">Géneros</label>
          <select
            onChange={handleChangeGenre}
            id="generos"
            className="p-1 border border-gris bg-gray-200 rounded"
          >
            <option value="Todos">Todos</option>
            <option value="Terror">Terror</option>
            <option value="Zombies">Zombies</option>
            <option value="Fantasía">Fantasía</option>
            <option value="Ciencia ficción">Ciencia ficción</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default Filtros;
