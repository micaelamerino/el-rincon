import { BrowserRouter, Route, Routes } from "react-router-dom";
import Disponibles from "../pages/Disponibles";
import Lista from "../pages/Lista";
import Navbar from "../components/Navbar";
import Error404 from "../pages/Error404";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Disponibles />} />
          <Route path="/disponibles" element={<Disponibles />} />
          <Route path="/listado" element={<Lista />} />
          <Route path="*" element={<Error404/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
