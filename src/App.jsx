import { Toaster } from "react-hot-toast";
import Filtros from "./components/Filtros";
import Header from "./components/Header";
import Disponibles from "./pages/Disponibles";
import Lista from "./pages/Lista";

function App() {
  return (
    <>
      <Header />
      <Filtros />
      <div className="flex justify-center">
        <Disponibles />
        <Lista />
      </div>
      <Toaster />
    </>
  );
}

export default App;
