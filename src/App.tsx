import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import ListarCategorias from "./components/categorias/ListarCategorias";
import Categoria from "./pages/categoria/Categoria";

import DeletarCategoria from "./components/categorias/DeletarCategoria";
import FormCategoria from "./components/categorias/FormCategoria";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="min-h-[80vh]">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/categoria" element={<Categoria />} />
          <Route path="/categoria" element={<ListarCategorias />} /> 
          <Route path="/categoria/cadastrar" element={<FormCategoria />} /> 
          
          {/* Atualização de categoria */}
          <Route path="/categoria/editar/:id" element={<FormCategoria />} />

          {/* Deletar categoria */}
          <Route path="/categoria/deletar/:id" element={<DeletarCategoria />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

