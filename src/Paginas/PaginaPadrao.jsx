import { Outlet } from "react-router-dom"
import Cabecalho from "../Componentes/Cabecalho/Cabecalho.jsx"
import Rodape from "../Componentes/Rodape/Rodape.jsx"
import NavegacaoInferior from "../Componentes/NavegacaoInferior/NavegacaoInferior.jsx"

const PaginaPadrao =  (() => {

    return <>
        <Cabecalho />
        <div className="min-h-screen">
            <Outlet />
        </div>
        <Rodape />
        <NavegacaoInferior />
    </>
})
export default PaginaPadrao