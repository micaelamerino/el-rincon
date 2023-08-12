import { useContext } from "react";
import { Context } from "../context/Context";
import { toast } from "react-hot-toast";

const RemoveButton = ({ book }) => {
  const { list, setList } = useContext(Context);

  const handleClick = (book) => {
    const searchBook = list.find((b) => b.ISBN === book.ISBN);
    const newArray = list.filter((b) => b !== searchBook);
    setList(newArray);
    toast.error("Eliminado de la lista!", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <>
    <button
      onClick={() => handleClick(book)}
      className="bg-gris text-white font-normal px-2 py-1 rounded-md"
      type="button"
    >
      Quitar
    </button>
    </>
    
  );
};

export default RemoveButton;
