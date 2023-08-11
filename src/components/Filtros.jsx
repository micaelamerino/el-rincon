import { useContext, useState } from "react";
import { Context } from "../context/Context";
import { SearchIcon } from "./Icons";

const Filtros = () => {
  const { data, setBooks } = useContext(Context);
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState("");

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
      setMessage("")
    } else {
      setBooks(data);
      setMessage("No disponible, modifique el filtro");
    }
  };

  return (
    <section className="px-5 mt-3 flex flex-col items-center gap-8">
      <h1 className="text-3xl font-semibold">Explorar todos los libros</h1>

      <div className="flex flex-wrap items-center gap-48">
        <div>
          <form 
          className="flex items-center gap-2" 
          onSubmit={handleSubmit}>
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

        <div>
          <h4>Cantidad de páginas</h4>
          <div className="flex items-center gap-5 mt-3">
            <input className="accent-gris" type="range" />
            <span>Max</span>
          </div>
        </div>

        <div>
          <h4>Géneros</h4>
          <select className="mt-3 p-1 border border-gris bg-gray-200 rounded">
            <option value="">Todos</option>
            <option value="">Terror</option>
            <option value="">Zombies</option>
            <option value="">Fantasía</option>
            <option value="">Ciencia ficción</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default Filtros;
