import { useContext } from "react";
import { Context } from "../context/Context";

const Lista = () => {
  const { list } = useContext(Context);

  return (
    <section>
      <h1>Lista de libros</h1>
      <main>
        {list.length > 0 &&
          list?.map((b) => (
            <article key={b.ISBN}>
              <h3>{b.title}</h3>
            </article>
          ))}
      </main>
    </section>
  );
};

export default Lista;
