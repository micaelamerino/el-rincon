import { useContext } from "react";
import { Context } from "../context/Context";
import AddButton from "../components/AddButton";

const Disponibles = () => {
  const { books, error } = useContext(Context);

  return books.length>0 ? (
    <main className="mt-4 mb-10 mx-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
      {books?.map((book) => (
        <article className=" w-52" key={book.ISBN}>
          <div className="w-full h-72 relative">
            <img
              src={book.cover}
              alt={`Imagen de portada del libro ${book.title}`}
              loading="lazy"
              className="w-full h-full object-cover rounded-t-md"
            />
            <AddButton book={book} />
          </div>

          <div className="flex flex-col flex-wrap content-center gap-1 mt-1">
            <h3>{book.title}</h3>
            <p>{book.genre}</p>
            <p className="font-medium text-sm">{book.synopsis}</p>
            <p>Páginas: {book.pages}</p>
          </div>
        </article>
      ))}
    </main>
  ) : (
    <div className="mt-5 flex flex-col items-center">
      <h3>
       {error}
      </h3>
    </div>
  );
};

export default Disponibles;
