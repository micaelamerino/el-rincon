import { BrowserRouter, Route, Routes } from "react-router-dom";
import Disponibles from "../pages/Disponibles";
import Lista from "../pages/Lista";
import Navbar from "../components/Navbar";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Disponibles />} />
          <Route path="/disponibles" element={<Disponibles />} />
          <Route path="/listado" element={<Lista />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
