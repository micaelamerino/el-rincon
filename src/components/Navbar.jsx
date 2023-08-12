import { NavLink, Outlet } from "react-router-dom";
import Filtros from "./Filtros";
import Header from "./Header";

const Navbar = () => {
  return (
    <>
      <Header />
      <Filtros />
      <nav className="flex flex-wrap gap-5 mt-5 pl-10 text-xl">
        <NavLink className={({isActive})=> (isActive ? "activo" : null)} to={"/disponibles"} >Libros disponibles</NavLink>
        <NavLink className={({isActive})=> (isActive ? "activo" : null)} to={"/listado"} >Listado de lectura</NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
