import { useContext } from "react";
import { HeartIcon } from "./Icons";
import { Context } from "../context/Context";

const AddButton = ({ book }) => {
    const {addBook} = useContext(Context);
  return (
    <button 
    onClick={()=>addBook(book)}
    className="absolute right-0 top-0 bg-rosa p-1 rounded-tr">
      <HeartIcon />
    </button>
  );
};

export default AddButton;
