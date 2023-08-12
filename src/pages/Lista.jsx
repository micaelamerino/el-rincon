import { useContext } from "react";
import { Context } from "../context/Context";
import ositogif from "../assets/ositogif.gif";
import RemoveButton from "../components/RemoveButton";

const Lista = () => {
  const { list } = useContext(Context);

  return list.length > 0 ? (
    <main className="mt-4 mx-8 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 justify-items-center">
      {list?.map((b) => (
        <article
          key={b.ISBN}
          className="flex flex-col gap-2 flex-wrap w-36 items-center"
        >
          <div className="w-32 h-40 rounded-sm">
            <img
              className="w-full h-full object-cover rounded-sm"
              src={b.cover}
              alt={`Portada del libro ${b.title}`}
            />
          </div>
          <RemoveButton book={b} />
        </article>
      ))}
    </main>
  ) : (
    <div className="mt-5 flex flex-col items-center">
      <h3>Oooops!</h3>
      <p>Aún no hay libros en su lista de lectura</p>
      <div className="w-56">
        <img src={ositogif} alt="Imágen animada de un osito indicando que la lista de libros está vacía" />
      </div>
    </div>
  );
};

export default Lista;
