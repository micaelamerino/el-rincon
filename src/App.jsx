import Filtros from "./components/Filtros";
import Header from "./components/Header";
import Disponibles from "./pages/Disponibles";
import Lista from "./pages/Lista";

function App() {

  return (
    <>
      <Header/>
      <Filtros/>
      <Disponibles/>
      <Lista/>
    </>
  );
}

export default App;
