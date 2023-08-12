import { NavLink, Outlet } from "react-router-dom";
import Filtros from "./Filtros";
import Header from "./Header";

const Navbar = () => {
  return (
    <>
      <Header />
      <Filtros />
      <nav className="flex flex-wrap gap-5 mt-5 pl-10 text-xl">
        <NavLink className={({isActive})=> (isActive ? "bg-rosa text-gris border-2 rounded-md border-rosa px-2 py-1" : "border-2 rounded-md border-rosa px-2 py-1")} to={"/disponibles"} >Libros disponibles</NavLink>
        <NavLink className={({isActive})=> (isActive ? "bg-rosa text-gris border-2 rounded-md border-rosa px-2 py-1" : "border-2 rounded-md border-rosa px-2 py-1")} to={"/listado"} >Listado de lectura</NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
