import { useContext } from "react";
import { Context } from "../context/Context";
import ositogif from "../assets/ositogif.gif";
import RemoveButton from "../components/RemoveButton";

const Lista = () => {
  const { list } = useContext(Context);

  return (
    <section className="px-5 mt-10">
      <h1 className="text-2xl">Lista de lectura</h1>
      <main className="mt-4 grid grid-cols-2 md:grid-cols-3 -6 gap-4 justify-items-center">
        {list.length > 0 ? (
          list?.map((b) => (
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
              <RemoveButton book={b}/>
            </article>
          ))
        ) : (
          <div>
            <h3>La lista está vacía</h3>
            <div className="w-32 h-40">
            <img src={ositogif} />
            </div>
            
          </div>
        )}
      </main>
    </section>
  );
};

export default Lista;
