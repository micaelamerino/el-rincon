import { useContext } from "react";
import { HeartIcon } from "./Icons";
import { Context } from "../context/Context";
import Swal from "sweetalert2";
import { toast } from "react-hot-toast";

const AddButton = ({ book }) => {
  const { list, setList } = useContext(Context);

  const handleClick = (book) => {
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
      toast.success("Añadido a la lista!", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <button
      onClick={() => handleClick(book)}
      className="absolute right-0 top-0 bg-rosa hover:bg-gris hover:duration-500 p-2 rounded-tr rounded-bl"
    >
      <HeartIcon />
    </button>
  );
};

export default AddButton;
