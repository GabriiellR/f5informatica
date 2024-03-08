import { Routes, Route, useLocation, Outlet } from "react-router-dom";
import PaginaPadrao from "./Paginas/PaginaPadrao.js";


function App() {
  const location = useLocation();

  return (<>
    <Routes location={location.pathname}>

      <Route path="/" element={<PaginaPadrao />} >
        <Route path="/" element={<div className="h-96">O que vem ao meio</div>} />
        <Route path="*" element={"Essa página nao existe"} />
      </Route>

    </Routes>
  </>)
}

export default App;
