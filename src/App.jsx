import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import PaginaPadrao from "./Paginas/PaginaPadrao.jsx";
import Inicio from "./Paginas/Inicio/Inicio.jsx";

import { AnimatePresence } from "framer-motion";
import Sobrenos from "./Paginas/Sobrenos/Sobrenos.jsx";
import Cursos from "./Paginas/Cursos/Cursos.jsx";
import Servicos from "./Paginas/Servicos/Servicos.jsx";
import Contato from "./Paginas/Contato/Contato.jsx";
import Aos from "aos";
import "aos/dist/aos.css"

function App() {
  const location = useLocation();

  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, [])

  return (<>

    <AnimatePresence mode="wait" >
      <Routes location={location.pathname}>

        <Route path="/" element={<PaginaPadrao />} >
          <Route path="/" element={<Inicio />} />
          <Route path="/sobrenos" element={<Sobrenos />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="*" element={"Página nao existe"} />
        </Route>
      </Routes>
    </AnimatePresence>

  </>)
}

export default App;
